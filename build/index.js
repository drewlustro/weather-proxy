'use strict';

/**
 * weather-proxy
 * @description Simple cleanup and compression of Weather API data into fewer bytes that the Arduino Yun can handle.
 * @author Drew Lustro
 * @copyright Maxrelax Inc
 */

var request = require('request');
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var log = console.log;

var sysnote = chalk.bold.blue;
var errnote = chalk.bold.red;
var note = chalk.dim.gray;
var success = chalk.green;
var ynote = chalk.yellow;
var black = chalk.black;

var USE_LOCAL = true;

var LOCAL_WEATHER_DATA = require('./fixtures/darksky-weather-sample');
var WEATHER_URL = 'https://api.darksky.net/forecast/483edf4420d21e2d625cf60805566a7e/40.650002,-73.949997?exclude=minutely,daily,alerts,flags';
var NUM_HOURLY_SAMPLES = 16;
var HOUR_SKIP_STEP = 4;

var OUTPUT_DIR = 'output';
var CWD = process.cwd();
var JSON_FILENAME = 'weather.json';
var CSV_FILENAME = 'weather.csv';
var JSON_PATH = path.join(__dirname, '..', OUTPUT_DIR, JSON_FILENAME);
var CSV_PATH = path.join(__dirname, '..', OUTPUT_DIR, CSV_FILENAME);

var isJsonDone = false;
var isCsvDone = false;

function digestWeatherData(data) {
  var hourly = data['hourly']['data'];
  var samples = [];

  // create structure
  for (var i = 0; i < NUM_HOURLY_SAMPLES; i++) {

    var s = {
      time: 0,
      offset: 0,
      temperature: undefined,
      summary: undefined
    };

    s.time = hourly[i]['time'];
    s.offset = i;
    s.temperature = hourly[i]['temperature'];
    s.summary = hourly[i]['icon'];

    samples.push(s);
  }

  samples = normalizeWeatherConditions(samples);
  samples = roundWeatherConditions(samples);

  // filter by one every four hours
  return samples.filter(function (x, index) {
    return index % 4 == 0;
  });
}

/**
 * Normalizes raw weather conditions data to only
 * important 4-character codes or 'NONE'
 *
 * @param  {Array} samples Array of HourlyWeather objects. Each object must have a 'summary' property.
 * @return {Array}         Array of HourlyWeather objects with their 'summary' member normalized
 */
function normalizeWeatherConditions(samples) {
  // filter weather conditions
  var NONE_CONDITIONS = ['clear', 'clear-day', 'clear-night', 'cloudy', 'partly-cloudy-day', 'partly-cloudy-night', 'tornado'];
  var FOG_CONDITIONS = ['fog'];
  var RAIN_CONDITIONS = ['rain', 'thunderstorm'];
  var SNOW_CONDITIONS = ['snow', 'sleet'];
  var ACCEPTABLE_CONDITIONS = ['NONE', 'FOG', 'RAIN', 'SNOW'];

  // normalize to NONE, FOG, RAIN, and SNOW
  return samples.map(function (obj) {
    var s = Object.assign({}, obj);
    if (NONE_CONDITIONS.indexOf(s.summary) !== -1) {
      s.summary = 'NONE';
    }

    if (FOG_CONDITIONS.indexOf(s.summary) !== -1) {
      s.summary = 'FOG';
    }

    if (RAIN_CONDITIONS.indexOf(s.summary) !== -1) {
      s.summary = 'RAIN';
    }

    if (SNOW_CONDITIONS.indexOf(s.summary) !== -1) {
      s.summary = 'SNOW';
    }

    // fallback to 'NONE' if encounter unrecognized weather code
    if (ACCEPTABLE_CONDITIONS.indexOf(s.summary) !== -1) {
      s.summary = 'NONE';
    }

    return s;
  });
}

/**
 * Walks HourlyWeather samples array and assigns an important weather event to the nearest 4-hour step increment. Looks in order: -1h, +1h, and -2 hour from current position
 * @param  {Array}         Array of HourlyWeather objects. Each object must have a normalized 'summary' property.
 * @return {Array}         Array of HourlyWeather objects with their 'summary' member rounded.
 */
function roundWeatherConditions(samples) {
  // round useful conditions to nearby hour
  for (var i = 0; i < samples.length; i += HOUR_SKIP_STEP) {
    if (samples[i].summary === 'NONE' || samples[i].summary === 'FOG') {

      // in order: check -1h, +1h, then -2h
      if (i - 1 >= 0 && samples[i - 1].summary !== 'NONE') {
        samples[i].summary = samples[i - 1].summary;
      } else if (i + 1 < samples.length && samples[i + 1].summary !== 'NONE') {
        samples[i].summary = samples[i + 1].summary;
      } else if (i - 2 >= 0 && samples[i - 2].summary !== 'NONE') {
        samples[i].summary = samples[i - 2].summary;
      }
    }
  }

  return samples;
}

function generateCSV(arr) {
  var csv = '';
  for (var i = 0; i < arr.length; i++) {
    var sample = arr[i];
    csv += sample.temperature + ',' + sample.offset + ',' + sample.time + ',' + sample.summary + '\n';
  }
  return csv;
}

function writeSamplesToDisk(samples) {

  var json = JSON.stringify(samples);
  var csv = generateCSV(samples);

  fs.writeFile(JSON_PATH, json, function (error) {
    isJsonDone = true;
    if (error) return log(errnote('File write error: ', error));
    var len = Buffer.byteLength(json, 'utf8');
    log(success('Wrote ' + JSON_FILENAME + ' data (' + len + ' bytes).'));

    fs.writeFile(CSV_PATH, csv, function (error) {
      isCsvDone = true;
      if (error) return log(errnote('File write error: ', error));
      var len = Buffer.byteLength(csv, 'utf8');
      log(success('Wrote ' + CSV_FILENAME + ' data (' + len + ' bytes).'));

      log(note('Hourly data points: ' + samples.length + ' total \n'));
      process.exit(0);
    });
  });
}

var now = new Date();
var samples = void 0;

log(sysnote('WEATHER PROXY [v1.1.0]'));
log(note('' + now.toLocaleString()));
if (USE_LOCAL) {
  log('Processing local weather data only (prevent API request)...');
  samples = digestWeatherData(LOCAL_WEATHER_DATA);
  writeSamplesToDisk(samples);
} else {
  log('Fetch weather from DarkSky API...');
  request({
    url: WEATHER_URL,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      samples = digestWeatherData(body);
      writeSamplesToDisk(samples);
      return 0;
    } else {
      log(error("Error:", error));
      return;
    }
  });
}
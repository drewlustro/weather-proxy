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

var USE_LOCAL = true;
var LOCAL_WEATHER_DATA = require('./fixtures/darksky-weather-sample');
var WEATHER_URL = 'https://api.darksky.net/forecast/483edf4420d21e2d625cf60805566a7e/40.650002,-73.949997?exclude=minutely,daily,alerts,flags';
var NUM_HOURLY_SAMPLES = 12;

var OUTPUT_DIR = 'output';
var CWD = process.cwd();
var JSON_FILENAME = 'weather.json';
var CSV_FILENAME = 'weather.csv';
var JSON_PATH = path.join(CWD, OUTPUT_DIR, JSON_FILENAME);
var CSV_PATH = path.join(CWD, OUTPUT_DIR, CSV_FILENAME);

var isJsonDone = false;
var isCsvDone = false;
var samples = [];

function generateCSV(arr) {
  var csv = '';
  for (var i = 0; i < arr.length; i++) {
    var sample = arr[i];
    csv += sample.temperature + ',' + sample.offset + ',' + sample.time + ',' + sample.summary + '\n';
  }
  return csv;
}

function digestWeatherData(data) {
  var hourly = data['hourly']['data'];

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
    s.summary = hourly[i]['summary'];

    samples.push(s);
  }

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

log(sysnote('WEATHER PROXY'));
log(note('' + now.toLocaleString()));
if (USE_LOCAL) {
  log('Processing local weather data only (prevent API request)...');
  digestWeatherData(LOCAL_WEATHER_DATA);
} else {
  log('Fetch weather from DarkSky API...');
  request({
    url: WEATHER_URL,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      digestWeatherData(body);
      return 0;
    } else {
      log(error("Error:", error));
      return;
    }
  });
}
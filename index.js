/**
 * weather-proxy
 * @description Simple cleanup and compression of Weather API data into fewer bytes that the Arduino Yun can handle.
 * @author Drew Lustro
 * @copyright Maxrelax Inc
 */

var request = require('request');
var path = require('path');
var fs = require('fs');

var WEATHER_URL = 'https://api.darksky.net/forecast/483edf4420d21e2d625cf60805566a7e/40.650002,-73.949997?exclude=minutely,daily,alerts,flags';
var NUM_HOURLY_SAMPLES = 12;
var JSON_FILE = 'weather.json';
var CSV_FILE = 'weather.csv';
var OUTPUT_DIR = 'output';
var JSON_PATH = path.join(__dirname, OUTPUT_DIR, JSON_FILE);
var CSV_PATH = path.join(__dirname, OUTPUT_DIR, CSV_FILE);
var JSON_DONE = false;
var CSV_DONE = false;
var samples = [];

function generateCSV(arr) {
  var csv = '';
  for (var i = 0; i < arr.length; i++) {
    var sample = arr[i];
    csv += sample.temperature + ',' + sample.offset + ',' +
            sample.time + ',' + sample.summary + '\n';
  }
  return csv;
}

request({
  url:WEATHER_URL,
  json: true
}, function (error, response, body) {
  if (!error && response.statusCode == 200) {

      var data = body;
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
        JSON_DONE = true;
        if (error) return console.log('File write error: ', error)
        var len = Buffer.byteLength(json, 'utf8');
        console.log('Wrote ' + JSON_FILE + ' data (' + len + ' bytes).');

        fs.writeFile(CSV_PATH, csv, function (error) {
          CSV_DONE = true;
          if (error) return console.log('File write error: ', error);
          var len = Buffer.byteLength(csv, 'utf8');
          console.log('Wrote ' + CSV_FILE + ' data (' + len + ' bytes).');

          console.log('Total hourly data points: ' + samples.length + '\n');
          process.exit(0);

        })

      });
      return 0;
  } else {
    console.log("Error:", error);
    return;
  }
});

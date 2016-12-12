/**
 * weather-proxy
 * @description Simple cleanup and compression of Weather API data into fewer bytes that the Arduino Yun can handle.
 * @author Drew Lustro
 * @copyright Maxrelax Inc
 */

 const request = require('request')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const sysnote = chalk.bold.blue
const errnote = chalk.bold.red
const note = chalk.dim.gray
const success = chalk.green

const USE_LOCAL = true
const LOCAL_WEATHER_DATA = require('./fixtures/darksky-weather-sample')
const WEATHER_URL = 'https://api.darksky.net/forecast/483edf4420d21e2d625cf60805566a7e/40.650002,-73.949997?exclude=minutely,daily,alerts,flags'
const NUM_HOURLY_SAMPLES = 12

const OUTPUT_DIR = 'output'
const CWD = process.cwd()
const JSON_FILENAME = 'weather.json'
const CSV_FILENAME = 'weather.csv'
const JSON_PATH = path.join(CWD, OUTPUT_DIR, JSON_FILENAME)
const CSV_PATH = path.join(CWD, OUTPUT_DIR, CSV_FILENAME)

let isJsonDone = false
let isCsvDone = false
let samples = []

function generateCSV(arr) {
  let csv = ''
  for (let i = 0; i < arr.length; i++) {
    let sample = arr[i]
    csv += sample.temperature + ',' + sample.offset + ',' +
            sample.time + ',' + sample.summary + '\n'
  }
  return csv
}

function digestWeatherData(data) {
  let hourly = data['hourly']['data']

  for (let i = 0; i < NUM_HOURLY_SAMPLES; i++) {

    let s = {
      time: 0,
      offset: 0,
      temperature: undefined,
      summary: undefined
    }

    s.time = hourly[i]['time']
    s.offset = i
    s.temperature = hourly[i]['temperature']
    s.summary = hourly[i]['summary']

    samples.push(s)
  }

  let json = JSON.stringify(samples)
  let csv = generateCSV(samples)

  fs.writeFile(JSON_PATH, json, function (error) {
    isJsonDone = true
    if (error) return log(errnote('File write error: ', error))
    let len = Buffer.byteLength(json, 'utf8')
    log(success(`Wrote ${JSON_FILENAME} data (${len} bytes).`))

    fs.writeFile(CSV_PATH, csv, function (error) {
      isCsvDone = true
      if (error) return log(errnote('File write error: ', error))
      let len = Buffer.byteLength(csv, 'utf8')
      log(success(`Wrote ${CSV_FILENAME} data (${len} bytes).`))

      log(note(`Hourly data points: ${samples.length} total \n`))
      process.exit(0)

    })

  })
}

let now = new Date()

log(sysnote(`WEATHER PROXY`))
log(note(`${now.toLocaleString()}`))
if (USE_LOCAL) {
  log('Processing local weather data only (prevent API request)...')
  digestWeatherData(LOCAL_WEATHER_DATA)
} else {
  log('Fetch weather from DarkSky API...')
  request({
    url:WEATHER_URL,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        digestWeatherData(body)
        return 0
    } else {
      log(error("Error:", error))
      return
    }
  })
}



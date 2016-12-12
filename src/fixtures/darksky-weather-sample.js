/**
 * Sample data from Dark Sky API
 * https://api.darksky.net/forecast/483edf4420d21e2d625cf60805566a7e/40.650002,-73.949997?exclude=minutely,daily,alerts,flags
 */

module.exports = {
  "latitude": 40.650002,
  "longitude": -73.949997,
  "timezone": "America/New_York",
  "offset": -5,
  "currently": {
    "time": 1481569232,
    "summary": "Mostly Cloudy",
    "icon": "partly-cloudy-day",
    "nearestStormDistance": 30,
    "nearestStormBearing": 356,
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 45,
    "apparentTemperature": 40.35,
    "dewPoint": 40.95,
    "humidity": 0.86,
    "windSpeed": 8.73,
    "windBearing": 260,
    "visibility": 8.86,
    "cloudCover": 0.79,
    "pressure": 1010.46,
    "ozone": 278.31
  },
  "hourly": {
    "summary": "Partly cloudy starting tonight.",
    "icon": "partly-cloudy-day",
    "data": [
      {
        "time": 1481569200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0.0014,
        "precipProbability": 0.02,
        "precipType": "rain",
        "temperature": 45,
        "apparentTemperature": 40.36,
        "dewPoint": 40.96,
        "humidity": 0.86,
        "windSpeed": 8.72,
        "windBearing": 260,
        "visibility": 8.86,
        "cloudCover": 0.79,
        "pressure": 1010.46,
        "ozone": 278.28
      },
      {
        "time": 1481572800,
        "summary": "Overcast",
        "icon": "rain",
        "precipIntensity": 0.0008,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 44.29,
        "apparentTemperature": 38.94,
        "dewPoint": 39.54,
        "humidity": 0.83,
        "windSpeed": 10.06,
        "windBearing": 260,
        "visibility": 9.19,
        "cloudCover": 0.98,
        "pressure": 1010.27,
        "ozone": 281.57
      },
      {
        "time": 1481576400,
        "summary": "Mostly Cloudy",
        "icon": "snow",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 43.5,
        "apparentTemperature": 38.28,
        "dewPoint": 38.61,
        "humidity": 0.83,
        "windSpeed": 9.27,
        "windBearing": 261,
        "visibility": 9.17,
        "cloudCover": 0.9,
        "pressure": 1010.4,
        "ozone": 283.75
      },
      {
        "time": 1481580000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 42,
        "apparentTemperature": 36.6,
        "dewPoint": 37.39,
        "humidity": 0.84,
        "windSpeed": 8.9,
        "windBearing": 257,
        "visibility": 9.09,
        "cloudCover": 0.77,
        "pressure": 1010.83,
        "ozone": 283.8
      },
      {
        "time": 1481583600,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 41.18,
        "apparentTemperature": 35.29,
        "dewPoint": 36.29,
        "humidity": 0.83,
        "windSpeed": 9.56,
        "windBearing": 253,
        "visibility": 9.11,
        "cloudCover": 0.49,
        "pressure": 1011.55,
        "ozone": 282.73
      },
      {
        "time": 1481587200,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 40.46,
        "apparentTemperature": 34,
        "dewPoint": 35.03,
        "humidity": 0.81,
        "windSpeed": 10.52,
        "windBearing": 255,
        "visibility": 9.17,
        "cloudCover": 0.23,
        "pressure": 1012.49,
        "ozone": 281.73
      },
      {
        "time": 1481590800,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.71,
        "apparentTemperature": 32.62,
        "dewPoint": 33.96,
        "humidity": 0.8,
        "windSpeed": 11.64,
        "windBearing": 257,
        "visibility": 9.28,
        "cloudCover": 0.16,
        "pressure": 1013.52,
        "ozone": 281.12
      },
      {
        "time": 1481594400,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.01,
        "apparentTemperature": 31.58,
        "dewPoint": 33.33,
        "humidity": 0.8,
        "windSpeed": 12.03,
        "windBearing": 257,
        "visibility": 9.37,
        "cloudCover": 0.12,
        "pressure": 1014.64,
        "ozone": 280.57
      },
      {
        "time": 1481598000,
        "summary": "Clear",
        "icon": "sleet",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 38.1,
        "apparentTemperature": 30.36,
        "dewPoint": 31.75,
        "humidity": 0.78,
        "windSpeed": 12.25,
        "windBearing": 261,
        "visibility": 9.44,
        "cloudCover": 0.12,
        "pressure": 1015.65,
        "ozone": 280.21
      },
      {
        "time": 1481601600,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.18,
        "apparentTemperature": 29.3,
        "dewPoint": 30.77,
        "humidity": 0.77,
        "windSpeed": 12,
        "windBearing": 265,
        "visibility": 9.46,
        "cloudCover": 0.11,
        "pressure": 1016.5,
        "ozone": 280.19
      },
      {
        "time": 1481605200,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 36.41,
        "apparentTemperature": 28.65,
        "dewPoint": 30.25,
        "humidity": 0.78,
        "windSpeed": 11.24,
        "windBearing": 266,
        "visibility": 9.46,
        "cloudCover": 0.08,
        "pressure": 1017.25,
        "ozone": 280.36
      },
      {
        "time": 1481608800,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 35.64,
        "apparentTemperature": 27.95,
        "dewPoint": 29.48,
        "humidity": 0.78,
        "windSpeed": 10.63,
        "windBearing": 269,
        "visibility": 9.53,
        "cloudCover": 0.1,
        "pressure": 1017.93,
        "ozone": 280.47
      },
      {
        "time": 1481612400,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.99,
        "apparentTemperature": 27.39,
        "dewPoint": 28.66,
        "humidity": 0.77,
        "windSpeed": 10.1,
        "windBearing": 273,
        "visibility": 9.56,
        "cloudCover": 0.18,
        "pressure": 1018.56,
        "ozone": 280.53
      },
      {
        "time": 1481616000,
        "summary": "Partly Cloudy",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.19,
        "apparentTemperature": 26.7,
        "dewPoint": 27.77,
        "humidity": 0.77,
        "windSpeed": 9.49,
        "windBearing": 276,
        "visibility": 9.57,
        "cloudCover": 0.35,
        "pressure": 1019.14,
        "ozone": 280.54
      },
      {
        "time": 1481619600,
        "summary": "Partly Cloudy",
        "icon": "rain",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 33.49,
        "apparentTemperature": 26.37,
        "dewPoint": 27.09,
        "humidity": 0.77,
        "windSpeed": 8.5,
        "windBearing": 278,
        "visibility": 9.57,
        "cloudCover": 0.45,
        "pressure": 1019.71,
        "ozone": 280.23
      },
      {
        "time": 1481623200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 32.83,
        "apparentTemperature": 26.36,
        "dewPoint": 26.67,
        "humidity": 0.78,
        "windSpeed": 7.19,
        "windBearing": 273,
        "visibility": 9.53,
        "cloudCover": 0.38,
        "pressure": 1020.28,
        "ozone": 279.36
      },
      {
        "time": 1481626800,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 32.42,
        "apparentTemperature": 26.64,
        "dewPoint": 25.61,
        "humidity": 0.76,
        "windSpeed": 6.13,
        "windBearing": 268,
        "visibility": 9.53,
        "cloudCover": 0.27,
        "pressure": 1020.87,
        "ozone": 278.17
      },
      {
        "time": 1481630400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 31.98,
        "apparentTemperature": 26.41,
        "dewPoint": 26.04,
        "humidity": 0.78,
        "windSpeed": 5.74,
        "windBearing": 265,
        "visibility": 9.71,
        "cloudCover": 0.31,
        "pressure": 1021.4,
        "ozone": 277.18
      },
      {
        "time": 1481634000,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 32.87,
        "apparentTemperature": 27.73,
        "dewPoint": 26.62,
        "humidity": 0.78,
        "windSpeed": 5.42,
        "windBearing": 264,
        "visibility": 9.84,
        "cloudCover": 0.48,
        "pressure": 1021.82,
        "ozone": 276.54
      },
      {
        "time": 1481637600,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.02,
        "apparentTemperature": 29.42,
        "dewPoint": 27.15,
        "humidity": 0.76,
        "windSpeed": 5.04,
        "windBearing": 265,
        "visibility": 9.92,
        "cloudCover": 0.54,
        "pressure": 1022.14,
        "ozone": 276.1
      },
      {
        "time": 1481641200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 35.22,
        "apparentTemperature": 31.27,
        "dewPoint": 27.6,
        "humidity": 0.73,
        "windSpeed": 4.54,
        "windBearing": 263,
        "visibility": 9.96,
        "cloudCover": 0.58,
        "pressure": 1022.21,
        "ozone": 275.9
      },
      {
        "time": 1481644800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 36.49,
        "apparentTemperature": 33.41,
        "dewPoint": 27.93,
        "humidity": 0.71,
        "windSpeed": 3.86,
        "windBearing": 254,
        "visibility": 10,
        "cloudCover": 0.64,
        "pressure": 1021.89,
        "ozone": 276.15
      },
      {
        "time": 1481648400,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.78,
        "apparentTemperature": 35.45,
        "dewPoint": 28.32,
        "humidity": 0.68,
        "windSpeed": 3.34,
        "windBearing": 241,
        "visibility": 10,
        "cloudCover": 0.88,
        "pressure": 1021.3,
        "ozone": 276.66
      },
      {
        "time": 1481652000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.02,
        "apparentTemperature": 37.2,
        "dewPoint": 29.05,
        "humidity": 0.67,
        "windSpeed": 3.05,
        "windBearing": 224,
        "visibility": 10,
        "cloudCover": 0.92,
        "pressure": 1020.75,
        "ozone": 276.87
      },
      {
        "time": 1481655600,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.38,
        "apparentTemperature": 37.18,
        "dewPoint": 29.68,
        "humidity": 0.68,
        "windSpeed": 3.43,
        "windBearing": 202,
        "visibility": 10,
        "cloudCover": 0.95,
        "pressure": 1020.31,
        "ozone": 276.39
      },
      {
        "time": 1481659200,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 40.14,
        "apparentTemperature": 37.22,
        "dewPoint": 31.13,
        "humidity": 0.7,
        "windSpeed": 4.3,
        "windBearing": 190,
        "visibility": 10,
        "cloudCover": 0.97,
        "pressure": 1019.91,
        "ozone": 275.62
      },
      {
        "time": 1481662800,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 40.62,
        "apparentTemperature": 37.25,
        "dewPoint": 32.14,
        "humidity": 0.72,
        "windSpeed": 4.94,
        "windBearing": 187,
        "visibility": 10,
        "cloudCover": 0.98,
        "pressure": 1019.58,
        "ozone": 275.29
      },
      {
        "time": 1481666400,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 40.38,
        "apparentTemperature": 36.84,
        "dewPoint": 32,
        "humidity": 0.72,
        "windSpeed": 5.09,
        "windBearing": 185,
        "visibility": 10,
        "cloudCover": 0.99,
        "pressure": 1019.33,
        "ozone": 275.78
      },
      {
        "time": 1481670000,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.7,
        "apparentTemperature": 36.17,
        "dewPoint": 31.3,
        "humidity": 0.72,
        "windSpeed": 4.95,
        "windBearing": 185,
        "visibility": 10,
        "cloudCover": 0.99,
        "pressure": 1019.14,
        "ozone": 276.72
      },
      {
        "time": 1481673600,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.03,
        "apparentTemperature": 35.49,
        "dewPoint": 30.73,
        "humidity": 0.72,
        "windSpeed": 4.8,
        "windBearing": 190,
        "visibility": 10,
        "cloudCover": 0.99,
        "pressure": 1018.91,
        "ozone": 277.72
      },
      {
        "time": 1481677200,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 38.75,
        "apparentTemperature": 35.12,
        "dewPoint": 30.85,
        "humidity": 0.73,
        "windSpeed": 4.85,
        "windBearing": 202,
        "visibility": 10,
        "cloudCover": 0.99,
        "pressure": 1018.62,
        "ozone": 278.71
      },
      {
        "time": 1481680800,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 38.92,
        "apparentTemperature": 34.97,
        "dewPoint": 31.54,
        "humidity": 0.75,
        "windSpeed": 5.31,
        "windBearing": 221,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1018.35,
        "ozone": 279.77
      },
      {
        "time": 1481684400,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.29,
        "apparentTemperature": 34.82,
        "dewPoint": 32.31,
        "humidity": 0.76,
        "windSpeed": 6.14,
        "windBearing": 235,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1018.03,
        "ozone": 280.75
      },
      {
        "time": 1481688000,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.49,
        "apparentTemperature": 34.97,
        "dewPoint": 32.64,
        "humidity": 0.76,
        "windSpeed": 6.28,
        "windBearing": 244,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1017.52,
        "ozone": 281.52
      },
      {
        "time": 1481691600,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 39.28,
        "apparentTemperature": 34.68,
        "dewPoint": 32.46,
        "humidity": 0.76,
        "windSpeed": 6.33,
        "windBearing": 252,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1016.92,
        "ozone": 282.22
      },
      {
        "time": 1481695200,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 38.64,
        "apparentTemperature": 33.62,
        "dewPoint": 32.05,
        "humidity": 0.77,
        "windSpeed": 6.8,
        "windBearing": 259,
        "visibility": 10,
        "cloudCover": 0.99,
        "pressure": 1016.43,
        "ozone": 283.1
      },
      {
        "time": 1481698800,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0.0008,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 37.92,
        "apparentTemperature": 32.41,
        "dewPoint": 31.96,
        "humidity": 0.79,
        "windSpeed": 7.36,
        "windBearing": 263,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1016.04,
        "ozone": 284.21
      },
      {
        "time": 1481702400,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0.0009,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 37.12,
        "apparentTemperature": 31.09,
        "dewPoint": 31.95,
        "humidity": 0.81,
        "windSpeed": 7.98,
        "windBearing": 266,
        "visibility": 10,
        "cloudCover": 1,
        "pressure": 1015.74,
        "ozone": 285.49
      },
      {
        "time": 1481706000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.001,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 36.27,
        "apparentTemperature": 29.75,
        "dewPoint": 31.71,
        "humidity": 0.83,
        "windSpeed": 8.54,
        "windBearing": 270,
        "visibility": 10,
        "cloudCover": 0.93,
        "pressure": 1015.62,
        "ozone": 287.06
      },
      {
        "time": 1481709600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0.0009,
        "precipProbability": 0.01,
        "precipType": "rain",
        "temperature": 35.29,
        "apparentTemperature": 28.35,
        "dewPoint": 31.22,
        "humidity": 0.85,
        "windSpeed": 8.91,
        "windBearing": 277,
        "visibility": 10,
        "cloudCover": 0.7,
        "pressure": 1015.68,
        "ozone": 288.96
      },
      {
        "time": 1481713200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.31,
        "apparentTemperature": 26.95,
        "dewPoint": 30.57,
        "humidity": 0.86,
        "windSpeed": 9.29,
        "windBearing": 284,
        "visibility": 10,
        "cloudCover": 0.38,
        "pressure": 1015.94,
        "ozone": 291.15
      },
      {
        "time": 1481716800,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 33.62,
        "apparentTemperature": 25.88,
        "dewPoint": 29.66,
        "humidity": 0.85,
        "windSpeed": 9.69,
        "windBearing": 289,
        "visibility": 10,
        "cloudCover": 0.15,
        "pressure": 1016.23,
        "ozone": 293.58
      },
      {
        "time": 1481720400,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 33.34,
        "apparentTemperature": 25.35,
        "dewPoint": 28.26,
        "humidity": 0.81,
        "windSpeed": 10.09,
        "windBearing": 291,
        "visibility": 10,
        "cloudCover": 0.05,
        "pressure": 1016.58,
        "ozone": 296.41
      },
      {
        "time": 1481724000,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 33.4,
        "apparentTemperature": 25.25,
        "dewPoint": 26.58,
        "humidity": 0.76,
        "windSpeed": 10.43,
        "windBearing": 291,
        "visibility": 10,
        "cloudCover": 0.02,
        "pressure": 1016.94,
        "ozone": 299.5
      },
      {
        "time": 1481727600,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 33.67,
        "apparentTemperature": 25.52,
        "dewPoint": 25.12,
        "humidity": 0.71,
        "windSpeed": 10.57,
        "windBearing": 290,
        "visibility": 10,
        "cloudCover": 0.04,
        "pressure": 1017.05,
        "ozone": 302.34
      },
      {
        "time": 1481731200,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.16,
        "apparentTemperature": 26.25,
        "dewPoint": 24.05,
        "humidity": 0.66,
        "windSpeed": 10.33,
        "windBearing": 285,
        "visibility": 10,
        "cloudCover": 0.11,
        "pressure": 1016.69,
        "ozone": 304.62
      },
      {
        "time": 1481734800,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 34.79,
        "apparentTemperature": 27.18,
        "dewPoint": 23.17,
        "humidity": 0.62,
        "windSpeed": 10.01,
        "windBearing": 277,
        "visibility": 10,
        "cloudCover": 0.22,
        "pressure": 1016.07,
        "ozone": 306.65
      },
      {
        "time": 1481738400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 35.22,
        "apparentTemperature": 27.68,
        "dewPoint": 22.64,
        "humidity": 0.6,
        "windSpeed": 10.09,
        "windBearing": 269,
        "visibility": 10,
        "cloudCover": 0.3,
        "pressure": 1015.5,
        "ozone": 309
      },
      {
        "time": 1481742000,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 35.3,
        "apparentTemperature": 27.66,
        "dewPoint": 22.72,
        "humidity": 0.6,
        "windSpeed": 10.33,
        "windBearing": 262,
        "visibility": 10,
        "cloudCover": 0.36,
        "pressure": 1015.03,
        "ozone": 311.67
      }
    ]
  }
}

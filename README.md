![trees](http://i.imgur.com/DuDhwlf.jpg)

# weather-proxy

> Simple cleanup and compression of Weather API data into fewer bytes that the Arduino Yun can handle.

## Run

``` bash
# install dependencies
npm install

# gennerate slim weather.json + weather.csv files
npm start

# generate alternative use for cron, supervisord, etc.
node index.js

# recommended use: run twice per hour via cronjob

```

### Sample Run

```bash
$ node index.js

Wrote weather.json data (853 bytes).
Wrote weather.csv data (324 bytes).
Total hourly data points: 12
```

#### CSV output

weather.csv (324 bytes)
```
44.16,0,1480647600,Partly Cloudy
42.11,1,1480651200,Partly Cloudy
41.77,2,1480654800,Partly Cloudy
41.43,3,1480658400,Clear
40.85,4,1480662000,Clear
40.45,5,1480665600,Clear
39.85,6,1480669200,Clear
39.41,7,1480672800,Clear
38.93,8,1480676400,Clear
38.46,9,1480680000,Clear
39.9,10,1480683600,Clear
42.47,11,1480687200,Clear
```

#### JSON output 

weather.json (853 bytes)
```
[
  {
    "time": 1480647600,
    "offset": 0,
    "temperature": 44.16,
    "summary": "Partly Cloudy"
  },
  {
    "time": 1480651200,
    "offset": 1,
    "temperature": 42.11,
    "summary": "Partly Cloudy"
  },
  {
    "time": 1480654800,
    "offset": 2,
    "temperature": 41.77,
    "summary": "Partly Cloudy"
  },
  {
    "time": 1480658400,
    "offset": 3,
    "temperature": 41.43,
    "summary": "Clear"
  },
  {
    "time": 1480662000,
    "offset": 4,
    "temperature": 40.85,
    "summary": "Clear"
  },
  {
    "time": 1480665600,
    "offset": 5,
    "temperature": 40.45,
    "summary": "Clear"
  },
  {
    "time": 1480669200,
    "offset": 6,
    "temperature": 39.85,
    "summary": "Clear"
  },
  {
    "time": 1480672800,
    "offset": 7,
    "temperature": 39.41,
    "summary": "Clear"
  },
  {
    "time": 1480676400,
    "offset": 8,
    "temperature": 38.93,
    "summary": "Clear"
  },
  {
    "time": 1480680000,
    "offset": 9,
    "temperature": 38.46,
    "summary": "Clear"
  },
  {
    "time": 1480683600,
    "offset": 10,
    "temperature": 39.9,
    "summary": "Clear"
  },
  {
    "time": 1480687200,
    "offset": 11,
    "temperature": 42.47,
    "summary": "Clear"
  }
]
```

[Support](http://drewlustro.com)

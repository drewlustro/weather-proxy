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

[Support](http://drewlustro.com)

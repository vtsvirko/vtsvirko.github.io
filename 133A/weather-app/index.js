let request = require('request');
let apiKey = 'f21e33e7f5ffd2007e8c815d1a44a7e9';
const argv = require('yargs').argv;
let city = argv.c || 'minsk';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}, and the min temperature is ${weather.main.temp_min} degrees, and the max temperature is ${weather.main.temp_max} degrees`;
    console.log(message);
  }
});
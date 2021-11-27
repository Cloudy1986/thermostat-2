const got = require('got');
let weatherData = null;

class Weather {

fetchWeatherData(city, callback) {
  const apiKey = '8c0a75a515d10f4347067945257e3b16';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  got(apiUrl).then((response) => {
    weatherData = JSON.parse(response.body);
    callback(weatherData);
  });
}
}

module.exports = Weather;

const weather = new Weather();
weather.fetchWeatherData('Sunderland', (weatherData) => {
  console.log(weatherData.main.temp);
});

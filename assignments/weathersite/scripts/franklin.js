/* Franklin  */

var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.wunderground.com/api/23dc6ce5013d179f/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
   
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('currentWind').innerHTML = weatherInfo.current_observation.wind_mph;
    
} // end of onload

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET','//api.wunderground.com/api/23dc6ce5013d179f/forecast/q/MN/Franklin.json', true);

forecastObject.send();

forecastObject.onload = function() {
    var forecastInfo = JSON.parse(forecastObject.responseText);
    console.log(forecastInfo);
    
    document.getElementById('forecastDay').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}






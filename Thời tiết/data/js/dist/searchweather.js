"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
var weather_1 = require("../weather");
var location_1 = require("../location");
/**
* Searching for a city by the city's name.
* @param   city_name  You need to type the city's name to tracking for the weather.
* @returns That will return the weather's information of the city.
*/
function searchCityByName(city_name) {
    (0, weather_1.fetchWeather)(city_name);
    (0, weather_1.forecast)(city_name);
}
/**
 * Searching for a city by the city's longtitude and latitude.
 * @param lon You need to type the longtitude to tracking for the weather.
 * @param lat You need to type the latitude to tracking for the weather.
 * @returns That will return the weather's information, name, country of the longtitude and latitude.
 */
function searchCityByLonLat(lon, lat) {
    (0, location_1.fetchWeatherByLonLat)(lat, lon);
    (0, location_1.forecastByLonLat)(lat, lon);
}

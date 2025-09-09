import { forecast,fetchWeather } from "../js/weather";
import { fetchWeatherByLonLat,forecastByLonLat } from "../js/location";
/**
* Searching for a city by the city's name.
* @param   city_name  You need to type the city's name to tracking for the weather.
* @returns That will return the weather's information of the city.
*/

function searchCityByName(city_name: string): void {
    fetchWeather(city_name);
    forecast(city_name);
}
/**
 * Searching for a city by the city's longtitude and latitude.
 * @param lon You need to type the longtitude to tracking for the weather.
 * @param lat You need to type the latitude to tracking for the weather.
 * @returns That will return the weather's information, name, country of the longtitude and latitude.
 */
function searchCityByLonLat(lon:any, lat:any): void {
    fetchWeatherByLonLat(lat,lon);
    forecastByLonLat(lat,lon);
}
//import { FetchError } from "node-fetch";

const map_api = '7fef4b932512e580c9ff56e02463be3b';
var x = 0; var y = 0; var z = 0;
function fetchMaps() {
    const url2 = `https://tile.openweathermap.org/map/wind_new/${z}/${x}/${y}.png?appid=${map_api}`;
    fetch(url2).then(response1 => response1.text())
        .then(map_data => {
            document.getElementById('map_img')['src'] = `https://tile.openweathermap.org/map/wind_new/0/0/0.png?appid=7fef4b932512e580c9ff56e02463be3b`;
            document.getElementById('refresh').onclick = function () {
                document.getElementById('map_img')['src'] = '';
                document.getElementById('map_img')['src'] = `https://tile.openweathermap.org/map/wind_new/0/0/0.png?appid=7fef4b932512e580c9ff56e02463be3b`;
            }
        })
        .catch(error1 => {
            throw new Error("Error while fetching map data: " + error1.message ? error1.message : error1);
            //document.getElementById('map_img')['src'] = 'https://tile.openweathermap.org/map/wind_new/0/0/0.png?appid=7fef4b932512e580c9ff56e02463be3b';
            //console.log(error1);
        })
}
fetchMaps();
document.getElementsByTagName('body').onload = () => {fetchMaps();}
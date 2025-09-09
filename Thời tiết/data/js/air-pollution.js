const air_apiKey = "edf80cfccab1fc9a3ab4bdf072f0dac3";

//start
/*var lonInput = document.getElementById('lonInput');
var latInput = document.getElementById('latInput');*/

air_pollution(10.8625, 106.654); //tại Quận 12, TP.HCM;
// Đánh giá ô nhiễm không khí
const json_airrate = {
    "good": "Tốt",
    "quite-good": "Khá tốt",
    "fair": "Khá",
    "quite-bad": "Khá tệ",
    "terrible": "Tệ"
}; 

function air_pollution(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lon=${lon}&lat=${lat}&appid=edf80cfccab1fc9a3ab4bdf072f0dac3`
    fetch(url).then(response => response.json()) //Lấy dữ liệu từ JSON
        .then(air_data => {
            if (air_data.list[0].main.aqi == 1) {document.getElementById('air_aqi').innerHTML = `AQI ${air_data.list[0].main.aqi} (${json_airrate['good']})`;}
            if (air_data.list[0].main.aqi == 2) {document.getElementById('air_aqi').innerHTML = `AQI ${air_data.list[0].main.aqi} (${json_airrate['quite-good']})`;}
            if (air_data.list[0].main.aqi == 3) {document.getElementById('air_aqi').innerHTML = `AQI ${air_data.list[0].main.aqi} (${json_airrate['fair']})`;}
            if (air_data.list[0].main.aqi == 4) {document.getElementById('air_aqi').innerHTML = `AQI ${air_data.list[0].main.aqi} (${json_airrate['quite-bad']})`;}
            if (air_data.list[0].main.aqi == 5) {document.getElementById('air_aqi').innerHTML = `AQI ${air_data.list[0].main.aqi} (${json_airrate['terrible']})`;}
            var datetime1 = air_data.list[0].dt
            var date = new Date(datetime1 * 1000);

            var year = date.getFullYear();
            var day = "0" + date.getDate();
            var month = "0" + date.getMonth();
            var hour = "0" + date.getHours();
            var minutes = "0" + date.getMinutes();
            var seconds = "0" + date.getSeconds();
            var format = year + "-" + month.slice(-2) + "-" + day.slice(-2) + " " + hour.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
            
            document.getElementById('air_lonlat').innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><title>Không khí ở</title>
            <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
            </svg> ${air_data.coord.lat}, ${air_data.coord.lon}`;
            document.getElementById('update-time').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><title>Thời gian cập nhật</title>
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> ${format} (Giờ GMT+7)`
            if (air_data.list[0].main.aqi == 1) {document.getElementById('aqi_bcolor').style.backgroundColor = 'green'}
            if (air_data.list[0].main.aqi == 2) {document.getElementById('aqi_bcolor').style.backgroundColor = 'yellowgreen'}
            if (air_data.list[0].main.aqi == 3) {document.getElementById('aqi_bcolor').style.backgroundColor = 'yellow'}
            if (air_data.list[0].main.aqi == 4) {document.getElementById('aqi_bcolor').style.backgroundColor = 'orange'}
            if (air_data.list[0].main.aqi == 5) {document.getElementById('aqi_bcolor').style.backgroundColor = 'red'}
            document.getElementById('co').innerHTML = `Khí CO: ${air_data.list[0].components.co} μg/m<sup>3</sup>`
            document.getElementById('no').innerHTML = `Khí NO: ${air_data.list[0].components.no} μg/m<sup>3</sup>`
            document.getElementById('no2').innerHTML = `Khí NO<sub>3</sub>: ${air_data.list[0].components.no2} μg/m<sup>3</sup>`
            document.getElementById('o3').innerHTML = `Khí O<sub>3</sub>: ${air_data.list[0].components.o3} μg/m<sup>3</sup>`
            document.getElementById('so2').innerHTML = `Khí SO<sub>2</sub>: ${air_data.list[0].components.so2} μg/m<sup>3</sup>`
            document.getElementById('pm2_5').innerHTML = `Khí PM<sub>2.5</sub>: ${air_data.list[0].components.pm2_5} μg/m<sup>3</sup>`;
            document.getElementById('pm10').innerHTML = `Khí PM<sub>10</sub>: ${air_data.list[0].components.pm10} μg/m<sup>3</sup>`
            document.getElementById('nh3').innerHTML = `Khí NH<sub>3</sub>: ${air_data.list[0].components.nh3} μg/m<sup>3</sup>`
        })
        .catch(error => {
            
        })
}
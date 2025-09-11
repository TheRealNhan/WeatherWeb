//import { FetchError } from "node-fetch";

const lonlat_apikey = 'edf80cfccab1fc9a3ab4bdf072f0dac3';
const latInput = document.getElementById('latInput');
const lonInput = document.getElementById('lonInput');
latInput.value = 11.0630379;
lonInput.value = 107.4747757;
document.getElementById('lonlat_button').addEventListener('click', () => {
    const location1 = latInput.value;
    const location2 = lonInput.value;
    if (location1 == '') {
        alert("Vui lòng nhập vĩ độ!");
        return false;
    } if (location2 == '') {
        alert("Vui lòng nhập kinh độ!");
        return false;
    }
    if (location1 && location2) {
        //weatherinfo_div.style.visibility = 'visible';
        //hideElement.style.visibility = 'visible';
        fetchWeatherByLonLat(location1, location2);
        forecastByLonLat(location1, location2);
        air_pollution(location1, location2);
        refresh.onclick = function () {
            fetchWeatherByLonLat(location1, location2);
            forecastByLonLat(location1, location2);
            fetchMaps();
        }
    }
    if (location1 == "suka blyat" || location1 == "cyka blyat" || location1 == "blyat") {alert(location1)}
});

element.addEventListener('mouseover', () => {
  element.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  element1.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
//   element2.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  element3.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
});

element.addEventListener('mouseout', () => {
  element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  element1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
//   element2.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  element3.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});

    
    // When the user clicks on the button, open the modal
    
btn.onclick = function () {
    modal.style.display = "block";
}
    

    // When the user clicks on <span> (&times;), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
    
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('lonlat_button').addEventListener('click', () => {
    setInterval(function() {
        searchCityByLonLat(lonInput.value, latInput.value);
    }, 1000 * 60 * 5);
})

    
    // Get the <span> element that closes the modal
var span1 = document.getElementById("close");
    
    // When the user clicks on the button, open the modal
    
btn1.onclick = function () {
    modal1.style.display = "block";
}
    
function close1() {modal1.style.display = "none";}
    // When the user clicks on <span> (&times;), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}
    
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event1) {
    if (event1.target == modal1) {
        modal1.style.display = "none";
    }
}
/*const location1 = latInput.value;
const location2 = lonInput.value;
if (location1 && location2) {
    refresh.onclick = function () {
        fetchWeatherByLonLat(location1, location2);
        forecastByLonLat(location1, location2);
    }
}*/
/*latInput.style.display = 'none';
lonInput.style.display = 'none';
document.getElementById('lonlat_button').style.display = 'none';
latInput.value = 10.8625;
lonInput.value = 106.654;
if (document.getElementById('change').value == "Tìm kiếm qua tọa độ địa lí") {
    document.getElementById('change').addEventListener('click', () => {
        document.getElementById('change').value = "Tìm kiếm qua địa điểm";
        latInput.style.display = 'inline-block';lonInput.style.display = 'inline-block';
        document.getElementById('lonlat_button').style.display = 'inline-block';
        document.getElementById('lonlat_button').addEventListener('click', () => {
            if (latInput.value == '') {alert("Vui lòng nhập vĩ độ")}
            if (lonInput.value == '') {alert("Vui lòng nhập kinh độ")}
            if (latInput.value && lonInput.value) {
                fetchWeatherByLonLat(latInput.value, lonInput.value);
                forecastByLonLat(latInput.value, lonInput.value);
            }
            
        });
        locationInput.style.display = 'none';
        searchButton.style.display = 'none';
    })
}
    
if (document.getElementById('change').value == "Tìm kiếm qua địa điểm") {
    document.getElementById('change').addEventListener('click', () => {
        document.getElementById('change').value = "Tìm kiếm qua tọa độ địa lí";
        latInput.style.display = 'none';lonInput.style.display = 'none';
        document.getElementById('lonlat_button').style.display = 'none';
        locationInput.style.display = 'block';
        searchButton.style.display = 'block';
    })
}*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var location_button = document.getElementById('location_button');
function locations() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        alert("Geolocation không hỗ trợ trình duyệt web này.");
    }
    /**
     * This function will show your position or location by requested permissions.
     * @param {*} position You need to type the position (or the latitude, longtitude).
     * @returns It will return 3 function with the variable position (fetchWeatherByLonLat, forecastByLonLat, air_pollution)
     * @example showPosition("0")
     */
    function showPosition(position) {
        fetchWeatherByLonLat(position.coords.latitude, position.coords.longitude);
        forecastByLonLat(position.coords.latitude, position.coords.longitude);
        air_pollution(position.coords.latitude, position.coords.longitude);
        refresh.onclick = function () {
            fetchWeatherByLonLat(position.coords.latitude, position.coords.longitude);
            forecastByLonLat(position.coords.latitude, position.coords.longitude);
            air_pollution(position.coords.latitude, position.coords.longitude);
        }
    }
}
location_button.onclick = 
function() {
    locations();
}
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("Bạn đã từ chối quyền truy cập vị trí.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Không xác định được vị trí hiện tại của bạn.");
        break;
      case error.TIMEOUT:
        alert("Yêu cầu lấy vị trí của bạn đã hết thời gian chờ.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Có một lỗi không xác định đã xảy ra.");
        break;
    }
  }
//notification
document.getElementById('find-search').addEventListener('click', (event) => {
    document.getElementById('find').placeholder = 'Tìm kiếm (Nhấn Enter để tìm)';
    if (!(document.getElementById('find').contains(event.target))) { 
        document.getElementById('find').placeholder = 'Tìm kiếm'; 
    }
}); 
  
/*function google_maps(lat, lon) {
    const map1 = document.getElementById('map');
    let map;
    async function init_map() {
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(map1, {
            center: { lat: lat, lng: lon },
            zoom: 8,
          });
    }
    init_map();
}*/
latInput.addEventListener('keypress', (event) => { //latInput
    if (event.key === "Enter") {
        const location1 = latInput.value;
        const location2 = lonInput.value;
        if (location1 == '') {
            alert("Vui lòng nhập vĩ độ!");
            return false;
        } if (location2 == '') {
            alert("Vui lòng nhập kinh độ!");
            return false;
        }
        if (location1 && location2) {
            //weatherinfo_div.style.visibility = 'visible';
            //hideElement.style.visibility = 'visible';
            fetchWeatherByLonLat(location1, location2);
            forecastByLonLat(location1, location2);
            air_pollution(location1, location2);
            refresh.onclick = function () {
                fetchWeatherByLonLat(location1, location2);
                forecastByLonLat(location1, location2);
                air_pollution(location1,location2);
            }
        }
        //if (location1 == "suka blyat" || location1 == "cyka blyat" || location1 == "blyat") {alert(location1)}
    }
});
//lon input (lonInput)
lonInput.addEventListener('keypress', (event) => { //lonInput
    if (event.key === "Enter") {
        const location1 = latInput.value;
        const location2 = lonInput.value;
        if (location1 == '') {
            alert("Vui lòng nhập vĩ độ!");
            return false;
        } if (location2 == '') {
            alert("Vui lòng nhập kinh độ!");
            return false;
        }
        if (location1 && location2) {
            //weatherinfo_div.style.visibility = 'visible';
            //hideElement.style.visibility = 'visible';
            fetchWeatherByLonLat(location1, location2);
            forecastByLonLat(location1, location2);
            air_pollution(location1, location2);
            refresh.onclick = function () {
                fetchWeatherByLonLat(location1, location2);
                forecastByLonLat(location1, location2);
                air_pollution(location1,location2)
            }
        }
        //if (location1 == "suka blyat" || location1 == "cyka blyat" || location1 == "blyat") {alert(location1)}
    }
});
document.getElementById('submit_button').addEventListener('click', () => {
    var name1 = document.getElementById('name1').value;
    var details = document.getElementById('ykien').value;
    if (name1 != "" || details != "") {
        var content = "Name: " + name1 + "\n" + "Details: " + details;
        /*
        fs.writeFile('../../user-data/userdata.txt', content, err => {
            if (err) {
                console.log("Không thể ghi vào file txt")
                return false;
            } else {
                console.log("Đã lưu!");
            }
        })*/
    } else {
        alert("Vui lòng nhập tên và nội dung bạn muốn gửi")
        return false;
    }
})
var text;
/**
 * A version of `if () {} else {}` but it's shorter.
 * @param {*} condition The condition of the shortif
 * @param {*} then Then do the match of the condition
 * @param {*} else_then If it doesn't match the condition then do the condition in else.
 */
function SHORTIF(condition, then, else_then) {
    if (condition) {
        then;
    } else {
        else_then;
    }
}
/**
 * This function will fetch the weather by the location's longtitude and latitude.
 * @param {*} lat You need to enter the latitude for the weather information.
 * @param {*} lon You need to enter the longtitude for the weather information.
 * @returns It will return the weather information from the longtitude and latitude that you've typed.
 */
function fetchWeatherByLonLat(lat, lon) {
    if (window.navigator.onLine == true) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${lonlat_apikey}&units=metric&lang=vi`;
        //#region weatherdata (lon, lat)
        fetch(url).then(response => {
            if (!response.ok) {
                //throw new Error(`Không fetch được url ${url}`)
            }
            return response.json()

        }) // Lấy dữ liệu từ JSON

            /*.then(response => response.json()
            if (!response.ok) {
                throw new Error("Không thể tải được, có thể sẽ cần internet để kết nối.");
                //console.log("Không thể tải được, có thể sẽ cần internet để kết nối.");
            }) // Lấy dữ liệu từ JSON*/
            .then(data => { //Lấy dữ liệu
                document.getElementById('container').style.animation = '';
                var date = new Date((data.dt) * 1000);
                var date1 = new Date()
            // Hours part from the timestamp
                var hours = "0" + date.getHours();

            // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();

            // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();
                var dt =  date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " 

                dt = dt + `${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}`

                //Mưa
                try{var rain1 = data.rain['1h']} 
                catch{var rain1=0}

                try{var rain3 = data.rain['3h']}
                catch{var rain3=0}
                //Tuyết
                try{var snow1 = data.snow['1h']}
                catch{var snow1=0}
                try{var snow3 = data.snow['3h']}
                catch{var snow3=0}
                //gió giật
                try {var gust_wind1 = data.wind.gust;}
                catch {var gust_wind1=0;}

                text = `Thời tiết ở: ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})\nNhiệt độ: ${Math.round(data.main.temp)}°C\nMô tả: ${data.weather[0].description}\nLượng mưa: ${rain1} mm\nTốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h).\n--------\nThời gian đo: ${dt}\n----------`;
                
                document.getElementById('w_today').innerHTML = `Thời tiết hôm nay tại ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon}): Nhiệt độ ${data.main.temp}°C, Tốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h)`;
                // Đổi từ unix đến thời gian
                let sunrise_ts = data.sys.sunrise;
                let sunset_ts = data.sys.sunset;
                let played = false;

                document.addEventListener('click', () => {
                    if (!played) {
                        video.play();
                        played = true;
                    }
                });

                //google_maps(latInput.value, lonInput.value);

                var sunrise_date = new Date(sunrise_ts * 1000);
                var sunset_date = new Date(sunset_ts * 1000);
                var sr_hour = "0" + sunrise_date.getHours();
                var ss_hour = "0" + sunset_date.getHours();
                var sr_min = "0" + sunrise_date.getMinutes();
                var ss_min = "0" + sunset_date.getMinutes();;
                var sr_sec = "0" + sunrise_date.getSeconds();
                var ss_sec = "0" + sunset_date.getSeconds();
                var sr_format = sr_hour.slice(-2) + ':' + sr_min.slice(-2) + ':' + sr_sec.slice(-2);
                var ss_format = ss_hour.slice(-2) + ':' + ss_min.slice(-2) + ':' + ss_sec.slice(-2);
                //variable
                document.getElementById("wicon").style.visibility = 'visible'
                var icon_image = data.weather[0].icon;
                var iconurl = "./Thời%20tiết/data/weather-icons/" + icon_image + ".png";
                //styles for urls.
                var haze1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Haze.svg";
                var fog1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/FogV2.svg";
                var lightning1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Thunderstorms.svg";
                var dust1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Dust1.svg";
                var hazesmoke1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HazySmokeV2.svg"

                if (data.weather[0].main == 'Haze') {document.getElementById("wicon").src = haze1;}
                else if (data.weather[0].main == 'Fog') {document.getElementById('wicon').src = fog1;}
                else if (data.weather[0].main == 'Thunderstorm') {document.getElementById('wicon').src = lightning1;}
                else if (data.weather[0].main == 'Dust') {document.getElementById('wicon').src = dust1;}
                else if (data.weather[0].main == 'Smoke') {document.getElementById('wicon').src = hazesmoke1;}
                else {document.getElementById("wicon").src = iconurl;}
                document.getElementById('wicon').title = data.weather[0].description;
                window.addEventListener('online', () => console.log("Bạn đang trực tuyến."));
                
            // Will display time in 10:30:23 format
            if (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ||
                data.weather[0].icon == '09d' || data.weather[0].icon == '09n'
            ) {
                document.getElementById('weatherin').style.backgroundImage = 'url(Thời%20tiết/mưa.jpg)';
                document.getElementById('weatherin').style.color = 'white';
            }
            else if (data.weather[0].icon == '11d' || data.weather[0].icon == '11n') {
                document.getElementById('weatherin').style.backgroundImage = 'url(https://assets.msn.com/weathermapdata/1/static/images/webps/v1.0/Thunderstorms%201.webp)';
                document.getElementById('weatherin').style.color = 'white';
            }
            else if (data.weather[0].icon == '13d' || data.weather[0].icon == '13n') {
                document.getElementById('weatherin').style.backgroundImage = 'url(Thời%20tiết/tuyết.jpg)';
                document.getElementById('weatherin').style.color = 'black';
            }
            else {
                document.getElementById('weatherin').style.backgroundImage = null;
                document.getElementById('weatherin').style.color = 'black';
            }
            //
            // Rain/ snow;
            //
            /*
            if ('nhỏ' in data.weather[0].description) {
                document.getElementById('need').innerHTML = `Có khả năng cần mang ô`;
                document.getElementById('rain2').style.backgroundColor = 'yellow';
                document.getElementById('rain2').style.color = 'white';
            }
            if ('vừa' in data.weather[0].description) {
                document.getElementById('need').innerHTML = `Cần phải mang ô`;
                document.getElementById('rain2').style.backgroundColor = 'orange';
                document.getElementById('rain2').style.color = 'white';
            }
            if (
                'lớn' in data.weather[0].description || 'cường độ lớn' in data.weather[0].description ||
                'rào' in data.weather[0].description
            ) {
                document.getElementById('need').innerHTML = `Bắt buộc phải mang ô`;
                document.getElementById('rain2').style.backgroundColor = 'red';
                document.getElementById('rain2').style.color = 'white';
            }
            else {
                document.getElementById('need').innerHTML = `Không cần mang ô`;
                document.getElementById('rain2').style.backgroundColor = 'white';
                document.getElementById('rain2').style.color = 'black';
            }*/

           //video

           //
           //
           //document.getElementById('newBody').style.backgroundColor = 'black';

           if (document.getElementById('newBody').style.background === '#ffffff') {
               document.getElementById('notes').style.color = 'rgba(0, 0, 0, 0.425)';
               document.getElementById('notes').style.fontSize = '10px';
               document.getElementById('newBody').style.color = 'black';
               document.getElementById('mymodal').style.color = 'black';
                document.getElementById('mymodal1').style.color="black";
           } else {
               document.getElementById('notes').style.color = '#ffffff';
               document.getElementById('notes').style.fontSize = '10px';
               document.getElementById('newBody').style.color = 'white';
               document.getElementById('mymodal').style.color = 'black';
                document.getElementById('mymodal1').style.color="black";
           }
           if (document.getElementById('newBody').style.backgroundColor === 'black') {
               document.getElementById('refresh').style.backgroundColor = 'white';
               document.getElementById('top_button').style.backgroundColor = 'white';
           } else if (document.getElementById('newBody').style.backgroundColor === 'white') {
               document.getElementById('refresh').style.backgroundColor = 'black';
               document.getElementById('top_button').style.backgroundColor = 'black';
           }
           if (icon_image.charAt(2) == 'd') {
            document.getElementById('clear1').src = './Thời%20tiết/data/weather-icons/01d.png';
            document.getElementById('clear2').innerHTML = `Trời trong xanh`;
            document.getElementById('few-clouds1').src = './Thời%20tiết/data/weather-icons/02d.png';
            document.getElementById('few-clouds2').innerHTML = 'Trời có mây';
            document.getElementById('cloudy2').src = './Thời%20tiết/data/weather-icons/03d.png';
            document.getElementById('cloudy3').innerHTML = 'Trời nhiều mây';
            document.getElementById('black-clouds1').src = './Thời%20tiết/data/weather-icons/04d.png';
            document.getElementById('black-clouds2').innerHTML = 'Trời có mây đen';
            document.getElementById('rain3').src ='./Thời%20tiết/data/weather-icons/10d.png';
            document.getElementById('lightning1').src = './Thời%20tiết/data/weather-icons/11d.png';
            document.getElementById('snow2').src = './Thời%20tiết/data/weather-icons/13d.png';
        }
        else if (icon_image.charAt(2) == 'n') {
            document.getElementById('clear1').src = './Thời%20tiết/data/weather-icons/01n.png';
            document.getElementById('clear2').innerHTML = `Trời trong xanh`;
            document.getElementById('few-clouds1').src = './Thời%20tiết/data/weather-icons/02n.png';
            document.getElementById('few-clouds2').innerHTML = 'Trời có mây';
            document.getElementById('cloudy2').src = './Thời%20tiết/data/weather-icons/03n.png';
            document.getElementById('cloudy3').innerHTML = 'Trời nhiều mây';
            document.getElementById('black-clouds1').src = './Thời%20tiết/data/weather-icons/04n.png';
            document.getElementById('black-clouds2').innerHTML = 'Trời có mây đen';
            document.getElementById('rain3').src ='./Thời%20tiết/data/weather-icons/10n.png';
            document.getElementById('lightning1').src = './Thời%20tiết/data/weather-icons/11n.png';
            document.getElementById('snow2').src = './Thời%20tiết/data/weather-icons/13n.png';
        }
        else {
            document.getElementById('clear1').src = '';
            document.getElementById('few-clouds1').src = ''
            document.getElementById('cloudy2').src = '';
            document.getElementById('black-clouds1').src = '';
            document.getElementById('rain3').src = '';
            document.getElementById('lightning1').src = '';
            document.getElementById('snow2').src = '';
        }


                var timenow = date1.getFullYear() + '-' + ("0" + (date1.getMonth()+1)).slice(-2) + '-'  + ("0" + date1.getDate()).slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
                locationElement.innerHTML = `<!--<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><title>Dự báo thời tiết ở: </title>
                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                </svg>--> ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon}) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><title>Vị trí hiện tại của bạn</title>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>`;
                //Error1.textContent = '';
                temperatureElement.textContent = `Nhiệt độ: ${Math.round(data.main.temp)}°C, Cảm giác giống ${Math.round(data.main.feels_like)}°C`;
                minmaxtempElement.textContent = `Nhiệt độ thấp nhất: ${Math.round(data.main.temp_min)}°C, Nhiệt độ cao nhất ${Math.round(data.main.temp_max)}°C`;

                document.getElementById('datetime').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><title>Thời gian cập nhật</title>
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> ${timenow} (Giờ GMT+7)`;
                descriptionElement.textContent = `Mô tả: ${data.weather[0].description}`;
                pressureElement.textContent = `Áp suất không khí: ${data.main.pressure} hPa`;
                document.getElementById('sealevel').innerHTML = `Áp suất không khí trên mực nước biển: ${data.main.sea_level} hPa,\nÁp suất không khí ở trên đất: ${data.main.grnd_level} hPa`;
                //document.getElementById('winddir').innerHTML = `Hướng gió: ${data.wind.deg}°`;
                //visibilityElement.textContent = `Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`;
                //windElement.textContent = `Tốc độ gió: ${data.wind.speed} m/s`;
                cloudElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><title>Mây</title>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> ${data.clouds.all}%, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16"><title>Độ ẩm</title>
  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
</svg> ${data.main.humidity}%, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16"><title>Tốc độ gió</title>
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
</svg> ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h), Hướng gió: ${data.wind.deg}°.`;
                //humidityEle.textContent =  `Độ ẩm: ${data.main.humidity}%`
                try { rain.textContent = `Lượng mưa: ${rain1} mm, Lượng tuyết: ${snow1} mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`; }
                catch { rain.textContent = `Lượng mưa: 0 mm, Lượng tuyết: 0 mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`; }
                sunrise.innerHTML = `<hr><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>Mặt trời mọc, lặn: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16"><title>Mặt trời mọc</title>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>${sr_format}, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16"><title>Mặt trời lặn</title>
  <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
</svg>${ss_format} (Giờ GMT+7)`;
                document.getElementById('location1').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><title>Vị trí của bạn</title>
<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;
document.getElementById('search1').onclick = function () {searchforWeather();}
                if (data.weather[0].icon == '09d' || data.weather[0].icon == '09n' ||
                    data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ||
                    data.weather[0].icon == '11d' || data.weather[0].icon == '11n' ||
                    data.weather[0].icon == '13d' || data.weather[0].icon == '13n'
                ) {
                    document.getElementById('need').innerHTML = `<h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-umbrella-fill" viewBox="0 0 16 16"><title>Cần phải lấy ô vì trời mưa/tuyết!</title>
                <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394A3.17 3.17 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.5 3.5 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a3 3 0 0 1-.298 1.102 2.26 2.26 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.26 2.26 0 0 1-.763-.88 3 3 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a2 2 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a2 2 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.5 3.5 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5s-.352-.145-.352-.145l-.004-.004a3.5 3.5 0 0 0-.58-.417A3.17 3.17 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0"/>
                </svg> Nhớ lấy ô!</h4>`;
                    document.getElementById('vision').innerHTML = `<h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><title>Tầm nhìn</title>
                <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
                </svg> Tầm nhìn sẽ không rõ vì trời <br>
                mưa, tuyết.</h4>`
                    document.getElementById('driving').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                    </svg>Khó khăn khi lái xe: <h4>Ẩm ướt.</h4>`;
                }
                else if ((data.weather[0].icon == '04d' || data.weather[0].icon == '04n') && data.weather[0].description == "mây đen u ám") {
                    document.getElementById('need').innerHTML = `<h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-umbrella-fill" viewBox="0 0 16 16"><title>Có thể bạn sẽ cần lấy ô!</title>
                <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394A3.17 3.17 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.5 3.5 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a3 3 0 0 1-.298 1.102 2.26 2.26 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.26 2.26 0 0 1-.763-.88 3 3 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a2 2 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a2 2 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.5 3.5 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5s-.352-.145-.352-.145l-.004-.004a3.5 3.5 0 0 0-.58-.417A3.17 3.17 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0"/>
                </svg> Có thể bạn sẽ cần lấy ô!</h4>`;
                    document.getElementById('driving').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                </svg>Khó khăn khi lái xe: Không có.`
                    document.getElementById('vision').innerHTML = `<h4><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><title>Tầm nhìn</title>
                <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
                </svg>Có thể tầm nhìn sẽ không rõ.</h4>`;
                }
                else {
                    document.getElementById('need').innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-umbrella-fill" viewBox="0 0 16 16"><title>Không cần lấy ô!</title>
                <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394A3.17 3.17 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.5 3.5 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.5 3.5 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a3 3 0 0 1-.298 1.102 2.26 2.26 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.26 2.26 0 0 1-.763-.88 3 3 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a2 2 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a2 2 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.5 3.5 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5s-.352-.145-.352-.145l-.004-.004a3.5 3.5 0 0 0-.58-.417A3.17 3.17 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.5 3.5 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0"/>
                </svg> Không cần lấy ô!</p>`;
                    document.getElementById('vision').innerHTML = `<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunglasses" viewBox="0 0 16 16"><title>Tầm nhìn</title>
                <path d="M3 5a2 2 0 0 0-2 2v.5H.5a.5.5 0 0 0 0 1H1V9a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3 1 1 0 1 1 2 0 3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-.5h.5a.5.5 0 0 0 0-1H15V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-1.888 1.338A2 2 0 0 0 8 6a2 2 0 0 0-1.112.338A2 2 0 0 0 5 5zm0 1h.941c.264 0 .348.356.112.474l-.457.228a2 2 0 0 0-.894.894l-.228.457C2.356 8.289 2 8.205 2 7.94V7a1 1 0 0 1 1-1"/>
                </svg>Tầm nhìn tốt.</p>`;
                    document.getElementById('driving').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                    <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                    </svg>Khó khăn khi lái xe: Không có.`
                    document.getElementById('health').style.marginTop = '-8cm';
                }
                if (data.weather[0].icon == "01n") {
                    document.getElementById('background').style.backgroundImage = `url("./Thời%20tiết/night-galaxy.jpg")`;
                    document.getElementById('background').style.backgroundSize = 'cover';
                }
                else{
                    document.getElementById('background').style.backgroundImage = '';
                    document.getElementById('background').style.backgroundSize = 'cover';
                }
                //sunset.textContent = `Mặt trời lặn lúc: ${ss_format} (Giờ GMT+7)`;
                function notification_requests() {
                    //const img = "http://openweathermap.org/img/w/" + icon_image + ".png";
                    const text = `Nhiệt độ: ${Math.round(data.main.temp)}°C\nMô tả: ${data.weather[0].description}\nLượng mưa: ${rain1} mm\nTốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h).`;
                    //var request1 = Notification.requestPermission();
                    //Notification.requestPermission();
                    (async () => {
                        /**Create and show the notification*/
                        const showNotification1 = () => {
                            // create a new notification
                            const notification = new Notification(('Thời tiết hiện tại ở ' + data.name + ", " + data.sys.country), {
                                body: text,
                                icon: iconurl,
                                vibrate: true
                            });
                
                            // close the notification after 10 seconds
                            /*setTimeout(() => {
                                notification.close();
                            }, 10 * 1000);*/
                
                            /*// navigate to a URL
                            notification.addEventListener('click', () => {
                                window.open('H:/Thời tiết.html', '_blank');
                            });*/
                            notification.addEventListener('click', () => {
                                window.open('http://127.0.0.1:3000/Th%E1%BB%9Di%20ti%E1%BA%BFt.html', '_blank');
                            });
                        }
                        // show an error message
                        const showError1 = () => {
                            //const error = document.querySelector('.error');
                            //error.style.display = 'block';
                            alert('Bạn đã chặn thông báo.')
                            console.log('Bạn đã chặn thông báo.');
                        }
                        let granted = false;
                
                        if (Notification.permission === 'granted') {
                            granted = true;
                        } else if (Notification.permission !== 'denied') {
                            let permission = await Notification.requestPermission();
                            granted = permission === 'granted' ? true : false;
                        }
                
                        // show notification or the error message 
                        granted ? showNotification1() : showError1();
                     })();
                }
                setTimeout(notification_requests, 1000 * (60 * 5));
            })
            .catch (error => { //Trường hợp khi gặp lỗi
                /*locationElement.textContent = '';
                temperatureElement.textContent = '';
                //minmaxtempElement.textContent = '';
                document.getElementById("wicon").style.visibility = 'hidden';
                descriptionElement.textContent = '';
                //pressureElement.textContent = '';
                visibilityElement.textContent = '';
                windElement.textContent = '';
                cloudElement.textContent = '';
                //humidityEle.textContent = '';
                try {rain.textContent = ''} catch {rain.textContent = ''}
                try {snow.textContent = ''} catch {snow.textContent = ''}
                sunrise.textContent = '';
                sunset.textContent = '';
                document.getElementById('datetime').textContent = '';*/
                //Error1.textContent = `Không tìm thấy thời tiết của thành phố: "${locationInput.value}"`;
                // Get the snackbar DIV
                document.getElementById('container').style.animation = 'shake 0.5s';
                setTimeout(() => {
                    document.getElementById('container').style.animation = ''
                },1000)

                var x = document.getElementById("snackbar");
                x.textContent = `Không tìm thấy tọa độ: "${lat}, ${lon}"
                để tìm kiếm thời tiết và dự báo thời tiết.`;
                    // Add the "show" class to DIV
                x.className = "show";
                
                    // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            });
        //#endregion weatherdata
    }
    else {
        var x = document.getElementById("snackbar");
        window.addEventListener('offline', () => console.log("Bạn đang không trực tuyến."));
        x.textContent = `Không tìm thấy kết nối Internet, vui lòng kết nối với Internet để tìm kiếm thời tiết.`;
                // Add the "show" class to DIV
        x.className = "show";
        document.getElementById('container').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.getElementById('container').style.animation = '';
        },1000)

                // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
}

/**
 * This function will fetch the forecasted weather by the location's longtitude and latitude.
 * @param {*} lat You need to enter the latitude for the weather information.
 * @param {*} lon You need to enter the longtitude for the weather information.
 * @returns It will return the forecasted weather information from the longtitude and latitude that you've typed.
 */
function forecastByLonLat(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${lonlat_apikey}&units=metric&lang=vi&cnt=7`;
    //#region forecast (lon, lat)
    fetch(url)
        .then(res => {
            if (!res.ok) {
                //throw new Error(`Không fetch được url ${url}`)
            }
            return res.json()
        }) //Lấy dữ liệu từ JSON
        .then(forecastdata => { //Lấy dữ liệu từ dự báo
            //3h forecast
            try {var rain3 = forecastdata.list[0].rain['3h']}
            catch {var rain3 = 0}
            try {var snow3 = forecastdata.list[0].snow['3h']}
            catch {var snow3 = 0}
            var visiblity1 = forecastdata.list[0].visibility;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        var date = new Date((forecastdata.list[0].dt) * 1000);
        var date1 = new Date()
        // Hours part from the timestamp
        var hours = "0" + date.getHours();

        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var timenow1 = date1.getFullYear() + '-' + ("0" + (date1.getMonth()+1)).slice(-2) + '-'  + ("0" + date1.getDate()).slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
        dt = dt + `${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}`
        text = text + `\nDự báo thời tiết: \nTại: ${forecastdata.city.name}, ${forecastdata.city.country} (${forecastdata.city.coord.lat}, ${forecastdata.city.coord.lon})\nNhiệt độ: ${Math.round(forecastdata.list[0].main.temp)}°C\nLượng mưa: ${rain3} mm, Lượng tuyết: ${snow3} mm, Tầm nhìn: ${visiblity1} m (${visiblity1 / 1000} km),\n Tốc độ gió: ${forecastdata.list[0].wind.speed} m/s (${(forecastdata.list[0].wind.speed) * 3.6} km/h)\n-----------\nThời gian đo: ${dt}`
        document.getElementById('share').addEventListener('click', async () => {
            const data_input = document.getElementById('share').getAttribute('data-input');
            globalThis.text;
            if (
                forecastdata.list[0].weather[0].icon == "09d" || forecastdata.list[0].weather[0].icon == "09n" ||
                forecastdata.list[0].weather[0].icon == "10d" || forecastdata.list[0].weather[0].icon == "10n"
            ) {
                document.getElementById('fc1').style.backgroundImage = `url("./Thời%20tiết/rain-anim.svg")`;
                document.getElementById('weatherin').style.backgroundRepeat = 'no-repeat';
                document.getElementById('weatherin').style.backgroundPositionX = 'right';

                document.getElementById('weatherin').style.paddingRight = '20px';
                document.getElementById('weatherin').style.backgroundClip='content-box';
            }
            else {document.getElementById('weatherin').style.backgroundImage = ``;}

            //let replace = text.replace(/\n/g, "<br>")
            if (data_input === "share-button") {
                if (navigator.share) {
                    try {
                        await navigator.share({
                            title: "Thời tiết",
                            text: text,
                            url: window.location.href,
                        })
                    }
                    catch (error) {
                        //throw new Error("Không thể chia sẻ thông tin thời tiết,\nLỗi: " + error)
                    }
                } else {
                    let x = document.getElementById("snackbar");
                    x.textContent = `Không thể chia sẻ thời tiết, vì không hỗ trợ Share API.`;
                        // Add the "show" class to DIV
                    x.className = "show";
                    
                        // After 3 seconds, remove the show class from DIV
                    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                }
            }
        })
        document.getElementById('thanhpho').innerHTML = `<!--<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><title>Thời tiết ở: </title>
                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                </svg>--> ${forecastdata.city.name}, ${forecastdata.city.country} (${forecastdata.city.coord.lat}, ${forecastdata.city.coord.lon}) <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><title>Vị trí hiện tại của bạn</title>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>`;
            try {var gust_wind = forecastdata.list[0].wind.gust}

            catch {var gust_wind=0}

            const acc = document.getElementsByClassName("accordion");
            var i;

            //var icon_image1 = forecastdata.list[0].weather[0].icon;
            //var iconurl1 = "http://openweathermap.org/img/w/" + icon_image1 + ".png";


            /*document.getElementById('bfc1').textContent = `${timenow1}, Nhiệt độ: ${forecastdata.list[0].main.temp}°C`;
            for (i = 0; i < acc.length; i++) {
                //searchButton.addEventListener("click", () => {})
                
                acc[i].classList.toggle("active");
                acc[i].addEventListener('click',  function() {
                    var panel = this.nextElementSibling;
                    this.classList.toggle("active");
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                    this.classList.toggle("active");
                    if (panel.style.display === "block") {
                        panel.style.display = "block";
                    } 
                    else {
                        panel.style.display = "block";
                    }
                });
            }*/
                
            var date = new Date((forecastdata.list[0].dt) * 1000);
                var date1 = new Date()
            // Hours part from the timestamp
            var dt =  date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " 
            var hours = "0" + date.getHours();
                
            // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();

            // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();
            dt = dt + `${hours}:${minutes}:${seconds}`
            text = text + `\nDự báo thời tiết: \nTại: ${forecastdata.city.name}, ${forecastdata.city.country} (${forecastdata.city.coord.lat}, ${forecastdata.city.coord.lon})\nNhiệt độ: ${Math.round(forecastdata.list[0].main.temp)}°C\nLượng mưa: ${rain3} mm, Lượng tuyết: ${snow3} mm, Tầm nhìn: ${visiblity1} m (${visiblity1 / 1000} km),\n Tốc độ gió: ${forecastdata.list[0].wind.speed} m/s (${(forecastdata.list[0].wind.speed) * 3.6} km/h)\n-----------\nThời gian đo: ${dt}`
            //document.getElementById('error1').textContent = '';
            //document.getElementById('time0').textContent = `${forecastdata.list[0]['dt_txt']} (Giờ GMT+0)`;
            document.getElementById('time7').textContent = `${timenow1} (Giờ GMT+7)`
            document.getElementById('des1').textContent = `Mô tả: ${forecastdata.list[0].weather[0].description}`;
            document.getElementById('forecasticon').style.visibility = 'visible';
            //styles of urls.
            var haze1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Haze.svg";
            var fog1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/FogV2.svg";
            var lightning1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Thunderstorms.svg";
            var dust1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Dust1.svg";
            var hazesmoke1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HazySmokeV2.svg"

            var icon_image = forecastdata.list[0].weather[0].icon;
            var iconurl = "https://openweathermap.org/img/w/" + icon_image + ".png";
            if (forecastdata.list[0].weather[0].main == 'Haze') {document.getElementById("forecasticon").src = haze1;}
            else if (forecastdata.list[0].weather[0].main == 'Fog') {document.getElementById('forecasticon').src = fog1;}
            else if (forecastdata.list[0].weather[0].main == 'Thunderstorm') {document.getElementById('forecasticon').src = lightning1;}
            else if (forecastdata.list[0].weather[0].main == 'Smoke') {document.getElementById('forecasticon').src = hazesmoke1;}
            else if (forecastdata.list[0].weather[0].main == 'Dust') {document.getElementById('forecasticon').src = dust1;}
            else {document.getElementById("forecasticon").src = iconurl;}

            if (
                forecastdata.list[0].weather[0].icon == "09d" || forecastdata.list[0].weather[0].icon == "09n" ||
                forecastdata.list[0].weather[0].icon == "10d" || forecastdata.list[0].weather[0].icon == "10n"
            ) {
                document.getElementById('fc1').style.backgroundImage = `url("./Thời%20tiết/rain-anim.svg") no-repeat center left`;
                document.getElementById('fc1').style.backgroundRepeat = 'no-repeat';
                document.getElementById('fc1').style.paddingRight = '20px';
                document.getElementById('fc1').style.backgroundClip='content-box';
            }
            else {document.getElementById('fc1').style.backgroundImage = ``;}

            document.getElementById('forecasticon').title = forecastdata.list[0].weather[0].description;
            forecast_temp.textContent = `Nhiệt độ: ${Math.round(forecastdata.list[0].main.temp)}°C, Cảm giác giống ${Math.round(forecastdata.list[0].main.feels_like)}°C`;
            document.getElementById('cloudy').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><title>Mây</title>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> ${forecastdata.list[0].clouds.all}%, 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16"><title>Độ ẩm</title>
  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267"/>
</svg> ${forecastdata.list[0].main.humidity}%, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16"><title>Tốc độ gió</title>
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
</svg> ${forecastdata.list[0].wind.speed} m/s. Gió giật ${gust_wind} m/s.`;
            //thử
            document.getElementById('rainy').textContent = `Lượng mưa: ${rain3} mm, Lượng tuyết: ${snow3} mm, Tầm nhìn: ${visiblity1} m (${visiblity1 / 1000} km).`;
        })
        .catch(error => {
            /*forecast_temp.textContent = '';
            document.getElementById('thanhpho').textContent = '';
            document.getElementById('time1').textContent = '';
            document.getElementById('des1').textContent = '';
            document.getElementById('cloudy').textContent = '';
            document.getElementById('rainy').textContent = '';*/
            //document.getElementById('error1').textContent = `Không tìm thấy tên thành phố: "${locationInput.value}" để dự báo thời tiết.`;
            
                // Get the snackbar DIV
            //console.log(error);
        })
        //#endregion forecast
}
/*function search_lonlat_city(lat, lon) {
    fetchWeatherByLonLat(lat, lon);
    forecastByLonLat(lat, lon);
}*/
/**
 * Searching for a city by the city's longtitude and latitude.
 * @param lon You need to type the longtitude to tracking for the weather.
 * @param lat You need to type the latitude to tracking for the weather.
 * @returns That will return the weather's information, name, country of the longtitude and latitude.
 */
function searchCityByLonLat(lon, lat) {
    fetchWeatherByLonLat(lat,lon);
    forecastByLonLat(lat,lon);
}
// Export function
//export default searchCityByLonLat;

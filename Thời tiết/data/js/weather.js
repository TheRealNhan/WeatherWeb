/*import {React} from React;
import {Math} from 'Math';*/
//import { ActiveXObject } from ActiveXObject
//import { FetchError } from "node-fetch";
//import fs from 'fs';
/*
async () => {
    try {
        const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x1234 }] })
        console.log(`Đã tìm thấy thiết bị: ${device.productName}`)
    } catch (err) {
        throw new Error("Không tìm được USB, lỗi: " + err)
    }
}*/
// api key
const apiKey = '5d89cf94d1787347cb458959d1890a54';
const forecast_apiKey = '0400ce034d5bc19aeef2111f526b203f';
//
// Input
//
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
//const timenow = document.getElementById('timenow');
//const hideElement = document.getElementById('hide');
//const Error1 = document.getElementById('error');
const apiElement = document.getElementById('apikey');
//Elements
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const minmaxtempElement = document.getElementById('minmaxtemp');
const descriptionElement = document.getElementById('description');
const pressureElement = document.getElementById('pressure');
const visibilityElement = document.getElementById('visibility');
const windElement = document.getElementById('windspeed');
const cloudElement = document.getElementById('cloud');
const humidityEle = document.getElementById('humidity');
const datetime = document.getElementById('time');
const rain = document.getElementById('rain');
//const snow = document.getElementById('snow');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const forecast_temp = document.getElementById('tempfc1');
//const weatherinfo_div = document.getElementById('weatherin')
//
//Notification.requestPermission(); // Request có muốn thông báo của trang web không.


var xhr = new XMLHttpRequest();
xhr.open('GET', '../php/savedata.php',true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
    }
}
//Values

document.getElementById('clear').value = 'clear sky';
document.getElementById('few-clouds').value = 'few clouds';
document.getElementById('cloudy1').value = 'cloudy';
document.getElementById('black-clouds').value = 'black clouds';
document.getElementById('no-rain').value = 'no rain';
document.getElementById('rain5').value = 'rain';
document.getElementById('lightning').value = 'lightning sky';
document.getElementById('snow').value = 'snow';
//
//console.log(Notification.requestPermission());
locationInput.value = 'Quận 12';
fetchWeather("Quận 12");
forecast("Quận 12");
const refresh = document.getElementById('refresh');
setInterval(function() {
    searchCityByName(locationInput.value);
}, 1000 * 60 * 5);
//weatherinfo_div.style.visibility = 'hidden';
//apiElement.value = apiKey;
document.getElementById("wicon").style.visibility = 'hidden';

//apiElement.disabled = true;
/*var myVar =*/ 
setInterval(() => {
    var d = new Date();
    datetime.innerHTML = d;
}, 100);
/*var myVar2 =*/ 
setInterval(() => {
   var d1 = new Date();
   document.getElementById('timenow').innerHTML = d1;
}, 100);
function myTimer(paragraph) {
    var d = new Date();
    paragraph.innerHTML = d;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  
const ykien = ['Thời tiết ở ngoài nắng nóng, nhiệt độ cao, gió mạnh.','Thời tiết ở ngoài vừa đủ mát, nhiệt độ cũng hơi cao, gió nhẹ.',
    'Thời tiết ở ngoài đang có mưa, nhiệt độ cũng hơi thấp, gió nhẹ.','Thời tiết ở ngoài đang có tuyết, nhiệt độ cũng hơi cao, gió nhẹ.','Thời tiết dễ chịu, nhiệt độ vừa phải, gió hơi se se lạnh.',
    'Thời tiết đang mưa dông, bão lũ, nhiệt độ thấp, gió nhẹ.','Thời tiết ở ngoài đang mưa lớn, nhiệt độ vừa phải, gió mạnh.', 'Thời tiết bình thường, gió hơi se se lạnh, nhiệt độ vừa phải.'
];
let index = 0;
setInterval(() => {
  index = (index + 1) % ykien.length;
  document.getElementById('ykien').placeholder = ykien[index];
}, 3000);
locationInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        const location = locationInput.value;
        if (location == '') {
            alert("Vui lòng nhập tên thành phố hoặc quận huyện để tìm kiếm!");
            return false;
        }
        if (location) {
            //weatherinfo_div.style.visibility = 'visible';
            //hideElement.style.visibility = 'visible';
            fetchWeather(location);
            forecast(location);
            /*refresh.onclick = function () {
                fetchWeather(location);
                forecast(location);
            }*/
        }
    }
})
var cache_storage = {}
/**
 * A simple cache class to store cache data.
 */

class _Cache {
    constructor(cache_name) {
        this.cache = cache_name;
        
    }
    getCache() {
        return this.cache;
    }
    setCache(data) {
        this.cache = data;
    }
    deleteCache() {
        this.cache = {};
    }
}


const element = document.querySelector('.container');
const element1 = document.querySelector('.air');
const element2 = document.querySelector('.map');
const element3 = document.querySelector('.health');

element.addEventListener('mouseover', () => {
  element.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  element1.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  element2.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  element3.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
});

element.addEventListener('mouseout', () => {
  element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  element1.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  element2.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  element3.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});
const location10 = locationInput.value;
if (location10) {
    refresh.onclick = function () {
        fetchWeather(location);
        forecast(location);
        fetchMaps();
    }
}

var modal = document.getElementById('mymodal')
var btn = document.getElementById("ask");
    
    // Get the <span> element that closes the modal
var span = document.getElementById("close1");
    
    // When the user clicks on the button, open the modal
    
btn.onclick = function a() {
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

var modal1 = document.getElementById('mymodal1')
var btn1 = document.getElementById("comment");
    
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
/*
var modal = document.getElementById("mymodal");
    
// Get the button that opens the modal
var btn = document.getElementById("bacmy");
    
    // Get the <span> element that closes the modal
var span = document.getElementById("close");
    
    // When the user clicks on the button, open the modal
    
btn.onclick = function a() {
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
//fullscreen
var elem = document.getElementById("bacmy2");
var elem1 = document.getElementById("bacmy3");
document.getElementById("bacmy_toanmanhinh").onclick = 
function bacmy1() {
  if (elem.requestFullscreen) {
        elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
};
document.getElementById("bacmy_toanmanhinh2").onclick =
function bacmy() {
    if (elem1.requestFullscreen) {
        elem1.requestFullscreen();
    }
    else if (elem1.webkitRequestFullscreen) {
        elem1.webkitRequestFullscreen();
    }
    else if (elem1.msRequestFullscreen) {
        elem1.msRequestFullscreen();
    }
}*/
/**
 * This function will help you to range arrays.
 * @param {*} start You need to type the start of an array.
 * @param {*} end You need to type the end of an array.
 * @returns It will return the array
 * @example range(1, 5); // returns [1, 2, 3, 4, 5]
 */
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
//hideElement.style.visibility = 'hidden';
searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location == '') {
        alert("Vui lòng nhập tên thành phố hoặc quận huyện để tìm kiếm!");
        return false;
    }
    if (location) {
        //weatherinfo_div.style.visibility = 'visible';
        //hideElement.style.visibility = 'visible';
        fetchWeather(location);
        forecast(location);
        refresh.onclick = function () {
            fetchWeather(location);
            forecast(location);
        }
    }
    //if (location == "suka blyat" || location == "cyka blyat" || location == "blyat") {alert(location)}
});

refresh.onclick = function () {
    fetchWeather(location10);
    forecast(location10);
}
/*hideElement.addEventListener('click', () => {
    weatherinfo_div.style.visibility = 'hidden';
    hideElement.style.visibility = 'hidden';
})*/
// Get the button:
let mybutton = document.getElementById("top_button");

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
document.getElementById('top_button').addEventListener('click', () => topFunction())
/*
timenow.addEventListener('click', () => {
    const date = new Date();
    //let time = date.getTime();
    timenow.style.visibility = 'hidden';
    datetime.textContent = date;
    hideElement.style.visibility = 'visible';
})
hideElement.addEventListener('click', () => {
    datetime.style.visibility = 'hidden';
    timenow.style.visibility = 'visible';
    hideElement.style.visibility = 'hidden';
})
*/
document.getElementById('find-search').addEventListener('click', (event) => {
    document.getElementById('find').placeholder = 'Tìm kiếm (Nhấn Enter để tìm)';
    if (!(document.getElementById('find').contains(event.target))) { 
        document.getElementById('find').placeholder = 'Tìm kiếm'; 
    }
});  
//var request1 = Notification.requestPermission();
/**
 * Time zone class, 
 * the `timezone(unix, idname)` function will return the date and time of the unix and the id name (of HTML tags).
 * @returns It will return the time with date format: DD/MM/YYYY HH:MM:SS
 * @example var timezone = new TimeZones();
 * timezone.timezone(0,"htmlid");
 * // Returns: "01/01/1970 00:00:00" to the id document.getElementById("htmlid")
 */
//export class TimeZones
class TimeZones {
    constructor(unix, idname) {
        this.unix = unix;
        this.idname = idname;
    }
    /**
     * This function will return the date and time of the unix time.
     * @param {*} unix You need to type the unix time 
     * @param {*} idname You need to type the id name of the html tags.
     * @returns It will return the time and date format: DD/MM/YYYY HH:MM:SS
     * @example var timezone = new TimeZones(); // Because this function is in the "TimeZones" class
     * timezone.timezone(0,"htmlid");
     * // Returns: "01/01/1970 00:00:00" to the id document.getElementById("htmlid")
     */
    timezone(unix, idname) {
        // convert unix to datenow
        var date = new Date(unix * 1000);

        var hour = ('0' + date.getHours()).slice(-2);
        var minute = ('0' + date.getMinutes()).slice(-2);
        var second = ('0' + date.getSeconds()).slice(-2);
        //month, year
        var month = ('0' + (date.getMonth()+1)).slice(-2);
        var year = date.getFullYear();
        var day = ('0' + date.getDay()).slice(-2);
        //format
        var format = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
        document.getElementById(idname).innerHTML = format;
    }
}
document.getElementById('submit_button').addEventListener('click', () => {
    var name1 = document.getElementById('name1').value;
    var details = document.getElementById('ykien').value;
    if (name1 != "" || details != "") {
        var content = "Name: " + name1 + "\n" + "Details: " + details;
        /*fs.writeFile('../../user-data/userdata.txt', content, err => {
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
 * This function will fetch the city you typed by its URL.
 * @param {*} location You need to enter the location to find the weather in the city.
 * @returns It will return the weather information from the city that you've typed.
 */
function fetchWeather(location) {
    if (window.navigator.onLine == true) {
        document.getElementById('container').style.display = 'block';document.getElementById('forecast').style.display = 'block';
        document.getElementById('air').style.display = 'block';
        document.getElementById('map').style.display = 'block';
        document.getElementById('health').style.display = 'block';
        document.getElementById('searchdata').style.display = 'none';
        document.getElementById('astronomy_events').style.display='block';
        document.getElementById('typing-test').style.display = 'block';
        document.getElementById('share-screen').style.display = 'block';
        
        document.getElementById('share-screen').style.marginTop='-16.4cm';
        document.getElementById('map').style.marginTop='-8cm';
        document.getElementById('health').style.marginTop='-8cm';
        document.getElementById('health').style.marginLeft='1.5cm';
        document.getElementById('astronomy_events').style.marginLeft = '18cm';
        
        document.getElementById('share-screen').style.marginTop='-17.84cm';
        document.getElementById('share-screen').style.marginLeft = '8cm';
        setInterval(() => {
            if (document.getElementById('detials-tag').open == true) {
                document.getElementById('typing-test').style.marginTop='-16.5cm';
                if (document.getElementById('text-to-type').innerHTML == '') {
                    document.getElementById('share-screen').style.marginTop='-17.84cm';
                    document.getElementById('share-screen').style.marginLeft = '8cm';
                } else {
                    document.getElementById('share-screen').style.marginTop='-8cm';
                    document.getElementById('share-screen').style.marginLeft = '1cm';
                }
            } else {
                document.getElementById('typing-test').style.marginTop='-8.84cm';
                if (document.getElementById('text-to-type').innerHTML == '') {
                    document.getElementById('share-screen').style.marginTop='-8.84cm';
                    document.getElementById('share-screen').style.marginLeft = '8cm';
                } else {
                    document.getElementById('share-screen').style.marginTop='-1cm';
                    document.getElementById('share-screen').style.marginLeft = '1cm';
                }
                
            }
        }, 100);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=vi&cnt=7`;
        //#region weatherdata
        fetch(url).then(response => {
            if (!response.ok) {
                //throw new Error(`Lỗi không fetch được URL: ${url}`)    
            }
            
            return (response.json())
        }) // Lấy dữ liệu từ JSON
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

                try{var rain1 = data.rain['1h']} 
                catch{var rain1=0}
                try{var rain3 = data.rain['3h']}
                catch{var rain3=0}
                //Tuyết
                try{var snow1 = data.snow['1h']}
                catch{var snow1=0}
                try{var snow3 = data.snow['3h']}
                catch{var snow3=0}
                //textContent
                //gió giật
                try {var gust_wind1 = data.wind.gust;}
                catch {var gust_wind1=0;}
                text = `Thời tiết ở: ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})\nNhiệt độ: ${Math.round(data.main.temp)}°C\nMô tả: ${data.weather[0].description}\nLượng mưa: ${rain1} mm\nTốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h).\n--------\nThời gian đo: ${dt}\n----------`;
                
                document.getElementById('submit_button').addEventListener('submit', function(event) {
                    event.preventDefault();

                    const formdata = new FormData(document.getElementById('datavalue'));
                    fetch('./Thời%tiết/data/php/savedata.php', {
                        method: 'POST',
                        body: formdata
                    }).then(response1 => response1.text())
                    .then(data => {
                        console.log("Đã thành công!" + data);
                    })
                    .catch(error => {throw new Error(error)});
                })
                document.getElementById('w_today').innerHTML = `Thời tiết hôm nay tại ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon}): Nhiệt độ ${data.main.temp}°C, Tốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h)`;
                // Đổi từ unix đến thời gian
                let sunrise_ts = data.sys.sunrise;
                let sunset_ts = data.sys.sunset;
                air_pollution(data.coord.lat, data.coord.lon);
                let played = false;
                document.addEventListener('mouseover', () => {
                    if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n" ||
                        data.weather[0].icon == "10d" || data.weather[0].icon == "10n" ||
                        data.weather[0].icon == "11d" || data.weather[0].icon == "11n"
                    ) {
                        document.getElementsByTagName('body').onload = () => video.play();
                        if (!played) {
                            played = true;
                        }
                    }
                });

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
                document.getElementById("wicon").style.visibility = 'visible';
                //if (data.weather[0].icon == '01d') {var iconurl = "https://assets.msn.com/wxbundles/v2/weather/assets/svg/conditionsIcons/d100.svg"}
                //if (data.weather[0].icon == '02d') {var iconurl = "https://assets.msn.com/wxbundles/v2/weather/assets/svg/conditionsIcons/d200.svg"}
                if (data.weather[0].icon == '10d' || data.weather[0].icon == '10n' ||
                    data.weather[0].icon == '09d' || data.weather[0].icon == '09n' || 
                    data.weather[0].icon == '11d' || data.weather[0].icon == '11n'
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
                var icon_image = data.weather[0].icon;
                var iconurl = "./Thời%20tiết/data/weather-icons/" + icon_image + ".png";

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
                //styles for urls.
                var haze1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Haze.svg";
                var fog1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/FogV2.svg";
                var lightning1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Thunderstorms.svg";
                var dust1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/Dust1.svg";
                var hazesmoke1 = "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HazySmokeV2.svg"

                if (data.weather[0].main == 'Haze') {document.getElementById("wicon").src = haze1;}
                else if (data.weather[0].main == 'Fog') {document.getElementById('wicon').src = fog1;}
                else if (data.weather[0].main == 'Thunderstorm') {document.getElementById('wicon').src = lightning1;}
                else if (data.weather[0].main == 'Smoke') {document.getElementById('wicon').src = hazesmoke1;}
                else if (data.weather[0].main == 'Dust') {document.getElementById('wicon').src = dust1;}
                else {document.getElementById("wicon").src = iconurl;}

                document.getElementById('wicon').title = data.weather[0].description;
                //Mưa
                /*
                if ('nhỏ' in data.weather[0].description) {
                    document.getElementById('need').innerHTML = `Có khả năng cần mang ô`;
                    document.getElementById('rain2').style.backgroundColor = 'yellow';
                    document.getElementById('rain2').style.color = 'white';
                }
                if (data.weather[0].description == 'tuyết vừa' || data.weather[0].description == 'mưa vừa') {
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
                if (data.weather[0].icon == "01n") {
                    document.getElementById('background').style.backgroundImage = `url("./Thời%20tiết/night-galaxy.jpg")`;
                    document.getElementById('background').style.backgroundSize = 'cover';
                }
                else{
                    document.getElementById('background').style.backgroundImage = '';
                    document.getElementById('background').style.backgroundSize = 'cover';
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
                
                
                function notification_requests() {
                    //const img = "http://openweathermap.org/img/w/" + icon_image + ".png";
                    const text = `Nhiệt độ: ${Math.round(data.main.temp)}°C\nMô tả: ${data.weather[0].description}\nLượng mưa: ${rain1} mm\nTốc độ gió: ${data.wind.speed} m/s (${(data.wind.speed)*3.6} km/h).`;
                    //var request1 = Notification.requestPermission();
                    
                    (async () => {
                        // create and show the notification
                        const showNotification = () => {
                            // create a new notification
                            const notification = new Notification(('Thời tiết hiện tại ở ' + data.name + ", " + data.sys.country), {
                                body: text,
                                icon: iconurl,
                                vibrate: true,
                            });
                
                            // close the notification after 10 seconds
                            /*setTimeout(() => {
                                notification.close();
                            }, 10 * 1000);*/
                
                            // navigate to a URL
                            notification.addEventListener('click', () => {
                                window.open('http://127.0.0.1:3000/Th%E1%BB%9Di%20ti%E1%BA%BFt.html', '_blank');
                            });
                        }
                        // show an error message
                        const showError = () => {
                            //const error = document.querySelector('.error');
                            //error.style.display = 'block';
                            console.log('Bạn đã chặn thông báo.');
                        }
                        let granted = false;
                
                        if (Notification.permission === 'granted') {
                            granted = true;
                        } else if (Notification.permission !== 'denied') {
                            let permission = await Notification.requestPermission();
                            granted = permission === 'granted' ? true : false;
                        }
                        //! show notification or the error message 
                        granted ? showNotification() : showError();
                    })();
                }
                setTimeout(notification_requests, 1000 * 60 * 5);
            // Will display time in 10:30:23 format
                var timenow = date1.getFullYear() + '-' + ("0" + (date1.getMonth()+1)).slice(-2) + '-'  + ("0" + date1.getDate()).slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
                locationElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><title>Thời tiết ở: </title>
                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                </svg> ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;
                //Error1.textContent = '';
                temperatureElement.textContent = `Nhiệt độ: ${Math.round(data.main.temp)}°C, Cảm giác giống ${Math.round(data.main.feels_like)}°C`;
                minmaxtempElement.textContent = `Nhiệt độ thấp nhất: ${Math.round(data.main.temp_min)}°C, Nhiệt độ cao nhất ${Math.round(data.main.temp_max)}°C`;
                //document.getElementById('winddir').innerHTML = `Hướng gió: ${data.wind.deg}°`;

                document.getElementById('sealevel').innerHTML = `Áp suất không khí trên mực nước biển: ${data.main.sea_level} hPa,\nÁp suất không khí ở trên đất: ${data.main.grnd_level} hPa`;
                document.getElementById('datetime').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><title>Thời gian cập nhật</title>
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
</svg> ${timenow} (Giờ GMT+7)`;
                descriptionElement.textContent = `Mô tả: ${data.weather[0].description}`;
                pressureElement.textContent = `Áp suất không khí: ${data.main.pressure} hPa`;
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
                window.addEventListener('online', () => console.log("Bạn đang trực tuyến."));
                
                /*
                switch (rain1 && snow1) {
                    case rain1 && snow1:
                        rain.textContent = `Lượng mưa: ${rain1} mm, Lượng tuyết: ${snow1} mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`;
                    case data.rain['3h'] && data.snow['3h']:
                        rain.textContent = `Lượng mưa: ${data.rain['3h']} mm, Lượng tuyết: ${data.snow['3h']} mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`
                    default:
                        rain.textContent = `Lượng mưa: 0 mm, Lượng tuyết: 0 mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`;
                }*/

                //video

                //document.getElementById('comment').style.display = 'block';
                document.getElementById('location1').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><title>Vị trí của bạn</title>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> ${data.name}, ${data.sys.country} (${data.coord.lat}, ${data.coord.lon})`;

                var video = document.getElementById("rainVideo");
                video.muted = false;
                if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n" ||
                    data.weather[0].icon == "10d" || data.weather[0].icon == "10n" ||
                    data.weather[0].icon == "11d" || data.weather[0].icon == "11n"
                ) {
                    document.getElementsByTagName('body').onload = () => video.play();
                    video.style.display = 'block';
                    if (video.paused) {
                        if (video) {
                            video.muted = false;
                            video.autoplay = true;
                        }
                    }
                }
                else {video.style.display = 'none';
                    video.muted=true;
                }

                //
                //

                if (video.style.display === 'block') {
                    document.getElementById('newBody').style.background = 'rgba(0,0,0,0.5)';
                } else {document.getElementById('newBody').style.background = 'rgba(0,0,0,0.5)';}

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
                document.getElementById('search1').onclick = function () {searchforWeather();}

                try { rain.textContent = `Lượng mưa: ${rain1} mm, Lượng tuyết: ${snow1} mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`; }
                catch { rain.textContent = `Lượng mưa: 0 mm, Lượng tuyết: 0 mm, Tầm nhìn: ${data.visibility} m (${(data.visibility) / 1000} km)`; }
                sunrise.innerHTML = `<hr><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
              </svg> Mặt trời mọc, lặn: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16"><title>Mặt trời mọc</title>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
              </svg> ${sr_format}, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16"><title>Mặt trời lặn</title>
                <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
              </svg> ${ss_format} (Giờ GMT+7)`;
              //sunset.textContent = `Mặt trời lặn lúc: ${ss_format} (Giờ GMT+7)`;
              
            })
            .catch (error => { //Trường hợp khi gặp lỗi
                console.log(error)
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
                x.textContent = `Không tìm thấy tên thành phố: "${locationInput.value}"
                để tìm kiếm thời tiết và dự báo thời tiết.`;
                    // Add the "show" class to DIV
                x.className = "show";
                
                    // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                /*var fso = new ActiveXObject("Scripting.FileSystemObject");
                var a = fso.CreateTextFile("H:/Thời%20tiết/user-data/user-data.txt", true);
                var b = new Date();
                a.WriteLine(`${b}:
                    ${error}`);
                a.Close();*/
                //console.log(error);
            });
        //#endregion weatherdata
    }
    else {
        window.addEventListener('offline', () => console.log("Bạn đang không trực tuyến."));
        var x = document.getElementById("snackbar");
        x.textContent = `Không tìm thấy kết nối Internet, vui lòng kết nối với Internet để tìm kiếm thời tiết.`;
                // Add the "show" class to DIV
        x.className = "show";
              
                // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
        document.getElementById('typing-test').style.marginTop='0cm';
        document.getElementById('map').style.marginTop='0cm';
        document.getElementById('share-screen').style.marginTop='-8.34cm';
        document.getElementById('astronomy_events').style.marginLeft = '4cm';
        document.getElementById('astronomy_events').style.marginTop = 'cm';


        if (document.getElementById('text-to-type').innerHTML != '') {
            document.getElementById('share-screen').style.marginTop='-8.34cm';
            document.getElementById('share-screen').style.marginLeft = '8cm';

        } else {
            document.getElementById('share-screen').style.marginTop='0cm';
            document.getElementById('share-screen').style.marginLeft = '1cm';
        }
        document.getElementById('health').style.marginTop='5.8cm';
        document.getElementById('container').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.getElementById('container').style.animation = ''
        },1000)
    }
}
/**
 * This function will return the forecast data by the URL and the location that you've typed
 * @param {*} location You need to enter the location to search for weather information.
 * @returns It will return the forecasted weather information of the city.
*/
function forecast(location) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${forecast_apiKey}&units=metric&lang=vi&cnt=7`;
    //#region forecast
    fetch(url)
        .then(res => {
            if (!res.ok) {
                //throw new Error(`Lỗi không fetch được URL ${url}`);
            }
            return res.json()
        }) //Lấy dữ liệu từ JSON
        .then(forecastdata => { //Lấy dữ liệu từ dự báo
            try {var rain3 = forecastdata.list[0].rain['3h']}
            catch {var rain3 = 0}
            try {var snow3 = forecastdata.list[0].snow['3h']}
            catch {var snow3 = 0}
            var visiblity1 = forecastdata.list[0].visibility;
            //3h forecast
            var date = new Date((forecastdata.list[0].dt) * 1000);
                var date1 = new Date()
            // Hours part from the timestamp
            var dt =  date.getFullYear() + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " 
            var hours = "0" + date.getHours();
                
            // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();

            // Seconds part from the timestamp
                var seconds = "0" + date.getSeconds();
            dt = dt + `${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}`
            text = text + `\nDự báo thời tiết: \nTại: ${forecastdata.city.name}, ${forecastdata.city.country} (${forecastdata.city.coord.lat}, ${forecastdata.city.coord.lon})\nNhiệt độ: ${Math.round(forecastdata.list[0].main.temp)}°C\nLượng mưa: ${rain3} mm, Lượng tuyết: ${snow3} mm, Tầm nhìn: ${visiblity1} m (${visiblity1 / 1000} km),\nTốc độ gió: ${forecastdata.list[0].wind.speed} m/s (${(forecastdata.list[0].wind.speed) * 3.6} km/h)\n-----------\nThời gian đo: ${dt}\n-------------`
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
        var timenow1 = date.getFullYear() + '-' + ("0" + (date1.getMonth()+1)).slice(-2) + '-'  + ("0" + date1.getDate()).slice(-2) + ' ' + hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2);
        document.getElementById('thanhpho').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16"><title>tại: </title>
                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
                </svg> ${forecastdata.city.name}, ${forecastdata.city.country} (${forecastdata.city.coord.lat}, ${forecastdata.city.coord.lon})`;
            try {var gust_wind = forecastdata.list[0].wind.gust}

            catch {var gust_wind=0}

            //const acc = document.getElementsByClassName("accordion");
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
            //document.getElementById('error1').textContent = '';
            //document.getElementById('time0').textContent = `${forecastdata.list[0]['dt_txt']} (Giờ GMT+0)`;
            document.getElementById('time7').textContent = `${timenow1} (Giờ GMT+7)`
            document.getElementById('des1').textContent = `Mô tả: ${forecastdata.list[0].weather[0].description}`;
            document.getElementById('forecasticon').style.visibility = 'visible';
            // styles of urls.
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

            document.getElementById('forecasticon').title = forecastdata.list[0].weather[0].description;
            forecast_temp.textContent = `Nhiệt độ: ${Math.round(forecastdata.list[0].main.temp)}°C, Cảm giác giống ${Math.round(forecastdata.list[0].main.feels_like)}°C`;
            document.getElementById('cloudy').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><title>Mây</title>
  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg> ${forecastdata.list[0].clouds.all}%, <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16"><title>Độ ẩm</title>
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
            
                //// Get the snackbar DIV
        })
        //#endregion forecast
}
/*function search_city(city_name) {
    fetchWeather(city_name);
    forecast(city_name);
}*/
/**
* Searching for a city by the city's name.
* @param   city_name  You need to type the city's name to tracking for the weather.
* @returns That will return the weather's information of the city.
*/
function searchCityByName(city_name) {
    fetchWeather(city_name);
    forecast(city_name);
}
// Export functions
//export default searchCityByName;
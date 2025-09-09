//import { FetchError } from "node-fetch";
document.getElementById('find').addEventListener('keypress', (event) => {
    
    if (event.key === "Enter") {
        if (document.getElementById('find').value) {
            const findElement = document.getElementById('find');
            const find_uppercase = findElement.value;
        
            if ((find_uppercase) == 'astronomy' || find_uppercase == 'Astronomy') {
                document.getElementById('container').style.display = 'none';
                document.getElementById('forecast').style.display = 'none';
                document.getElementById('air').style.display = 'none';
                document.getElementById('map').style.display = 'none';
                document.getElementById('health').style.display = 'none';
                document.getElementById('searchdata').style.display = 'none';
                document.getElementById('astronomy_events').style.display='block';
                document.getElementById('typing-test').style.display = 'none';
                document.getElementById('share-screen').style.display = 'none';
            }
            else if (
                find_uppercase == "Typing Test" || find_uppercase == "Typing" || find_uppercase == "Typing test" ||
                find_uppercase == "typing" || find_uppercase == "typing Test" || find_uppercase == "typing test"
            ) {
                // Show the typing test div to the home webpage.
                document.getElementById('container').style.display = 'none';
                document.getElementById('forecast').style.display = 'none';
                document.getElementById('air').style.display = 'none';
                document.getElementById('map').style.display = 'none';
                document.getElementById('health').style.display = 'none';
                document.getElementById('searchdata').style.display = 'none';
                document.getElementById('astronomy_events').style.display='none';
                document.getElementById('typing-test').style.display = 'block';
                document.getElementById('share-screen').style.display = 'none';
                document.getElementById('start').addEventListener('click', () => {Typing_Test();})
            }
            else if (
                find_uppercase == "Share screen" || find_uppercase == "share screen" || find_uppercase == "Share Screen"
            ) {
                document.getElementById('container').style.display = 'none';
                document.getElementById('forecast').style.display = 'none';
                document.getElementById('air').style.display = 'none';
                document.getElementById('map').style.display = 'none';
                document.getElementById('health').style.display = 'none';
                document.getElementById('searchdata').style.display = 'none';
                document.getElementById('astronomy_events').style.display='none';
                document.getElementById('typing-test').style.display = 'none';
                document.getElementById('share-screen').style.display = 'block';
                document.getElementById('start').addEventListener('click', () => {Typing_Test();})
            }
            else {
                document.getElementById('container').style.display = 'block';
                document.getElementById('forecast').style.display = 'block';
                document.getElementById('air').style.display = 'block';
                document.getElementById('map').style.display = 'block';
                document.getElementById('health').style.display = 'block';
                document.getElementById('searchdata').style.display = 'none';
                document.getElementById('astronomy_events').style.display='block';
                document.getElementById('typing-test').style.display = 'block';
                document.getElementById('share-screen').style.display = 'block';

                document.getElementById('input-group').style.animation = 'shake 0.5s';
                setTimeout(() => {
                    document.getElementById('input-group').style.animation = '';
                },1010)
            }
        } else {
            // fallback
            document.getElementById('input-group').style.animation = 'shake 0.5s';
            setTimeout(() => {
                document.getElementById('input-group').style.animation = '';
            },1010)
        }
    } 
})

    /*for (let a in location5) {
        if (a == '') {
            document.getElementById('container').style.display = 'block';
            document.getElementById('forecast').style.display = 'block';
            document.getElementById('air').style.display = 'block';
            document.getElementById('map').style.display = 'block';
            document.getElementById('health').style.display = 'block';
            document.getElementById('searchdata').style.display = 'none';
        }
    }*/

/**
 * This function will search for weather data and information
 * @param {*} location You need to type the location to search for weather data
 */
function searchforWeather(location) {
    //#region searchforWeather
    if (window.navigator.onLine == true) {
        const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=vi&cnt=7`;
        fetch(url2).then(request1 => request1.json())
        .then(wdata => {
            //Hide elements
            document.getElementById('container').style.display = 'none';
            document.getElementById('forecast').style.display = 'none';
            document.getElementById('air').style.display = 'none';
            document.getElementById('map').style.display = 'none';
            document.getElementById('health').style.display = 'none';
            //Search data
            document.getElementById('searchdata').style.display = 'block';
            //Data
            if (wdata.weather[0].icon == '09d' || wdata.weather[0].icon == '09n' ||
                wdata.weather[0].icon == '10d' || wdata.weather[0].icon == '10n' ||
                wdata.weather[0].icon == '11d' || wdata.weather[0].icon == '11n' ||
                wdata.weather[0].icon == '13d' || wdata.weather[0].icon == '13n'
            ) {
                var safeDrive1 = 'Khó khăn khi lái xe: <b>Ẩm ướt</b>.'
            }
            else {
                var safeDrive1 = 'Khó khăn khi lái xe: Không có.'
            }
            try {var rainData = wdata.rain['1h']}
            catch {var rainData = ''}
            document.getElementById('searchdata').innerHTML = `Thời tiết hôm nay tại ${wdata.name}, ${wdata.sys.country} (${wdata.coord.lat}, ${wdata.coord.lon}) có ${wdata.weather[0].description}\n<b>Nhiệt độ: ${Math.round(wdata.main.temp)}°C, Nhiệt độ thấp nhất: ${Math.round(wdata.main.temp_min)}°C, Nhiệt độ cao nhất: ${Math.round(wdata.main.temp_max)}°C, Lượng mưa ${rainData} mm/h\n
Tốc độ gió: ${wdata.wind.speed} m/s, hướng gió: ${wdata.wind.deg}°, mây: ${wdata.clouds.all}%\n
Áp suất: ${wdata.main.pressure} hPa (Trên bờ: ${wdata.main.grnd_level} hPa, trên mặt nước: ${wdata.main.sea_level} hPa)\n


Độ ẩm: ${wdata.main.humidity}%\n\n\nSức khỏe:\n


- ${safeDrive1}</b>`;
            var video = document.getElementById("rainVideo");
                video.muted = false;
                if (wdata.weather[0].icon == "09d" || wdata.weather[0].icon == "09n" ||
                    wdata.weather[0].icon == "10d" || wdata.weather[0].icon == "10n"
                ) {
                    video.style.display = 'block';
                    if (video.paused) {
                        if (video) {
                            video.muted = false;
                            video.autoplay = true;
                            video.play();
                        }
                    }
                }
                else {video.style.display = 'none';
                    video.muted=true;
                }

                if (wdata.weather[0].icon == "01n") {
                    document.getElementById('background').style.backgroundImage = `url("./Thời%20tiết/night-galaxy.jpg")`;
                    document.getElementById('background').style.backgroundSize = 'cover';
                }
                else{
                    document.getElementById('background').style.backgroundImage = '';
                    document.getElementById('background').style.backgroundSize = 'cover';
                }
        })
        .catch (error2 => {
            console.log(error2);
            document.getElementById('searchdata').style.display = 'none';
            document.getElementById('container').style.display = 'block';
            document.getElementById('forecast').style.display = 'block';
            document.getElementById('air').style.display = 'block';
            document.getElementById('map').style.display = 'block';
            document.getElementById('health').style.display = 'block';
            var snbar = document.getElementById('snackbar')
                snbar.textContent = `Không tìm thấy tên thành phố: "${document.getElementById('find').value}"
                để tìm kiếm thời tiết và dự báo thời tiết.`;
                    // Add the "show" class to DIV
                snbar.className = "show";
                
                    // After 3 seconds, remove the show class from DIV
                setTimeout(function(){ snbar.className = snbar.className.replace("show", ""); }, 3000);
        })
    }
    else {
        console.log("Vui lòng kết nối mạng để sử dụng!");
    }
    //#endregion searchforWeather
}
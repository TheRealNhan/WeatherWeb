//import { FetchError } from "node-fetch";

const username = 'minhnhan24042012@gmail.com'; // replace with your actual username
const password = 'Minhnhan1_';
const astro_apiKey = 'kr2amdBYm1';
const astro_secretKey = 'Eqr0K1RhczdUDjHqLrnv'
const credentials = btoa(`${username}:${password}`);

//variables
var night_time = new Date();
night_time.setHours(18,40);

var night_time1 = new Date();
night_time1.setHours(0,0);
var datetime_now = new Date();
datetime_now.setHours(datetime_now.getHours(),datetime_now.getMinutes());
var end_night_time = new Date();
end_night_time.setHours(23,59);

var end_night_time1 = new Date();
end_night_time1.setHours(4,33);

var astronomical_twilight = new Date();
astronomical_twilight.setHours(4,34);
var end_astronomical_twilight = new Date();
end_astronomical_twilight.setHours(4,58);

var nautical_twilight = new Date();
nautical_twilight.setHours(4,59);
var end_nautical_twilight = new Date();
end_nautical_twilight.setHours(5,24);

var civil_twilight = new Date();
civil_twilight.setHours(5,25);
var end_civil_twilight = new Date();
end_civil_twilight.setHours(5,46);

var day_time = new Date();
day_time.setHours(5,47);
var end_day_time = new Date();
end_day_time.setHours(17,27);

var civil_twilight1 = new Date();
civil_twilight1.setHours(17,28);
var end_civil_twilight1 = new Date();
end_civil_twilight1.setHours(17,49);

var nautical_twilight1 = new Date();
nautical_twilight1.setHours(17,50);
var end_nautical_twilight1 = new Date();
end_nautical_twilight1.setHours(18,14);

var astronomical_twilight1 = new Date();
astronomical_twilight1.setHours(18,15);
var end_astronomical_twilight1 = new Date();
end_astronomical_twilight1.setHours(18,39);

//export function checkTheTime()
function checkTheTime() {
    if (night_time <= datetime_now && datetime_now <= end_night_time) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '1px solid red';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '1px solid red';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
        
    }
    else if (night_time1 <= datetime_now && datetime_now <= end_night_time1) {
        document.getElementById('lm-0').style.border = '1px solid red';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '1px solid red';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
    }
    else if (astronomical_twilight <= datetime_now && datetime_now <= end_astronomical_twilight) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '1px solid red';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '1px solid red';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
    }
    else if (nautical_twilight <= datetime_now && datetime_now <= end_nautical_twilight) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '1px solid red';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';

        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '1px solid red';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
    }
    else if (civil_twilight <= datetime_now && datetime_now <= end_civil_twilight) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '1px solid red';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';

        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '1px solid red';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
        
    }
    else if (day_time <= datetime_now && datetime_now <= end_day_time) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '1px solid red';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';

        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '1px solid red';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
        
    }
    else if (civil_twilight1 <= datetime_now && datetime_now <= end_civil_twilight1) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '1px solid red';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '1px solid red';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
    }
    else if (nautical_twilight1 <= datetime_now && datetime_now <= end_nautical_twilight1) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '1px solid red';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '1px solid red';
        document.getElementById('lm-leg-7').style.border = '';
    }
    else if (astronomical_twilight1 <= datetime_now && datetime_now <= end_astronomical_twilight1) {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '1px solid red';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '1px solid red';
    }
    else {
        document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
        document.getElementById('lm-leg-0').style.border = '';
        document.getElementById('lm-leg-8').style.border = '';
        document.getElementById('lm-leg-1').style.border = '';
        document.getElementById('lm-leg-2').style.border = '';
        document.getElementById('lm-leg-3').style.border = '';
        document.getElementById('lm-leg-4').style.border = '';
        document.getElementById('lm-leg-5').style.border = '';
        document.getElementById('lm-leg-6').style.border = '';
        document.getElementById('lm-leg-7').style.border = '';
    }
}
checkTheTime();
setInterval(checkTheTime, 1000*60*5);
document.getElementById('astronomy_events1').onload = function () {checkTheTime();setInterval(checkTheTime, 1000*60*5);};
document.getElementById('astronomy_events').onload = function() {checkTheTime();setInterval(checkTheTime, 1000*60*5);};
/*
var min = d.getMinutes();
var hour_d = d.getHours();
if ((hour_d >= 18 && min >= 40) && (hour_d <= 23 && min <=59)) {
    console.log('Its night')
}*/
//const url = `https://api.timeanddate.com/json/astro/astronomy?key=${astro_apiKey}`;
const endpoint = 'https://api.xmltime.com/astronomy';

document.getElementById('lm-leg-0').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '2px solid #ffe600';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
}); document.getElementById('lm-leg-1').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '2px solid #ffe600';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
}); document.getElementById('lm-leg-2').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '2px solid #ffe600';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
}); document.getElementById('lm-leg-3').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '2px solid #ffe600';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
}); document.getElementById('lm-leg-4').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '2px solid #ffe600';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
}); document.getElementById('lm-leg-5').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '2px solid #ffe600';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
}); document.getElementById('lm-leg-6').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '2px solid #ffe600';
        document.getElementById('lm-7').style.border = '';
}); document.getElementById('lm-leg-7').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '2px solid #ffe600';
        ;
}); document.getElementById('lm-leg-8').addEventListener('mouseover', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '2px solid #ffe600';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';
        
});
//mouse out

document.getElementById('lm-leg-0').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-1').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-2').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-3').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-4').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-5').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-6').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-7').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-leg-8').addEventListener('mouseout', () => {
    document.getElementById('lm-0').style.border = '';
        document.getElementById('lm-8').style.border = '';
        document.getElementById('lm-1').style.border = '';
        document.getElementById('lm-2').style.border = '';
        document.getElementById('lm-3').style.border = '';
        document.getElementById('lm-4').style.border = '';
        document.getElementById('lm-5').style.border = '';
        document.getElementById('lm-6').style.border = '';
        document.getElementById('lm-7').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
});

//
//
//

document.getElementById('lm-0').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '#ffe600';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '2px solid #ffe600';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-1').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '#ffe600';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '2px solid #ffe600';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-2').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '#ffe600';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '2px solid #ffe600';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-3').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '#ffe600';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '2px solid #ffe600';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-4').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '#ffe600';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '2px solid #ffe600';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-5').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '#ffe600';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '2px solid #ffe600';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-6').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '#ffe600';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '2px solid #ffe600';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-7').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '#ffe600';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '2px solid #ffe600';document.getElementById('lm-8').style.border = '';
}); document.getElementById('lm-8').addEventListener('mouseover', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '#ffe600';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '2px solid #ffe600';
}); 
//mouseout
//
//

document.getElementById('lm-0').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-1').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-2').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-3').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-4').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-5').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-6').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-7').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); document.getElementById('lm-8').addEventListener('mouseout', () => {
    document.getElementById('lm-leg-0').style.backgroundColor = '';
    document.getElementById('lm-leg-1').style.backgroundColor = '';
    document.getElementById('lm-leg-2').style.backgroundColor = '';document.getElementById('lm-leg-3').style.backgroundColor = '';
    document.getElementById('lm-leg-4').style.backgroundColor = '';document.getElementById('lm-leg-5').style.backgroundColor = '';document.getElementById('lm-leg-6').style.backgroundColor = '';document.getElementById('lm-leg-7').style.backgroundColor = '';document.getElementById('lm-leg-8').style.backgroundColor = '';
    document.getElementById('lm-0').style.border = '';document.getElementById('lm-1').style.border = '';document.getElementById('lm-2').style.border = '';document.getElementById('lm-3').style.border = '';
    document.getElementById('lm-4').style.border = '';document.getElementById('lm-5').style.border = '';document.getElementById('lm-6').style.border = '';document.getElementById('lm-7').style.border = '';document.getElementById('lm-8').style.border = '';checkTheTime();setInterval(checkTheTime, 1000*60*5);
}); 

/**
 * Get the astronomy events from timeanddate.com's API.
 * @param {*} lon You need to enter the longtitude
 * @param {*} lat You need to enter the latitude
 * @returns It will return astronomy data.
 */
//#region astronomy
//export function getAstronomy(lon,lat)
function getAstronomy(lon,lat) {
    const params = {
        accesskey: astro_apiKey,
        secretkey: astro_secretKey,
        lat: lat,
        lon: lon,
        format: 'json'
    };
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}?${queryString}`;
    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`
        },
        mode: 'no-cors'
      }).then(response => {
        if (!response.ok) {
            throw new Error(`Không fetch được URL: ${url}`);
        }
        return response.json();
    })
    .then(astro_data => {
        console.log(astro_data);
    })
    .catch(error => {
        ////console.log(error);
    })
}
setInterval(checkTheTime, 1000 * 60 * 5)
//#endregion astronomy
// Export functions

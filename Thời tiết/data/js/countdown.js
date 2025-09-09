const days_of_the_week = ['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy']
setInterval(() => {
    switch (document.getElementById('detials-tag').open) {
        case true:
            if (window.navigator.onLine == true) {
                document.getElementById('countdown').style.marginTop = '-8cm'
                document.getElementById('countdown').style.marginLeft = '2cm'
            } else {
                document.getElementById('countdown').style.marginTop = '-10cm'
                document.getElementById('countdown').style.marginLeft = '-16cm'

            }
            break;
        case false:
            if (window.navigator.onLine == true) {
                document.getElementById('countdown').style.marginTop = '-12.5cm'
                document.getElementById('countdown').style.marginLeft = '-8cm'
            } else {
                document.getElementById('countdown').style.marginTop = '-10cm'
                document.getElementById('countdown').style.marginLeft = '-16cm'
            }
            break;
        default:
            break;
    }
},100);
/**
 * Count down function to countdown the day
 * @param date You need to enter the day to countdown
 */
const countDownTo = (date) => {
    var countdowndate = new Date(date).getTime()

    setInterval(() => {
        const datenow = new Date()
        var day = new Date(date)
        //var day1 = new Date(date).getTime()
        const now = new Date().getTime()
        var distance = countdowndate - now
        //const ifdate = ((day.getMonth()+1) > (datenow.getMonth() + 1)) ? ((day.getMonth() +1) - (datenow.getMonth()+1)) : ((datenow.getMonth() + 1) - (day.getMonth() + 1))
        //
        var months = ("0" + ((day.getFullYear() - datenow.getFullYear())*12 + ((day.getMonth()) - (datenow.getMonth())))).slice(-2);
        //var months = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24 * 7 * 30.44))).slice(-2);
        var weeks = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24 * 7))).slice(-2);
        var days;
        if (Math.floor(distance/(1000*60*60*24))>=100 && Math.floor(distance/(1000*60*60*24))<1000) 
            days = ("00" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-3);
        else if (Math.floor(distance/(1000*60*60*24))>=10 && Math.floor(distance/(1000*60*60*24))<100)
            days = ("00" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
        else if (Math.floor(distance/(1000*60*60*24))>=0 && Math.floor(distance/(1000*60*60*24))<10)
            days = ("00" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-1);
        else days = 0;
        var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        var minutes = ("0" +Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
        var seconds = ("0" +Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

        document.getElementById('month_display').innerHTML = `${months}<br><b id="month_title" style="font-size:25px">tháng</b>`
        document.getElementById('weeks_display').innerHTML = `${weeks}<br><b id="weeks_title" style="font-size:25px">tuần</b>`
        document.getElementById("day_display").innerHTML = `${days}<br><b id="date_title" style="font-size: 40px">ngày</b>`
        document.getElementById("hour_display").innerHTML = `${hours}<br><b id="hour_bold">giờ</b>`
        document.getElementById('minutes_display').innerHTML = `${minutes}<br><b id="min_bold">phút</b>`
        document.getElementById('second_display').innerHTML = `${seconds}<br><b id="sec_bold">giây</b>`
    },100);
};
var modal2 = document.getElementById('modal-countdown')
var btn2 = document.getElementById("countdown_click");
    
    // Get the <span> element that closes the modal
var span2 = document.getElementById("close-countdown");
    
    // When the user clicks on the button, open the modal
    
document.title = `Thời tiết`
modal2.style.animation = ''

btn2.onclick = function () {
    document.getElementById('body').style.overflow = 'hidden'
    modal2.style.display = "block";
    if (getURLParams(window.location.href)['countdown'] == '' || getURLParams(window.location.href)['countdown'] == undefined) {            
        document.title = `Thời tiết - Đếm ngược tới năm ${new Date().getFullYear() + 1}`
    } else {
        document.title = `Thời tiết - Đếm ngược tới ${getURLParams(window.location.href)['countdown']}`
    }
    modal2.style.animation = 'zoomin 0.6s ease-in-out'
    document.getElementById('newyear_song').autoplay = true
    
}

    // When the user clicks on <span> (&times;), close the modal
span2.onclick = function() {
    document.getElementById('body').style.overflow = 'auto'
    modal2.style.display = "none";
    document.title = `Thời tiết`
    modal2.style.animation = 'zoomout 0.6s ease-in-out'
}
    
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById('body').style.overflow = 'auto'
        modal2.style.display = "none";
        document.title = `Thời tiết`
        modal2.style.animation = 'zoomout 0.6s ease-in-out'
    }
}
if (new Date().getFullYear()) {
    const targetDate = new Date('Jan 1, 2025 00:00:00');
    const oneMinuteBeforeTarget = new Date(targetDate.getTime() - 60000); // 60000 milliseconds = 1 minute
    setInterval(() => {
        if (getURLParams(window.location.href)['countdown'] == '' || getURLParams(window.location.href)['countdown'] == undefined) {
            document.getElementById('countdown_title').innerHTML = `Đếm ngược đến ngày ${'01'.slice(-2)} tháng ${'01'.slice(-2)} năm ${new Date().getFullYear() + 1}:`
            document.getElementById('countdown_title1').innerHTML = `Đếm ngược đến ngày ${'01'.slice(-2)} tháng ${'01'.slice(-2)} năm ${new Date().getFullYear() + 1}:`

            countDownTo(`Jan 1, ${new Date().getFullYear() + 1}`)
            const now = new Date();
            if (
                now.getMonth() === 11 && now.getDate() === 31 && 
                now.getHours() === 23 && now.getMinutes() === 58 && now.getSeconds() === 59
            ) {
                document.getElementById('newyear_song').autoplay = true

                document.getElementById('newyear_song').play()
                document.getElementById('newyear_song').src = './Thời%20tiết/Xenogenesis%20-%20TheFatRat.mp3'
            }
            document.getElementById('time_now1').innerHTML = `Bây giờ là: `
            document.getElementById('time_count_now').innerHTML = `${days_of_the_week[now.getDay()]}, ${("0"+now.getDate()).slice(-2)}/${("0" +(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} ${("0"+now.getHours()).slice(-2)}:${("0"+now.getMinutes()).slice(-2)}:${("0"+now.getSeconds()).slice(-2)}`
            document.getElementById('utc_time').innerHTML = `Giờ UTC: ${days_of_the_week[now.getUTCDay()]}, ${("0"+now.getUTCDate()).slice(-2)}/${("0" +(now.getUTCMonth()+1)).slice(-2)}/${now.getUTCFullYear()} ${("0"+now.getUTCHours()).slice(-2)}:${("0"+now.getUTCMinutes()).slice(-2)}:${("0"+now.getUTCSeconds()).slice(-2)}<hr>`
        } else if (getURLParams(window.location.href)['countdown'] == 'tomorrow') {
            const now = new Date();
            document.getElementById('time_now1').innerHTML = `Bây giờ là: `
            document.getElementById('time_count_now').innerHTML = `${days_of_the_week[now.getDay()]}, ${("0"+now.getDate()).slice(-2)}/${("0" +(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} ${("0"+now.getHours()).slice(-2)}:${("0"+now.getMinutes()).slice(-2)}:${("0"+now.getSeconds()).slice(-2)}`
            document.getElementById('utc_time').innerHTML = `Giờ UTC: ${days_of_the_week[now.getUTCDay()]}, ${("0"+now.getUTCDate()).slice(-2)}/${("0" +(now.getUTCMonth()+1)).slice(-2)}/${now.getUTCFullYear()} ${("0"+now.getUTCHours()).slice(-2)}:${("0"+now.getUTCMinutes()).slice(-2)}:${("0"+now.getUTCSeconds()).slice(-2)}<hr>`

            document.getElementById('countdown_title').innerHTML = `Đếm ngược đến ${("0"+(now.getDate() + 1)).slice(-2)}/${("0" +(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} 00:00:00:`
            document.getElementById('countdown_title1').innerHTML = `Đếm ngược đến ${("0"+(now.getDate() + 1)).slice(-2)}/${("0" +(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} 00:00:00:`

            countDownTo(`${("0" + now.getFullYear())}-${("0" + (now.getMonth() + 1)).slice(-2)}-${("0" + (now.getDate() + 1)).slice(-2)}`)
        }
        else {
            //document.title = `Thời tiết - Đếm ngược tới ${getURLParams(window.location.href)['countdown']}`
            const now = new Date();
            document.getElementById('time_now1').innerHTML = `Bây giờ là: `
            document.getElementById('time_count_now').innerHTML = `${days_of_the_week[now.getDay()]}, ${("0"+now.getDate()).slice(-2)}/${("0" +(now.getMonth()+1)).slice(-2)}/${now.getFullYear()} ${("0"+now.getHours()).slice(-2)}:${("0"+now.getMinutes()).slice(-2)}:${("0"+now.getSeconds()).slice(-2)}`
            document.getElementById('utc_time').innerHTML = `Giờ UTC: ${days_of_the_week[now.getUTCDay()]}, ${("0"+now.getUTCDate()).slice(-2)}/${("0" +(now.getUTCMonth()+1)).slice(-2)}/${now.getUTCFullYear()} ${("0"+now.getUTCHours()).slice(-2)}:${("0"+now.getUTCMinutes()).slice(-2)}:${("0"+now.getUTCSeconds()).slice(-2)}<hr>`

            document.getElementById('countdown_title').innerHTML = `Đếm ngược đến ${getURLParams(window.location.href)['countdown']}:`
            document.getElementById('countdown_title1').innerHTML = `Đếm ngược đến ${getURLParams(window.location.href)['countdown']}:`

            countDownTo(getURLParams(window.location.href)['countdown'])
        }
    
    
        document.getElementById("hour_display").style.marginLeft = '-6.5cm'
        document.getElementById("hour_display").style.marginTop = '-1.2cm'
        document.getElementById('minutes_display').style.marginLeft = '0cm'
        document.getElementById('minutes_display').style.marginTop = '-3cm'
        document.getElementById('second_display').style.marginTop = '-3cm'
        document.getElementById('weeks_display').style.marginLeft = '6.5cm';
        document.getElementById('weeks_display').style.marginTop = '-2.25cm';
        document.getElementById('datetime-countdown').style.marginTop = '1.5cm'
        document.getElementById('month_display').style.marginLeft = '-6.5cm';
        document.getElementById('month_display').style.marginTop= '-4cm';
        
    },100);
}
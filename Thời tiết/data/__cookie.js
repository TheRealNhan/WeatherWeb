/**
 * This function will print the website's hostname, href, pathname, protocol and port (if it have)
 */
function websiteLocation() {
    console.log(`Địa chỉ: ${window.location.href},
Máy chủ: ${window.location.hostname},
Đường dẫn: ${window.location.pathname},
Protocol (http hoặc https): ${window.location.protocol},
Port: ${window.location.port}`);
}
/**
 * This function will generate the cookies of the website.
 * @param {*} length The length of the cookie (string)
 * @returns Example: `a3G7dR9P2k`
 * @example generateCookies(10); // Example: a3G7dR9P2k
 */
function generateCookies(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}
/**
 * This function will set the cookie's name, value, expire days.
 * @param {*} cname You need to enter the cookie's name.
 * @param {*} cvalue You need to enter the cookie's value.
 * @param {*} exdays You need to enter the cookie's expire days.
 */
function setCookie(cname, cvalue, exdays) {
  var expires = "";
  if (exdays) { 
    var date = new Date(); date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000)); 
    expires = "; expires=" + date.toUTCString(); 
  } 
  document.cookie = cname + "=" + (cvalue || "") + exdays + "; path=/";
  localStorage.setItem(cname,document.cookie);
}
/**
 * This function will delete the cookie by it expires to the past.
 * @param {*} cname You need to enter the cookie's name to delete.
 */
function deleteCookie(cname, cvalue) {
    const pastExpiresDay = 'Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = `${cname}=${cvalue};expires=${pastExpiresDay};path=/`;
    console.log("Đã xóa cookie thành công!");
}
/**
 * This function will get the cookie's name from the function setCookie()
 * @param {*} cname You need to type the cookie's name
 * @returns It will returns the cookie's value.
 */
  function getCookie(cname) {
    var nameEQ = cname + "="; 
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) { 
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  /**
   * This function will check the cookies if it's true.
   */
  function checkCookie(cname) {
    let user = getCookie(cname);
    //let id = localStorage.getItem('cookie')
    if (user != "") {
      alert("Chào mừng user: " + user + " đã quay trở lại!");
    } else {
        user = prompt("Vui lòng nhập tên người dùng: ","");
        if (user != "" && user != null) {
          setCookie(cname, user, 365);
          alert("Chào mừng user: " + user + " đã đến với trang web này!");
        }
     }
  }
  var generated = generateCookies(6);
  setCookie("string",generated,7);
  getCookie("string");
  //var generated = generateCookies(6);
  //setCookie("string",generated,(365));
document.getElementsByTagName('body').onload = websiteLocation();
document.getElementsByTagName('html').onload = function () {checkCookie("username"); 
  //checkCookie("string")
  var generated = generateCookies(6);
  setCookie("string",generated,7);
  getCookie("string");
  checkCookie("string");
}
document.getElementsByTagName('head').onload = function () {Notification.requestPermission();
  if (Notification.permission === 'denied' || Notification.permission === 'default') {
    Notification.permission = 'granted';
  }
};
//document.getElementsByTagName('body').onload = checkCookie();
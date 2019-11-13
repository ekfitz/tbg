window.addEventListener("resize", setMobile);

var hugePic = document.getElementById("hugePic");
hugePic.src = "images/logoPNG.png";

var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");

var ntxt1 = document.getElementById("ntxt1");
var ntxt2 = document.getElementById("ntxt2");
var ntxt3 = document.getElementById("ntxt3");
var ntxt4 = document.getElementById("ntxt4");

var hmenu = document.getElementById("hmenu");
var hline1 = document.getElementById("hline1");
var hline2 = document.getElementById("hline2");
var hline3 = document.getElementById("hline3");

ntxt1.style.color = "white";

ntxt2.style.color = "white";
ntxt3.style.color = "white";

nav1.onmouseover = highNav;
nav1.onmouseout = regNav;

nav4.onmouseover = highMenu;
nav4.onmouseout = regMenu;
nav4.onclick = showMenu;

ntxt1.innerHTML = "ABOUT";
ntxt2.innerHTML = "CALENDAR";
ntxt3.innerHTML = "CONTACT";

function highNav() {
  ntxt1.style.color = "#BD52DB";
}

function regNav() {
  ntxt1.style.color = "white";
}
//function regNav(x) {
//  x.style.opacity = "0.6";
//  x.style.color = "white";
//}

function highMenu() {
  hline1.style.backgroundColor = "#BD52DB";
  hline2.style.backgroundColor = "#BD52DB";
  hline3.style.backgroundColor = "#BD52DB";
}

function regMenu() {
  hline1.style.backgroundColor = "white";
  hline2.style.backgroundColor = "white";
  hline3.style.backgroundColor = "white";
}

function showMenu() {
  if (ntxt1.style.display == "none") {
    $(".navtext").css('display', 'block');
  } else {
    $(".navtext").css('display', 'none');
  }
}

function setMobile() {
  //hide menu
  $(".navtext").css('display', 'none');


  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  if (w > 800) {
    // set desktop
    $(".navbox").css('width', '10%');
    nav1.style.left = "50%";
    nav2.style.left = "62.5%";
    nav3.style.left = "75%";
    nav4.style.left = "90%";
  } else {
    // set mobile
    $(".navbox").css('width', '25%');
    nav1.style.left = "0.5%";
    nav2.style.left = "25.5%";
    nav3.style.left = "50.5%";
    nav4.style.left = "75.5%";
  }
}

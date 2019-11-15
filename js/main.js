document.body.onload = setMobile;
window.addEventListener("resize", setMobile);

var frame = document.getElementById("frame");
var logo = document.getElementById("logo");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");

var nt1 = document.getElementById("nt1");
var nt2 = document.getElementById("nt2");
var nt3 = document.getElementById("nt3");

var titleBox1 = document.getElementById("titleBox1");
var titleBox2 = document.getElementById("titleBox2");

var tt1 = document.getElementById("tt1");

var button = document.getElementById("cta");
var btxt1 = document.getElementById("btxt1");

frame.className = "inframe";

logo.className = "toplogo";
logo.innerHTML = "t b g" ;


nav1.className = "navbox";
nav1.style.top = "3%";
nav1.style.left = "74%";
nav1.style.opacity = "0.7";

nav2.className = "navbox";
nav2.style.top = "3%";
nav2.style.left = "81%";
nav2.style.opacity = "0.7";

nav3.className = "navbox";
nav3.style.top = "3%";
nav3.style.left = "88%";
nav3.style.opacity = "0.7";


nt1.innerHTML = "Press";
nt2.innerHTML = "Design";
nt3.innerHTML = "Studio";

titleBox1.className = "pagetextbig";
titleBox2.className = "pagetextsmall";

tt1.className = "titletext";
tt2.className = "titletext";
tt1.innerHTML = "Something Motivational Right Here";
tt2.innerHTML = "Maybe some smaller text here to describe what happens when you push the button. It can be in a different font";

button.className = "ctabutton";
btxt1.innerHTML = "Start Today";

function setMobile() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  nt3.innerHTML = w;

  if (w < 850) {
    frame.className = "inframe-m";
    logo.className = "toplogo-m";
    nav1.className = "navbox-m";
    nav2.className = "navbox-m";
    nav3.className = "navbox-m";

    nav1.style.left = "25%";
    nav2.style.left = "45%";
    nav3.style.left = "65%";

    titleBox1.className = "pagetextbig-m";
    titleBox2.className = "pagetextsmall-m";
    tt1.className = "titletext-m";
    tt2.className = "titletext-m";
    button.className = "ctabutton-m";

  } else {
    frame.className = "inframe";
    logo.className = "toplogo";
    nav1.className = "navbox";
    nav2.className = "navbox";
    nav3.className = "navbox";

    nav1.style.left = "74%";
    nav2.style.left = "81%";
    nav3.style.left = "88%";

    titleBox1.className = "pagetextbig";
    titleBox2.className = "pagetextsmall";
    tt1.className = "titletext";
    tt2.className = "titletext";
    button.className = "ctabutton";
  }
    if (w > 1260) {
      titleBox1.className = "pagetextbigHUGE";
      titleBox2.className = "pagetextsmallHUGE";
  }
}

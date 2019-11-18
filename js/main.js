document.body.onload = setMobile;
window.addEventListener("resize", setMobile);
//window.addEventListener("scroll", showNext);

var h = window.innerHeight;
var menu = document.getElementById("menu");
var gui = document.getElementById("gui");
var logo = document.getElementById("logo");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var button1 = document.getElementById("button1");
var page2 = document.getElementById("page2");
var t3 = document.getElementById("t3");
var pro1 = document.getElementById("pro1");
var pro2 = document.getElementById("pro2");
var pro3 = document.getElementById("pro3");
var exp1 = document.getElementById("exp1");
var exp2 = document.getElementById("exp2");
var exp3 = document.getElementById("exp3");

nav1.style.left = "70%";
nav2.style.left = "80%";
nav3.style.left = "90%";

nav1.style.opacity = "0.7";
nav2.style.opacity = "0.7";
nav3.style.opacity = "0.7";


logo.innerHTML = "t b g";
nav1.innerHTML = "Press";
nav2.innerHTML = "Studio";
nav3.innerHTML = "About";
t1.innerHTML = "Something Motivational Right Here";
t2.innerHTML = "Maybe some smaller text here to describe what happens when you push the button. It can be in a different font";
button1.innerHTML = "Start Today";

menu.onmouseover = highNav;
menu.onmouseout = regNav;
nav1.onmouseover = highNav;
nav1.onmouseout = regNav;
nav2.onmouseover = highNav;
nav2.onmouseout = regNav;
nav3.onmouseover = highNav;
nav3.onmouseout = regNav;

button1.onmouseover = highButton;
button1.onmouseout = regButton;

page2.style.top = "100%";
//page2.style.display = "none";

t3.innerHTML = "Impactful Statement On Importance Of Customer Experience";
prot1.innerHTML = "Research";
prot2.innerHTML = "Design";
prot3.innerHTML = "Create";
exp1.innerHTML = "Step One";
exp2.innerHTML = "Step Two";
exp3.innerHTML = "Step Three";
function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    gui.className = "Mgui";
    logo.className = "Mlogo";
    nav1.className = "Mnav";
    nav2.className = "Mnav";
    nav3.className = "Mnav";
    t1.className = "Mt1";
    t2.className = "Mt2";
    button1.className = "Mbutton";
    page2.className = "Mpage2";
    t3.className = "Mt3";
    pro1.className = "Mprocess";
  } else {
    gui.className = "Dgui";
    logo.className = "Dlogo";
    nav1.className = "Dnav";
    nav2.className = "Dnav";
    nav3.className = "Dnav";
    t1.className = "Dt1";
    t2.className = "Dt2";
    button1.className = "Dbutton";
    page2.className = "Dpage2";
    t3.className = "Dt3";
    pro1.className = "Dprocess";
  }
}

//function showNext() {
//  page2.style.display = "block";
//}

function highNav() {
  this.style.opacity = "1";
  this.style.color = "#FF331F";
}

function regNav() {
  this.style.opacity = "0.7";
  this.style.color = "black";
}

function highButton() {
  this.style.backgroundColor = "#FF331F";
  this.style.color = "white";
  this.style.opacity = "0.8";
}

function regButton() {
  this.style.backgroundColor = "transparent";
  this.style.color = "#FF331F";
  this.style.opacity = "0.5";
}

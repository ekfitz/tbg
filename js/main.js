document.body.onload = setMobile;
window.addEventListener("resize", setMobile);
window.addEventListener("scroll", showNext);
window.addEventListener("wheel", showNext);
window.addEventListener("wheel", bounceBall);

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
var page3 = document.getElementById("page3");
var logo2 = document.getElementById("logo2");
var t4 = document.getElementById("t4");
var li1 = document.getElementById("li1");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var li6 = document.getElementById("li6");
var li7 = document.getElementById("li7");
var li8 = document.getElementById("li8");
var t5 = document.getElementById("t5");
var cText = document.getElementById("cText");

nav1.style.left = "78%";
nav2.style.left = "85%";
nav3.style.left = "92%";

nav1.style.opacity = "0.7";
nav2.style.opacity = "0.7";
nav3.style.opacity = "0.7";

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
page3.style.top = "200%";

li1.info = "Describe how awesome you are at branding";
li2.info = "Describe your abilities to manipulate the media";
li3.info = "Describe your expertise in SEO and Artificial Intelligence";
li4.info = "Describe your process for creating targeted adds";
li5.info = "Describe your connections and resources in HR";
li6.info = "Describe your connections or abilities to excell in Graphic Design";
li7.info = "Describe the importance of market research and how your approach is best";
li8.info = "Describe how you are going to boost and enhance all digital presence";

li1.onmouseover = highList;
li1.onmouseout = regList;
li2.onmouseover = highList;
li2.onmouseout = regList;
li3.onmouseover = highList;
li3.onmouseout = regList;
li4.onmouseover = highList;
li4.onmouseout = regList;
li5.onmouseover = highList;
li5.onmouseout = regList;
li6.onmouseover = highList;
li6.onmouseout = regList;
li7.onmouseover = highList;
li7.onmouseout = regList;
li8.onmouseover = highList;
li8.onmouseout = regList;

li1.onclick = descRibe;
li2.onclick = descRibe;
li3.onclick = descRibe;
li4.onclick = descRibe;
li5.onclick = descRibe;
li6.onclick = descRibe;
li7.onclick = descRibe;
li8.onclick = descRibe;


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
    pro2.className = "Mprocess";
    pro3.className = "Mprocess";
    exp1.className = "Mexplain";
    exp2.className = "Mexplain";
    exp3.className = "Mexplain";

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
    pro2.className = "Dprocess";
    pro3.className = "Dprocess";
    exp1.className = "explain";
    exp2.className = "explain";
    exp3.className = "explain";
  }

// Adding the styling code here so innerHTML
// doesn't load before class name
  logo.innerHTML = "t b g";
  nav1.innerHTML = "Press";
  nav2.innerHTML = "Studio";
  nav3.innerHTML = "About";
  t1.innerHTML = "Something Motivational Right Here";
  t2.innerHTML = "Maybe some smaller text here to describe what happens when you push the button. It can be in a different font";
  button1.innerHTML = "Start Today";
  document.body.style.overflow = "hidden";
  t3.innerHTML = "Impactful Statement On Importance Of Customer Experience";
  prot1.innerHTML = "Research";
  prot2.innerHTML = "Design";
  prot3.innerHTML = "Create";
  exp1.innerHTML = "Step One";
  exp2.innerHTML = "Step Two";
  exp3.innerHTML = "Step Three";
  logo2.innerHTML = "t b g";
  t4.innerHTML = "Full-Service Consultation";
  li1.innerHTML = "Branding";
  li2.innerHTML = "Media";
  li3.innerHTML = "SEO and AI";
  li4.innerHTML = "Add Creation";
  li5.innerHTML = "HR Marketing";
  li6.innerHTML = "Graphic Design";
  li7.innerHTML = "Marketing Research";
  li8.innerHTML = "Digital";
  cText.innerHTML = "2019 The Baines Group, LLC";
}

function bounceBall() {
    pro1.style.animationName = "bounce";
    pro1.style.animationDuration = "1.75s";
    pro1.style.animationDelay = "0.5s";
    pro1.style.animationTimingFunction = "ease-in-out";
    pro2.style.animationName = "bounceC";
    pro2.style.animationDuration = "1.75s";
    pro2.style.animationDelay = "0.75s";
    pro2.style.animationTimingFunction = "ease-in-out";

    pro3.style.animationName = "bounce";
    pro3.style.animationDuration = "1.75s";
    pro3.style.animationDelay = "1s";
    pro3.style.animationTimingFunction = "ease-in-out";
}

function showNext() {
  document.body.style.overflowY = "visible";
}

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

function highList() {
  this.style.backgroundColor = "white";
  this.style.color = "black";
}

function regList() {
  this.style.backgroundColor = "transparent";
  this.style.color = "white";
}

function descRibe() {
  t5.innerHTML = this.info;
}

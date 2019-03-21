const body = document.querySelector("body");
var navHeight = 85;
var navTop = window.innerHeight;

function stickyNavigation() {
  if(window.pageYOffset >= navTop - navHeight) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}

function chartAnim() {
  const skillsTop = document.getElementById("skills").offsetTop - 200;
  if(window.pageYOffset >= skillsTop) {
    body.classList.add("loaded");
  } else {
    body.classList.remove("loaded");
  }
}

window.addEventListener("resize", () => { 
  navTop = window.innerHeight;
});

window.addEventListener("scroll", () => {
  stickyNavigation();
  chartAnim();
});

var filter = document.getElementById("filters").children;
var trvGal = document.getElementById("travelGallery");
var prjGal = document.getElementById("projectGallery");

filter[0].onclick = function() {
  trvGal.classList.add("hide");
  prjGal.classList.remove("hide");
  return false;
}
filter[1].onclick = function() {
  trvGal.classList.remove("hide");
  prjGal.classList.add("hide");
  return false;
}
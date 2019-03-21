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
  const skillsTop = document.getElementById("skills").offsetTop - 300;
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
const body = document.querySelector("body");
var navHeight = 85;
var navTop = window.innerHeight;

window.addEventListener("resize", () => { 
  navTop = window.innerHeight;
});

window.addEventListener("scroll", () => {
  stickyNavigation();
});

function stickyNavigation() {
  if(window.pageYOffset >= navTop - navHeight) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}
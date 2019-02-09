// navbar start
var menu = document.querySelector("svg");
var body = document.querySelector("body");

menu.addEventListener("click", morph);
body.addEventListener("click", hide_sidebar);

var wrapper = document.querySelector(".wrapper");

function morph(e) {
  e.stopPropagation();
  menu.classList.toggle("open");
  wrapper.classList.toggle("sidebar_open");
}

// eslint-disable-next-line camelcase
function hide_sidebar() {
  wrapper.classList.remove("sidebar_open");
  menu.classList.remove("open");
}
// navbar end

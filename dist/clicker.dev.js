"use strict";

var active = document.getElementsByClassName("active");
var show = document.getElementsByClassName("show");

function menuClick(e) {
  while (active.length) {
    active[0].classList.remove("active");
    show[0].classList.remove("show");
  }
}

saber.addEventListener("click", menuClick);
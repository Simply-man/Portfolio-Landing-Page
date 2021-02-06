"use strict";

var burger = document.getElementById("burger");
var saber = document.getElementById("saber");
var nav = document.querySelector(".mobile");
var body = document.querySelector("body");
var active = document.getElementsByClassName("active");
var show = document.getElementsByClassName("show");

function handleClick(e) {
  burger.classList.toggle("active");
  nav.classList.toggle("show");
}

burger.addEventListener("click", handleClick);
saber.addEventListener("click", handleClick);
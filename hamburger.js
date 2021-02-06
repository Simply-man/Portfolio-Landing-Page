const burger = document.getElementById("burger");
const saber = document.getElementById("saber");
const nav = document.querySelector(".mobile");
const body = document.querySelector("body");
const active = document.getElementsByClassName("active");
const show = document.getElementsByClassName("show");



function handleClick(e) {
  burger.classList.toggle("active");
  nav.classList.toggle("show");
}


burger.addEventListener("click", handleClick);
saber.addEventListener("click", handleClick);

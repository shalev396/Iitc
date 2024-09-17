"use strict";
document.getElementById("content").style.backgroundColor = "lightblue";
let pList = document.querySelectorAll(".text");
for (let i = 0; i < 3; i++) {
  pList[i].style.color = "red";
}
let liList = document.querySelectorAll("li");
for (let i = 0; i < 5; i++) {
  console.log(liList[i].textContent);
}
document.addEventListener("click", yellowButton);
function yellowButton() {
  document.querySelector("button").style.backgroundColor = "yellow";
}

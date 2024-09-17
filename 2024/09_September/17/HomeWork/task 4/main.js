"use strict";
let size = 100;
const styleBox = document.getElementById("box");
styleBox.style.width = `${size}px`;
styleBox.style.height = `${size}px`;
styleBox.style.border = "5px solid";
styleBox.addEventListener("click", function () {
  doublesize();
});
function doublesize() {
  if (size * 2 < 300) {
    size = size * 2;
  }
  styleBox.style.width = `${size}px`;
  styleBox.style.height = `${size}px`;

  styleBox.style.borderColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255
  )}, ${getRandomInt(0, 255)})`;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

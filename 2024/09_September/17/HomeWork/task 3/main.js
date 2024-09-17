"use strict";
const nameInput = document.getElementById("nameinput");
const greeting = document.getElementById("greeting");
const clearBtn = document.getElementById("clear");
nameInput.addEventListener("input", function () {
  update();
});
function update() {
  greeting.textContent = `hello ${nameInput.value.trim()}!`;
}
clearBtn.addEventListener("click", function () {
  clear();
});
function clear() {
  nameInput.value = "";
  greeting.textContent = "";
}

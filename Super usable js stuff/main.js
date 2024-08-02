"use strict";
//binary convertor
let name = "shalev ben moshe";
let binaryName = textToBinary(name);
function binaryToText(str) {
  let binaryArray = str.split(" ");
  let text = "";
  for (let i = 0; i < binaryArray.length; i++) {
    let decimal = parseInt(binaryArray[i], 2);
    let character = String.fromCharCode(decimal);
    text += character;
  }
  return text;
}
function textToBinary(string) {
  return string
    .split("")
    .map(function (char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
}
// console.log(binaryName);
// console.log(binaryToText(binaryName));
// is a number
function isNum(num) {
  do num = prompt("1-10");
  while (isNaN(num) || num.trim() == "");
}
// isNum("")

//
let n = 10;
let table = Array.from({ length: n }, () => Array(n).fill(0));

//Fill
for (let row = 0; row < n; row++) {
  for (let column = 0; column < n; column++) {
    table[row][column] = (row + 1) * (column + 1);
  }
}

//Display
for (let row = 0; row < n; row++) {
  let rowStr = "";
  for (let column = 0; column < n; column++) {
    rowStr += " " + table[row][column];
  }
  // console.log(rowStr);
}
//get random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//isPrime
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
// console.log(isPrime(num));
//8.letter counter
console.log("task 8 all char");
function frequency1(str) {
  let fullabc = "";
  let text = "";
  for (let j = 0; j < 65535; j++) {
    fullabc += String.fromCharCode(j) + ""; //0-65535
  }
  console.log(fullabc);
  let abcArray = fullabc.split("");
  for (let i = 0; i < abcArray.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (abcArray[i] === str[j]) {
        count++;
      }
    }
    if (count !== 0) {
      text += `"${abcArray[i]}":${count} `;
    }
  }

  console.log(text);
}
frequency1(prompt("say something"));
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
//9. object split and sort to new object
let employees = [
  { name: "Shelev Ben Moshe", department: "Development", yearOfExp: 5 },
  { name: "Jone Doe", department: "Engineering", yearOfExp: 5 },
  { name: "Jane Smith", department: "Development", yearOfExp: 3 },
  { name: "Lucky Brown", department: "Engineering", yearOfExp: 3 },
  { name: "Mike Davis", department: "Development", yearOfExp: 5 },
];
console.log(groupBy(employees, "department"));
console.log(groupBy(employees, "yearOfExp"));
function groupBy(objArray, key) {
  let sortedObj = {};
  for (let i = 0; i < objArray.length; i++) {
    if (sortedObj[objArray[i][key]] !== undefined)
      sortedObj[objArray[i][key]].push(objArray[i]);
    else sortedObj[objArray[i][key]] = [objArray[i]];
  }
  return sortedObj;
}
//10.create copy of object
let person1 = { x: 1 };
let person3 = { ...person1 };
person3.x = 3;
console.log(person1);
console.log(person3);
//16 check if Array
let x = [];
let y = {};
console.log("x");
console.log(x instanceof Array);
console.log(Array.isArray(x));
console.log("y");
console.log(y instanceof Array);
console.log(Array.isArray(y));
//17
function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

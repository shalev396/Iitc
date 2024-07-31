"use strict";
//1.
function charRepeater(char, num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
    str = "";
  }
}
charRepeater("*", 5);
//1.1
function charRepeater2(char, num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    str += "\n";
  }
  console.log(str);
}
charRepeater2("*", 5);
//2.
function multiplicationBoard(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num; j++) {
      str += " " + i * j;
    }
    console.log(str);
  }
}
multiplicationBoard(10);
// multiplicationBoard(Math.pow(2, 31)); my impulsive thoughts won the battle and crashed my computer :(
//3.
function search2DArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (target === arr[i][j]) {
        console.log(`i:${i} j:${j}`);
      }
    }
  }
}
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
search2DArray(array2D, 6);
//4.
function countVowels(str) {
  let vowelcount = 0;
  let constantcount = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelcount++;
    } else if (str[i] !== " ") {
      constantcount++;
    }
  }
  console.log(`vowels :${vowelcount}\nconstants:${constantcount}`);
}
let vowels = "aeiouAEIOU";
countVowels(vowels);

//5.i didnt know how to use nested loops here
function stringRevers(str) {
  let strnew = "";
  console.log(str);
  for (let i = str.length - 1; i >= 0; i--) {
    strnew += str[i];
  }
  console.log(strnew);
}
stringRevers("hello world");
//6.
function numberPyramid(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i.toString();
    }
    console.log(row);
  }
}
numberPyramid(5);
//7.
function sum2DArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  console.log(sum);
}
// let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
sum2DArray(array2D);
//8. bonos, arry for abc and arrsay for count
function frequency(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (alphabet[i] === str[j]) {
        count++;
      }
    }
    if (count !== 0) {
      console.log(`${alphabet[i]}:${count}`);
    }
  }
}
frequency("hello");
//9.
function merg2DArray(arr) {
  let count = 0;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      count++;
    }
  }
  let place = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      array[place] = arr[i][j];
      place++;
    }
  }
  console.log(array);
}
// let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
merg2DArray(array2D);
//10.used google
function transposeMatrix(arr2d) {
  let arr = [];
  for (let i = 0; i < arr2d[0].length; i++) {
    arr[i] = [];
    for (let j = 0; j < arr2d.length; j++) {
      arr[i][j] = arr2d[j][i];
    }
  }
  console.log(arr);
}
console.log(array2D);
transposeMatrix(array2D);
//11.form yesterday homework 100+array
function checkPalindrome(word) {
  let word2 = word.split("").reverse().join("");
  if (word === word2) return true;
  return false;
}
checkPalindrome("radar");
//12.
function commonelements(arr) {
  let commons = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && !commons.includes(arr[i]) && i !== j) {
        commons.push(arr[i]);
      }
    }
  }

  console.log(commons);
}
let comoarr = [1, 2, 3, 4, 2, 3, 4, 5, 6];
commonelements(comoarr);
//13.
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
function hasPrime(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      array.push(i);
    }
  }
  console.log(array);
}
hasPrime(2, 99);
//14
function sortBySum(array2D) {
  for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D.length - 1; j++) {
      if (sumArray(array2D[j]) > sumArray(array2D[j + 1])) {
        let tempArr = array2D[j];
        array2D[j] = array2D[j + 1];
        array2D[j + 1] = tempArr;
      }
    }
  }
  console.log(array2D);
}
function sumArray(array) {
  let sum = 0;
  if (array === undefined) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let arr = [
  [3, 1, 2], //6
  [1, 4, 5], //10
  [2, 3, 0], //6
];
console.log(arr);
sortBySum(arr);

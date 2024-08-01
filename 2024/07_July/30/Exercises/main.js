"use strict";
//1.counts the amount of a character in array of Strings
console.log("Task 1");
function countCharInArray(names, char) {
  let count = 0;
  for (let i = 0; i < names.length; i++)
    for (let j = 0; j < names[i].length; j++) if (names[i][j] === char) count++;
  return count;
}
let names = ["shalev", "ben", "moshe"];
let char = "e";
console.log(countCharInArray(names, char));
//2. print a repeated char in pyramid shape
console.log("Task 2");
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
//2. print a repeated char in pyramid shape
console.log("Task 2.2");
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
//3.print multiplication board of num
console.log("Task 3");
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
//3.1 print multiplication board of num in a table
console.log("Task 3.1");
function multiplicationBoardTabel(num) {
  let arr1D = [];
  let arr2D = [];
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      arr2D.push(i * j);
    }
    arr1D.push(arr2D);
    arr2D = [];
  }
  console.table(arr1D);
}
multiplicationBoardTabel(10);
// multiplicationBoard(Math.pow(2, 31)); my impulsive thoughts won the battle and crashed my computer :(
//4. searching a value in 2d array and return its location
console.log("Task 4");
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

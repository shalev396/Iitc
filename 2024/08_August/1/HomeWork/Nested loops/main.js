"use strict";
//1.
function exercise1() {
  let str = " ";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
//2.
function exercise2() {
  let str = "";
  let count = 0;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      str += count;
      count++;
    }
    str += "\n";
  }
  console.log(str);
}

//3.
function exercise3() {
  for (let i = 0; i < str; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    console.log(row);
  }
}

//4.
function exercise4() {
  for (let i = 0; i < 3; i++) {
    let str = " ";
    for (let j = 0; j < 3; j++) {
      str = str + (i + j) + " ";
    }
    console.log(str);
  }
}
//5.
function exercise5() {
  for (let i = 1; i < 4; i++) {
    let str = " ";
    for (let j = 1; j <= 3; j++) {
      str = str + i * j + " ";
    }
    console.log(str);
  }
}
//6.
function exercise6() {
  for (let i = 1; i < 4; i++) {
    let str = " ";
    for (let j = 1; j < 4; j++) {
      if (i === 1 || i === 3 || j === 1 || j === 3) {
        str = str + "* ";
      } else {
        str = str + "  ";
      }
    }
    console.log(str);
  }
}
function exercise7() {
  let str = "";
  let count = 1;
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      str += count;
      count++;
    }
    str += "\n";
  }
  console.log(str);
}
function exercise8() {
  let str = "";
  let count = 1;
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (count % 2 === 0) str += count;
      count++;
    }
    str += "\n";
  }
  console.log(str);
}
function exercise9() {
  let count = 1;
  for (let i = 0; i < str; i++) {
    let str = " ";
    for (let j = 1; j <= i; j++) {
      str += count;
      count++;
    }
    console.log(row);
  }
}

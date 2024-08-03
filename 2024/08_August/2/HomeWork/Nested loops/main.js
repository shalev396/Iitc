"use strict";
console.log("exercise 1");
exercise1();
console.log("exercise 2");
exercise2();
console.log("exercise 3");
exercise3();
console.log("exercise 4");
exercise4();
console.log("exercise 5");
exercise5();
console.log("exercise 6");
exercise6();
console.log("exercise 7");
exercise7();
console.log("exercise 8");
exercise8();
console.log("exercise 9");
exercise9();
console.log("exercise 10");
exercise10();
console.log("exercise 11");
exercise11();
console.log("exercise 12");
exercise12();
console.log("exercise 13");
exercise13();
console.log("exercise 14");
exercise14();
console.log("exercise 15");
exercise15();
console.log("exercise 16");
exercise16();
console.log("exercise 17");
exercise17();
console.log("exercise 18");
exercise18();
console.log("exercise 19");
exercise19();
console.log("exercise 20");
exercise20();
console.log("exercise 22");

//1.
function exercise1() {
  let str = "";
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
  let str;
  for (let i = 0; i < 3; i++) {
    str = " ";
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
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
//7.
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
//8. need fix/////////////////////
function exercise8() {
  let str = "";
  let count = 1;
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (count % 2 === 0) str += " " + count;
      count++;
    }
    str += "\n";
  }
  console.log(str);
}
//9.
function exercise9() {
  let count = 1;
  let str = "";
  for (let i = 0; i < 3; i++) {
    str = " ";
    for (let j = 0; j <= i; j++) {
      str += count;
      count++;
    }
    console.log(str);
  }
}
//10.
function exercise10() {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
      str += (count % 2) + " ";
      count++;
    }
    console.log(str);
  }
}
//11.
function exercise11() {
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
      str += i;
    }
    console.log(str);
  }
}

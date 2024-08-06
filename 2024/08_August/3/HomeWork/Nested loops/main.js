"use strict";
// console.log("exercise 1");
// exercise1();
// console.log("exercise 2");
// exercise2();
// console.log("exercise 3");
// exercise3();
// console.log("exercise 4");
// exercise4();
// console.log("exercise 5");
// exercise5();
// console.log("exercise 6");
// exercise6();
// console.log("exercise 7");
// exercise7();
// console.log("exercise 8");
// exercise8();
// console.log("exercise 9");
// exercise9();
// console.log("exercise 10");
// exercise10();
// console.log("exercise 11");
// exercise11();
// console.log("exercise 12");
// exercise12();
// console.log("exercise 13");
// exercise13();
// console.log("exercise 14");
// exercise14();
// console.log("exercise 15");
// exercise15();
// console.log("exercise 16");
// exercise16();
// console.log("exercise 17");
// exercise17();
// console.log("exercise 18");
// exercise18();
// console.log("exercise 19");
// exercise19();
// console.log("exercise 20");
// exercise20();
console.log("exercise 21");
exercise21();
console.log("exercise 22");
exercise22();
console.log("exercise 23");
exercise23();
console.log("exercise 24");
exercise24();
console.log("exercise 25");
exercise25();
console.log("exercise 26");
exercise26();
console.log("exercise 27");
exercise27();
console.log("exercise 28");
exercise28();
console.log("exercise 29");
exercise29();
console.log("exercise 30");
exercise30();
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
  let str;
  for (let i = 0; i < 3; i++) {
    str = "";
    for (let j = 0; j < 3; j++) {
      str += i;
    }
    console.log(str);
  }
}
//12.
function exercise12() {
  let str;
  for (let i = 0; i < 3; i++) {
    str = "";
    for (let j = 0; j < 3; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
function exercise13() {
  let str = "";
  for (let i = 0; i < 4; i++) {
    str = "";
    for (let j = 0; j < 4; j++) {
      if ((i + j) % 2 === 0) str += "O";
      else str += "X";
    }
    console.log(str);
  }
}
function exercise14() {
  let count = 1;
  let str;
  for (let i = 1; i <= 4; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str += count.toString();
      count += 2;
    }
    console.log(str);
  }
}
function exercise15() {
  let str;
  for (let i = 0; i < 3; i++) {
    str = "";
    for (let j = 0; j < 3; j++) {
      str += Math.abs(i - j).toString();
    }
    console.log(str);
  }
}
function exercise16() {
  let str;
  for (let i = 1; i <= 4; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === 4) {
        //used it from the answers
        str += "* ";
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}
function exercise17() {
  let str;
  for (let i = 0; i < 4; i++) {
    str = "";
    for (let j = 0; j < 4; j++) {
      str += Math.min(i, j).toString();
    }
    console.log(str);
  }
}
function exercise18() {
  let str;
  for (let i = 0; i < 4; i++) {
    str = "";
    for (let j = 0; j < 4; j++) {
      str += Math.max(i, j).toString();
    }
    console.log(str);
  }
}
function exercise19() {
  //used google and answers
  let str;
  let char = 65;
  for (let i = 1; i <= 4; i++) {
    str = "";
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(char);
      char++;
    }
    console.log(str);
  }
}
function exercise20() {
  let str;
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    let str = "";
    for (let j = 0; j < 3; j++) {
      sum = 0;
      for (let k = 1; k <= (i + 1) * (j + 1); k++) {
        //used answers
        sum += k;
      }
      (str += sum), toString();
    }
    console.log(str);
  }
}
function exercise21() {
  const size = 4;
  const rowArr = [];
  const columArr = [];
  for (let i = 0; i < size; i++) {
    for (let i = 0; i < size; i++) {
      if (i === 0 || i === size) {
      }
    }
  }
}
// 1/2/3/4
// 12/13/14/5
// 11/16/15/6
// 10/9/8/7

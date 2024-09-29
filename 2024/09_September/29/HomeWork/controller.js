//here only Handles user actions filtering
//"Handles user actions like adding, editing, deleting, and filtering employees.""
//imports
import { utils } from "./utils.js";
import { service } from "./service.js";
//variables
const employsKey = `employs`;
function doFunc(functionName) {
  return eval(functionName + "()");
}
//1-5 ForEach
function solution1() {
  let log = "";
  const array = [1, 2, 3, 4, 5];
  array.forEach(function (item) {
    log += item;
  });
  return log;
}
function solution2() {
  let log = "";
  let sum = 0;
  const array = [1, 2, 3, 4, 5];
  array.forEach(function (item, index) {
    if (index === 0) sum = item;
    sum *= item;
  });
  log = sum;
  return log;
}
function solution3() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  array.forEach(function (item, index) {
    array[index] = Math.pow(item, 2);
  });
  log = array.toString();
  return log;
}
function solution4() {
  let log = "";
  let sum = 0;
  const array = [1, 2, 3, 4, 5];
  array.forEach(function (item) {
    sum += item;
  });
  log = sum;
  return log;
}
function solution5() {
  let log = "";

  const array = ["Hello", " ", "World", "!"];
  array.forEach(function (item) {
    log += item;
  });

  return log;
}
//6-10 Map
function solution6() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  const newArray = array.map(myFunction);

  function myFunction(num) {
    return num * 10;
  }
  log = newArray;

  return log;
}
function solution7() {
  let log = "";

  const array = ["תפוח", "בננה", "דובדבן"];
  const newArray = array.map(myFunction);

  function myFunction(str) {
    return str.length;
  }
  log = newArray;

  return log;
}
function solution8() {
  let log = "";

  const array = [1, 4, 9, 16, 25];
  const newArray = array.map(myFunction);

  function myFunction(num) {
    return Math.sqrt(num);
  }
  log = newArray;

  return log;
}
function solution9() {
  let log = "";

  const array = [`Hello`, "world"];
  const newArray = array.map(myFunction);

  function myFunction(str) {
    return str.toUpperCase();
  }
  log = newArray;

  return log;
}
function solution10() {
  let log = "";

  const array = [true, false, true];
  const newArray = array.map(myFunction);

  function myFunction(bool) {
    return !bool;
  }
  log = newArray;

  return log;
}
//11-15 Filter
function solution11() {
  let log = "";

  const array = [1, 2, 3, 4, 5, 6];
  const newArray = array.filter(myFunction);

  function myFunction(num) {
    return num % 2 === 0;
  }
  log = newArray;

  return log;
}
function solution12() {
  let log = "";

  const array = ["תפוח", "בננה", "דובדבן", "תמר", "אלדרברי"];
  const newArray = array.filter(myFunction);

  function myFunction(str) {
    return str.length > 5;
  }
  log = newArray;

  return log;
}
function solution13() {
  let log = "";

  const array = [5, 10, 15, 20, 25];
  const newArray = array.filter(myFunction);

  function myFunction(num) {
    return num > 10;
  }
  log = newArray;

  return log;
}
function solution14() {
  let log = "";

  const array = ["תפוח", "בננה", "תפוז", "דובדבן"];
  const newArray = array.filter(myFunction);

  function myFunction(str) {
    return str[0] === `ת`;
  }
  log = newArray;

  return log;
}
function solution15() {
  let log = "";

  const array = [1, 2, 3, 4, 5, 6];
  const newArray = array.filter(myFunction);

  function myFunction(str, index) {
    return index % 2 === 0;
  }
  log = newArray;

  return log;
}
//16-20 Reduce
function solution16() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  const newArray = array.reduce(myFunction);

  function myFunction(total, num) {
    return total + num;
  }
  log = newArray;

  return log;
}
function solution17() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  const newArray = array.reduce(myFunction);

  function myFunction(total, num) {
    return total * num;
  }
  log = newArray;

  return log;
}
function solution18() {
  let log = "";

  const array = [10, 5, 15, 20, 25];
  const newArray = array.reduce(myFunction);

  function myFunction(prev, cur) {
    //used stack overflow
    return Math.min(prev, cur);
  }
  log = newArray;

  return log;
}
function solution19() {
  let log = "";

  const array = ["שלום", " ", "עולם", "!"];
  const newArray = array.reduce(myFunction);

  function myFunction(prev, cur) {
    return (prev += cur);
  }
  log = newArray;

  return log;
}
function solution20() {
  let log = "";

  const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const countObject = array.reduce(myFunction, {});

  function myFunction(prev, num) {
    prev[num] = (prev[num] || 0) + 1;
    return prev;
  }
  log = JSON.stringify(countObject);

  return log;
}
//21-25 Some and Every
function solution21() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  log = array.some(myFunction);

  function myFunction(num) {
    return num > 3;
  }
  return log;
}
function solution22() {
  let log = "";

  const array = [2, 4, 6, 8, 10];
  log = array.every(myFunction);

  function myFunction(num) {
    return num % 2 === 0;
  }
  return log;
}
function solution23() {
  let log = "";

  const array = ["תפוח", "בננה", "דובדבן"];
  log = array.some(myFunction);

  function myFunction(str) {
    return str.length > 6;
  }
  return log;
}
function solution24() {
  let log = "";
  //used google to understand consonants
  const array = ["Cat", "Dog", "Elephant"];
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  const startsWithConsonant = array.every((animal) =>
    consonants.includes(animal[0])
  );

  log = startsWithConsonant;

  return log;
}
function solution25() {
  let log = "";

  const array = [false, false, true, false];
  log = array.some(myFunction);

  function myFunction(bool) {
    return bool;
  }
  return log;
}
//26-30 find and  findIndex
function solution26() {
  let log = "";

  const array = [1, 2, 3, 4, 5];
  log = array.find(myFunction);

  function myFunction(num) {
    return num > 3;
  }
  return log;
}
function solution27() {
  let log = "";

  const array = [1, 3, 5, 2, 4, 6];
  log = array.findIndex(myFunction);

  function myFunction(num) {
    return num % 2 === 0;
  }
  return log;
}
function solution28() {
  let log = "";

  const array = ["תפוח", "בננה", "דובדבן"];
  log = array.find(myFunction);

  function myFunction(str) {
    return str.length > 5;
  }
  return log;
}
function solution29() {
  let log = "";

  const array = ["תמר", "דובדבן", "בננה", "תפוח"];
  log = array.findIndex(myFunction);

  function myFunction(str) {
    return str === `דובדבן`;
  }
  return log;
}
function solution30() {
  let log = "";

  const array = [1, 2, 3, -4, 5, -6];
  log = array.find(myFunction);

  function myFunction(num) {
    return num < 0;
  }
  return log;
}
//31-35 sort
function solution31() {
  let log = "";

  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  log = array.sort();
  return log;
}
function solution32() {
  let log = "";

  const array = ["בננה", "דובדבן", "תפוח", "תמר"];
  log = array.sort();
  return log;
}
function solution33() {
  let log = "";

  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  log = array.sort(function (a, b) {
    return b - a;
  });
  return log;
}
function solution34() {
  let log = "";

  const array = ["בננה", "דובדבן", "תפוח", "תמר"];
  log = array.sort(function (a, b) {
    return a.length - b.length;
  });
  return log;
}
function solution35() {
  let log = "";

  const array = [
    { name: "יוחנן", age: 25 },
    { name: "יעל", age: 30 },
    { name: "בועז", age: 20 },
  ];
  log = JSON.stringify(
    array.sort(function (a, b) {
      return a.age - b.age;
    })
  );
  return log;
}
//36-40 flat
function solution36() {
  let log = "";

  const array = [1, [2, 3], [4, [5, 6]]];
  log = array.flat(Number.MAX_VALUE);

  return log;
}
function solution37() {
  let log = "";

  const array = [1, [2, [3, [4]]]];

  log = array.flat(2);

  return JSON.stringify(log);
}
function solution38() {
  let log = "";

  const array = [1, 2, , 4, 5];

  log = array.flat(Number.MAX_VALUE);

  return log;
}
function solution39() {
  let log = "";

  const array = ["א", ["ב", "ג"], "ד"];

  log = array.flat(Number.MAX_VALUE);

  return log;
}
function solution40() {
  let log = "";

  const array = [1, [2, [3, [4, [5]]]]];

  log = array.flat(Number.MAX_VALUE);

  return log;
}
//41-45
function solution41() {
  let log = "";

  const array = ["א", "ב", "ג", "ד"];

  array.forEach(function (item, index) {
    log += `${item}${index} `;
  });

  return log;
}
function solution42() {
  let log = "";

  const array = [10, 20, 30, 40];

  const newArray = array.map(function (item, index) {
    return { item: item, index: index };
  });
  log = newArray;
  return JSON.stringify(log);
}
function solution43() {
  let log = "";

  const array = ["תפוח", "בננה", "אבטיח", "תמר"];

  const newArray = array.filter(function (item, index) {
    return item.includes("א");
  });
  log = newArray;
  return JSON.stringify(log);
}
function solution44() {
  let log = "";

  const array = ["א", "ב", "א", "ג", "ב", "א"];

  const newArray = array.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  log = newArray;
  return JSON.stringify(log);
}
function solution45() {
  let log = "";

  const array = ["שלום", "עולם", "ג'אווהסקריפט"];

  const newArray = array.some((str) => {
    return str.includes("ז");
  });
  log = newArray;
  return log;
}
//46-80 mixed
function solution46() {
  let log = "";

  const array = [2, 4, 6, 8];

  const newArray = array.some((num) => {
    return num % 2 === 0;
  });
  log = newArray;
  return log;
}
function solution47() {
  let log = "";

  const array = [
    { id: 1, status: "לא פעיל" },
    { id: 2, status: "פעיל" },
  ];

  const newArray = array.find((val) => {
    return val.status === `פעיל`;
  });
  log = newArray;
  return JSON.stringify(log);
}
function solution48() {
  let log = "";

  const array = [3, 7, -2, 9, -5];

  const newArray = array.findIndex((val) => {
    return val < 0;
  });
  log = newArray;
  return log;
}
function solution49() {
  let log = "";

  const array = ["JavaScript", "Python", "Ruby", "Java"];

  const newArray = array.sort((a, b) => {
    return a - b;
  });
  log = newArray;
  return log;
}
function solution50() {
  let log = "";

  const array = [1, [2, [3]], [4, [5]]];

  const newArray = array.flat(1);
  log = newArray;
  return JSON.stringify(log);
}
//exports
export const controller = {
  doFunc,
};

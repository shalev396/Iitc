"use strict";
//create copy of object
let person1 = { x: 1 };
let person3 = { ...person1 };
person3.x = 3;
console.log(person1);
console.log(person3);

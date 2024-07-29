//Array
//1.
let fruits = [];
//2.
fruits.push("apple");
fruits.push("banana");
fruits.push("mango");
fruits.push("blueberry");
//3.
lastItem = fruits.pop();
//4.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]); //third element is in index 2
//5.
fruits[2] = "kiwi";
//6.
let colors = [];
colors.push("red");
colors.push("green");
colors.push("blue");
//7.
colors.shift();
//8.
colors.unshift("yellow");
//9.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
//10
colors.indexOf("green");
//11.
let ranArr = [
  getRandomInt(1, 10),
  getRandomInt(1, 10),
  getRandomInt(1, 10),
  getRandomInt(1, 10),
  getRandomInt(1, 10),
];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let max = 0;
for (let i = 0; i < ranArr.length; i++) {
  if (max < ranArr[i]) {
    max = ranArr[i];
  }
}
//12.
let sliceArr = colors.slice(2, 3);
//13. i skipped
//14.
colors.join("`");
//15.
numbers = numbers.concat(ranArr);
//16.
fruits = fruits.reverse();
//17.skipped hard
//18
//19
//20
//21
//22
//23
//24
colors.includes("purple");
//25 imposible

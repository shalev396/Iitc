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
console.log(binaryName);
console.log(binaryToText(binaryName));
//for
console.log("for");
//1.
console.log("Task 1");
for (let i = 10; i > 0; i--) {
  console.log(i);
}
//2.
console.log("Task 2");
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//3.
console.log("Task 3");
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);
//4.
console.log("Task 4");
for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
//5.
console.log("Task 5");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
//while
console.log("while");
//1.
console.log("Task 1");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
//2.
console.log("Task 2");
let number = 1;
while (number < 100) {
  console.log(number);
  number *= 2;
}
//3.
console.log("Task 3");
let j = 20;
while (j >= 0) {
  console.log(j);
  j--;
}
//4.
console.log("Task 4");
let pass = "1234";
let enteredPass = " ";
while (enteredPass !== pass) {
  enteredPass = prompt("enter password");
}
//5.
console.log("Task 5");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let guess = 0;
while (guess !== 5) {
  guess = getRandomInt(1, 10);
  console.log(guess);
}
//do..while
console.log("do..while");
//1.
console.log("Task 1");
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 5);
//2.
console.log("Task 2");
let playAgain = "no";
do {
  playAgain = prompt("would you like to play again");
} while (playAgain !== "yes");
console.log(playAgain);
//3.
console.log("Task 3");
let dice = 0;
do {
  dice = getRandomInt(1, 6);
  console.log(dice);
} while (dice !== 6);
//4.
console.log("Task 4");
let numberDo = 1;
do {
  console.log(numberDo);
  numberDo *= 2;
} while (numberDo < 1000);
//5.
let names = "";
let namesList = [];
let count = 0;
do {
  names = prompt("enter a name or done");
  if (names !== "done") {
    namesList.push(names.toString());
    count++;
  }
} while (names !== "done");
console.log(count);
for (let l = 0; l < count; l++) {
  console.log(namesList[l]);
}

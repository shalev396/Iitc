//1.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
//2.
let i = 0;
while (i <= 15) {
  if (i % 2 === 1) console.log(i);
  i++;
}
//3. need fix
let num = "";
do num = prompt("1-10");
while (isNaN(num) || num.trim() == ""); ///////////////////////////save this
//4.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
//5.
let j = 10;
while (j > 0) {
  console.log(i);
  j--;
}
console.log("blast off");
//6.
for (let i = 0; i <= 10; i++) {
  console.log("Fibonacci");
}
//7.
let dice;
do {
  dice = getRandomInt(1, 6);
  console.log(dice);
} while (dice !== 3);
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//8.
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    let num = i * j;
    row += num.toString() + " ";
  }
  console.log(row);
}
//9.
let answer = 0;
let hasFound = false;
for (let i = 1001; (i % 3 === 0 && i % 7 === 0) || !hasFound; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    answer = i;
    hasFound = true;
  }
}
console.log(answer);
//10.
let count = 1;
for (let i = 1; i < 10; i++) {
  count *= i;
}
//11.
let random = getRandomInt(1, 20);
let num1 = 0;
do {
  num1 = prompt("1-20");
  if (!isNaN(num1) || num1.trim() !== "") {
    if (parseInt(num1) > random) {
      console.log("Lower");
    } else console.log("higher");
  }
} while (parseInt(num1) !== random);
console.log(random);
//12.
let isPrime = false;
let num2 = 7;
for (let i = 2; i <= Math.sqrt(num2); i++) {
  if (num2 % i === 0) {
    isPrime = true;
  } else isPrime = false;
}
//13.
let decimalNumber = 25;
let binary = "";

if (decimalNumber === 0) {
  binary = "0";
} else {
  while (decimalNumber > 0) {
    let remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
}
//14
console.log("Task 5");
for (let i = 1; i <= 5; i++) {
  console.log(i.repeat(i));
}
//15
let userInput;
let sum1 = 0;
do {
  sum1 += userInput = prompt("sum+");
} while (userInput === "exit");
//16 skiped
//17 skiped
//18
let n = 20;
for (let i = 1; i < n; i = i * 2) {
  console.log(i);
}
//19
let inRow;

let last = 2;
let coin = 2;
do {
  coin = getRandomInt(0, 1);
  if (coin === last) inRow++;
  else inRow = 0;

  console.log(coin);
  last = coin;
} while (inRow <= 3);
//20.
let n1 = 5;
let sum3 = 0;
for (let i = 1; i <= n1; i++) {
  sumOfSquares += i * i;
}
//21
let sum2 = 0;
let value = 5;
for (let i = 0; sum2 < value; i++) {
  sum += i;
}
//22 skiped
//23.
let correctnum = prompt("number");
let lastGus = 0;
do {
  lastGus = getRandomInt(1, 10);
} while (lastGus !== correctnum);
//24
let num3 = 5;
let sum4 = 0;

for (let i = 1; i <= num3; i++) {
  if (i % 2 === 0) {
    sum4 -= 1 / i;
  } else {
    sum4 += 1 / i;
  }
}
//25 skiped

//:(
//1.V
let fruits = [];
let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "green", "blue"];
let mixed = ["string", 0, true];
let seasons = ["winter", "spring", "summer", "fall"];
//2.V
console.log(numbers.length);
let emptyCheck = [];
console.log(emptyCheck.length === 0);
let dynamic = [5, 4, 3, 2, 1];
console.log(dynamic.length);
dynamic.push(0);
console.log(dynamic.length);
dynamic.pop();
console.log(dynamic.length);
//3.V
console.log(colors[0]);
console.log(seasons[seasons.length - 1]);
if (numbers.length % 2 === 0) {
  console.log(numbers[numbers.length / 2 - 1]);
  console.log(numbers[numbers.length / 2]);
} else console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(fruits[10]);
console.log(`The second color is ${colors[1]}`);
//4.V
fruits[0] = "apples";
numbers[numbers.length - 1] = 10;
numbers[3] *= numbers[3];
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
let temp;
temp = seasons[0];
seasons[0] = seasons[seasons.length - 1];
seasons[seasons.length - 1] = temp;
//5.V
fruits.push("orange");
numbers.pop();
colors.push("pink", "black", "yellow");
let emptyArray = [];
for (let j = 1; j < 6; j++) {
  emptyArray.push(j);
}
for (let k = emptyArray.length; k > 0 - 1; k--) {
  console.log(emptyArray.pop());
}
//6.V
fruits.unshift("mango");
numbers.shift();
numbers.unshift(1, 2, 3);
for (let l = 5; l > 0; l--) {
  emptyArray.unshift(l);
}
for (let m = emptyArray.length; m > 0; m--) {
  console.log(emptyArray.shift());
}
//7.V
console.log(colors.indexOf("green"));
console.log(seasons.indexOf("winter"));
colors.push("red");
colors.lastIndexOf("red");
let duplicate = [1, 1, 1, 1, 1, 1];
duplicate.indexOf(1);
duplicate.lastIndexOf(1);
let value = 2;
console.log(duplicate.indexOf(value));
//8.V
console.log(fruits.includes("apple"));
console.log(numbers.includes(10));
console.log(colors.includes("blue", Math.floor(colors.length / 2)));
function contain(array, value) {
  return array.includes(value);
}
console.log(colors.includes("green"));
//9.V
console.log(numbers.slice(0, 2));
console.log(colors.slice(colors.length - 2, colors.length - 1));
console.log(seasons.slice(1, 3));
numbers = numbers.slice(0, numbers.length - 1);
seasons.slice(seasons.length / 2 - 1);
if (seasons.length % 2 === 0) {
  console.log(seasons.slice(seasons.length / 2 - 1, seasons.length / 2)); ///////////
} else console.log(floor(seasons.slice(seasons.length / 2)));
//10.V
if (fruits.length % 2 === 0) fruits.splice(fruits.length / 2 - 1, 2);
else fruits.splice(fruits.length / 2);
numbers.splice(3, 1, 3, 4);
colors.splice(2, 0, "white", "brown", "gray");
emptyArray.splice(0, 1, 6, 7);
emptyArray.splice(0, emptyArray.length - 1);
//11.V
console.log(fruits.concat(colors));
console.log(numbers.concat(colors, fruits, seasons));
console.log(numbers.concat(1));
console.log(seasons.concat(seasons));
console.log(numbers.concat(1, 2, 3, 4));
//12.V
console.log(fruits.join());
console.log(numbers.join("-"));
function seperator(arr, sep) {
  arr.join(sep);
}
letters = ["h", "e", "l", "l", "o"];
console.log(letters.join(""));
sentence = "hello how are you";
let words = sentence.split(" ");
console.log(words);
console.log(words.reverse());
console.log(words.join(" "));
//13.
console.log(seasons.reverse());
function checkPalindrome(word) {
  let word2 = word.split("").reverse().join("");
  if (word === word2) return true;
  return false;
}
console.log(checkPalindrome("abba"));
console.log(numbers.reverse().map(Math.sqrt));
function myRevers(sentence) {
  return sentence.split("").reverse();
}
console.log(myRevers("hello world"));
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(numbers);
console.log(reverseArray(numbers));
//14.SKIPING IT!!!!!!!
fruits = fruits.sort();
//15.SKIPING IT!!!!!!!
//16.NEW TERITORY I AM SKIPPING MAP()
let lengths = fruits.map((fruit) => fruit.length); ///////////////doctor google ,i dont understand it "=>"
//17.NEW TERITORY I AM SKIPPING FILTR()
//18.NEW TERITORY I AM SKIPPING find()
//19.NEW TERITORY I AM SKIPPING some()
//20.NEW TERITORY I AM SKIPPING reduce()
//21.I take it back i am not a pro

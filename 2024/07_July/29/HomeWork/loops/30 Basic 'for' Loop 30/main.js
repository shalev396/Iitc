//1.
for (let i = 1; i < 6; i++) {
  console.log(i);
}
//2.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//3.
for (let i = 10; i > 0; i--) {
  console.log(i);
}
//4.
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) console.log(i);
}
//5.
for (let i = 1; i < 10; i++) {
  if (i % 2 === 1) console.log(i);
}
//6.
for (let i = 1; i < 15; i++) {
  if (i % 3 === 0) console.log(i);
}
//7.
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}
//8.
for (let i = 2; i < 20; i += 2) {
  console.log(i);
}
//9.
for (let i = 10; i > 10; i -= 2) {
  console.log(i);
}
//10.
for (let i = 5; i < 25; i += 5) {
  console.log(i);
}
//11.
for (let i = 1; i <= 1; i++) {
  //why loop
  console.log("*".repeat(5));
}
//12.
for (let i = 1; i <= 3; i++) {
  console.log("hello");
}
//13.
for (let i = 1; i <= 3; i++) {
  console.log(i + "!");
}
//14.
let abc = "ABCDE";
for (let i = 1; i <= 3; i++) {
  console.log(abc[i]);
}
//15.
let str = "";
for (let i = 1; i <= 4; i++) {
  str += "2 ";
}
console.log(str);
//16.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//17.
let arr1 = ["a", "b", "c", "d"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//18.
let arr2 = [10, 20, 30, 40, 50];
for (let i = arr2.length; i > 0; i--) {
  console.log(arr2[i]);
}
//20.
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(`Color:${colors[i]}`);
}
//21.
let sum = 0;
for (let i = 0; i <= 5; i++) sum += i;
//22.
let product = 1;
for (let i = 0; i <= 5; i++) product *= i;
//23.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
for (let i = 0; i < arr3.length; i++) {
  count++;
}
//24.
let arr4 = [10, 5, 8, 12, 3];
let largest = arr[0];
for (i = 0; i <= arr4.length; i++) {
  if (largest < arr4[i]) {
    largest = arr4[i];
  }
}
//25.
let sum1 = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
//26.
for (let i = 1; i <= 3; i++) {
  console.log("*".repeat(i));
}
//27.
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += "* ";
  }
  console.log(row);
}
//28.
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j.toString();
  }
  console.log(row);
}
//29.
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= 4; j++) {
    let num = i * j;
    row += num.toString() + " ";
  }
  console.log(row);
}
//30
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i.toString();
  }
  console.log(row);
}

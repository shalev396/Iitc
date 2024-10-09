//imports
import { utils } from "./utils.js";

//
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const progress = 5;
const arr = [];
for (let i = 1; i <= progress; i++) {
  if (arr.includes(i)) await eval(`solution${i}()`);
  else eval(`solution${i}()`);
  await wait(1000);
}
function solution1() {
  console.log(`Start`);
  console.log(`Middle`);
  console.log(`End`);
}
function solution2() {
  console.log(`Start`);
  setTimeout(() => console.log(`End`), 1000);
}
function solution3() {
  setTimeout(() => console.log(`Waiting`), 2000);
}
function solution4() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
function solution5() {
  const time = 1000;
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), time * i);
  }
}

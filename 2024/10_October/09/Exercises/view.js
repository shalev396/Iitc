//imports
import { utils } from "./utils.js";

run();
async function run() {
  for (let i = 1; i <= 30; i++) {
    eval(
      `solution${i}("a",12,2000,true)  .then((res) => {if (res !== undefined) console.log(res);}).catch((error) => {console.error(error);});`
    );
    await wait(2000);
  }
}
// obj
//   .then((res) => {
//     if (res !== undefined) console.log(res);
//   })
//   .catch((error) => {
//   console.error(error);
// });
async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function solution1() {
  const promise = new Promise((resolve, reject) => {
    resolve("Hello World!");
  });
  return promise;
}
async function solution2() {
  const promise = new Promise((resolve, reject) => {
    reject("Error occurred");
  });
  return promise;
}
async function solution3() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 2000);
  });
  return promise;
}
async function solution4() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Reject!"), 1000);
  });
  return promise;
}
async function solution5(str) {
  const promise = new Promise((resolve, reject) => {
    resolve(str);
  });
  return promise;
}
async function solution6(str) {
  const promise = new Promise((resolve, reject) => {
    reject(str);
  });
  return promise;
}
async function solution7() {
  const promise = new Promise((resolve, reject) => {
    resolve("Hello, World!");
    console.log("Promise Resolved!");
  });
  return promise;
}
async function solution8(str) {
  const promise = new Promise((resolve, reject) => {
    resolve(str);
  });
  return promise;
}
async function solution9(str) {
  const promise = new Promise((resolve, reject) => {
    reject(str);
  });
  return promise;
}
async function solution10() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("3 seconds passed"), 3000);
  });
  return promise;
}
async function solution11(str) {
  const promise = new Promise((resolve, reject) => {
    resolve(str);
  });
  const promise1 = new Promise((resolve, reject) => {
    resolve(" and then some");
  });
  promise.then((res) => {
    promise1.then((res1) => {
      console.log(res + res1);
    });
  });
}
async function solution12() {
  const promise = new Promise((resolve, reject) => {
    resolve([1, 2, 3, 4, 5]);
  });

  promise.then((res) => {
    let count = 0;
    for (let i = 0; i < res.length; i++) {
      count += res[i];
    }
    console.log(count);
  });
}
async function solution13(str, int) {
  const promise = new Promise((resolve, reject) => {
    if ((int) => 10) resolve("resolve");
    else reject("reject");
  });
  return promise;
}
async function solution14(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved"), ms);
  });
  return promise;
}
async function solution15(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    resolve(new Date());
  });
  return promise;
}
async function solution16(str, int, ms) {
  const promise1 = new Promise((resolve, reject) => {
    resolve(str);
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve(int);
  });
  const promise3 = new Promise((resolve, reject) => {
    resolve(ms);
  });
  Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res);
  });
}
async function solution17(str, int, ms) {
  const promise1 = new Promise((resolve, reject) => {
    resolve("jone");
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve(21);
  });

  Promise.all([promise1, promise2]).then((res) => {
    console.log(`name:${res[0]}, age:${res[1]}`);
  });
}
async function solution18() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(utils.getRandomInt(Number.MIN_VALUE, Number.MAX_VALUE)),
      1000
    );
  });
  return promise;
}
async function solution19() {
  const promise = new Promise((resolve, reject) => {
    reject("error");
  });
  return promise;
}
async function solution20() {
  const promise = new Promise((resolve, reject) => {
    resolve("Success!");
  });
  promise.then((res) => {
    console.log("Operation was successful!");
  });
}
async function solution21() {
  const promise = new Promise((resolve, reject) => {
    resolve("Done!");
  });
  promise.finally((res) => {
    console.log("Finished!");
  });
}
async function solution22() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
  return promise;
}
async function solution23(str, int, ms) {
  const promise1 = new Promise((resolve, reject) => {
    resolve(str);
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve(int);
  });
  const promise3 = new Promise((resolve, reject) => {
    resolve(ms);
  });
  Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res);
  });
}
async function solution24(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    if (str.length > 0) resolve("resolve");
    reject("reject");
  });
  return promise;
}
async function solution25(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    resolve(int * int);
  });
  return promise;
}
async function solution26(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(int * 2), 2000);
  });
  return promise;
}
async function solution27(str, int, ms) {
  const promise = new Promise((resolve, reject) => {
    resolve(`greeting${str}`);
  });
  return promise;
}
async function solution28() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("File downloaded"), 2000);
  });
  return promise;
}
async function solution29(str, int, ms, bool) {
  const promise = new Promise((resolve, reject) => {
    if (bool) {
      resolve(`Network success`);
    }
    reject(`Network error`);
  });
  return promise;
}
async function solution30(str, int, ms, bool) {
  const promise = new Promise((resolve, reject) => {
    resolve(`API call successful`);
  });
  return promise;
}

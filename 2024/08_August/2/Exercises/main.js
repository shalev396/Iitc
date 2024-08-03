"use strict";
function calculateAverage(array) {
  let sum = 0;
  let i;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / i;
}
let temp = [16, 18, 20];
console.log(calculateAverage(temp));

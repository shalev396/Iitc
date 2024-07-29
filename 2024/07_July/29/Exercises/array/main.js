//Array
//1.
let foods = ["apple", "pizza", "burger", "stake", "chicken"];
//2.
console.log(foods[2]);
//3.
foods[1] = "fish";
//4.
foods.push("cheese");
//5.
foods.shift();
//6.
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}
//7.
let findsIndex = foods.indexOf("burger");
//8.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let j = 0; j < numbers.length; j++) {
  sum += numbers[j];
}
console.log(sum);

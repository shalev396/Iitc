"use strict";
const student_1 = {
  name: "John",
  age: 17,
  grades: {},
};
const product_1 = {
  name: "Phone",
  categories: ["electronics"],
  isAvailable: false,
};
const myProducts = [
  { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
  { name: "Shirt", price: 500, categories: ["clothing"] },
  { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
];
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];
const strings = [
  "baba",
  "my success",
  "no more lives",
  "and of session",
  "good discussion",
];
/* 😅 Task 1: Update Student Age 😅
// TODO: Write a function to update the student's age (You can mutate the original object)
*/
function updateAge(student, newAge) {
  student.age = newAge;
}
updateAge(student_1, 18);
// console.log("Updated Student:", student_1); // age 18

/* 😅 Task 2: Add Product Category 😅
// TODO: Write a function to add a new category to the product (You can mutate the original object)
*/
function addCategory(product, category) {
  product.categories.push(category);
}
addCategory(product_1, "gadgets");
// console.log("Updated Product:", product_1); //categories["electronics","gadgets"]

/* 😅 Task 3: Check Product Availability 😅
// TODO: Write a function to check if the product is available (return true if available, false otherwise)
*/
function isProductAvailable(product) {
  return product.isAvailable;
}
const isAvailable = isProductAvailable(product_1);
// console.log("Is Product Available:", isAvailable); //false

/* 🙂 Task 4: Find Product by Name 🙂
// TODO: Write a function to find a product by name
*/
function findProductByName(products, productName) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      return products[i];
    }
  }
}
const foundProduct = findProductByName(myProducts, "Phone");
// console.log("Found Product:", foundProduct); //phone {...}

/* 🙂 Task 5: Count Products in Category 🙂
// TODO: Write a function to count the number of products in a category
*/
function countProductsInCategory(products, category) {
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].categories.length; j++) {
      if (products[i].categories[j] === category) {
        count++;
      }
    }
  }
  return count;
}
const count = countProductsInCategory(myProducts, "electronics");
// console.log("Products in Electronics:", count);//2

/* 🙂 Task 6: Get Student Ages 🙂
// TODO: Write a function to get an array of student ages
*/
function getStudentAges(students) {
  let ageArray = [];
  for (let i = 0; i < students.length; i++) {
    ageArray.push(students[i].age);
  }
  return ageArray;
}
const ages = getStudentAges(students);
// console.log("Student Ages:", ages); //[20,22,19]

/* 🤨 Task 7: Get Products by Category 🤨
// TODO: Write a function to get products by category
*/
function getProductsByCategory(products, category) {
  let productsByCategory = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories.includes(category)) {
      productsByCategory.push(products[i]);
    }
  }
  return productsByCategory;
}
// const electronics = getProductsByCategory(myProducts, "electronics");
// console.log("Electronics Products:", electronics); //laptop,phone

/* 🤨 Task 8: Get Average product prices 🤨
// TODO: Write a function to get the average price of all products
*/
function getAveragePrice(products) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
    count++;
  }
  return sum / count;
}
const averagePrice = getAveragePrice(myProducts);
// console.log("Average Price:", averagePrice);//1900

/* 🤨 Task 9: Add Grade to Student 🤨
// TODO: Write a function to add a grade to a student (You can mutate the original object)
*/
function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
}
addGrade(student_1, "math", 85);
// console.log("Updated Student:", student_1); //student{...grade >math:85}

/* 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
*/
function countCharacterOccurrences(strings, char) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //used homework form 30/07/2024
  let text = 0;
  let charIndex;
  let longString;
  for (let k = 0; k < strings.length; k++) {
    longString += strings[k] + "";
  }

  longString = longString.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (char === alphabet[i]) {
      charIndex = i;
    }
  }
  //   console.log(charIndex);
  //   console.log(alphabet[charIndex]);

  let count = 0;
  for (let j = 0; j < longString.length; j++) {
    if (alphabet[charIndex] === longString[j]) {
      count++;
    }
  }
  if (count !== 0) {
    text = count;
  }
  return text;
}
const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count); //10
// console.log("Occurrences of 'c':", c_count); //3

/* 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
*/
function updatePriceByName(products, productName, newPrice) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === productName) {
      products[i].price = newPrice;
    }
  }
}
updatePriceByName(myProducts, "Phone", 550);
console.log("Updated Products:", myProducts); //phone 4200>550

/* 😥 Task 12: Get Uppercase Strings 😥
// TODO: Write a function to get an array of uppercase strings (You should return a new array)
*/
function getUppercaseStrings(strings) {
  let newStrArray = [];
  for (let i = 0; i < strings.length; i++) {
    newStrArray.push(strings[i].toUpperCase());
  }
  return newStrArray;
}
const uppercaseStrings = getUppercaseStrings(strings);
// console.log("Uppercase Strings:", uppercaseStrings);//["BABA"]

/* 🥵 Task 13: group strings by spaces occurences 🥵
// TODO: Write a function to group strings by the number of spaces in the string.
// The function should return an object where keys are the number of spaces and values are arrays of strings.
*/
function groupStringsBySpaces(strings) {
  let sortedBySpaces = {};
  for (let i = 0; i < strings.length; i++) {
    let spacesCount = 0;
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === " ") {
        spacesCount++;
      }
    }
    if (sortedBySpaces[`space${spacesCount}`] === undefined) {
      //sortedBySpaces.space0
      sortedBySpaces[`space${spacesCount}`] = [];
    }

    sortedBySpaces[`space${spacesCount}`].push(strings[i]);
  }
  return sortedBySpaces;
}
const groupedStrings_1 = groupStringsBySpaces(strings);
console.log("Grouped Strings By Spaces:", groupedStrings_1); //{0=baba,1= [ba ba,ta ta]}

/* 🥵 Task 14: group strings by length 🥵
//TODO: Write a function to group strings by length.
// The function should return an object where keys are the length of the strings and values are arrays of strings.
*/
function groupStringsByLength(strings) {
  let sortedByLength = {};

  for (let i = 0; i < strings.length; i++) {
    if (sortedByLength[`length${strings[i].length}`] === undefined) {
      sortedByLength[`length${strings[i].length}`] = [];
    }

    sortedByLength[`length${strings[i].length}`].push(strings[i]);
  }
  return sortedByLength;
}
const groupedStrings_2 = groupStringsByLength(strings);
// console.log("Grouped Strings By Length:", groupedStrings_2);

/* 🥵 Task 15: Capitalize Strings 🥵
// TODO: Write a function to capitalize the first letter of each string in the array (You should return a new array)
// Bonus: Capitalize the first letter of each word in the string (split by space)
*/
function capitalizeStrings(strings) {
  let capitalizedArray = [];
  let temp;
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings[i].length; j++) {
      temp = strings[i][0].toUpperCase();
      for (let k = 1; k < strings[i].length; k++) {
        temp += strings[i][k];
      }
    }
    capitalizedArray.push(temp);
  }
  return capitalizedArray;
}
/* const capitalizedStrings = capitalizeStrings(strings);
// console.log("Capitalized Strings:", capitalizedStrings);
*/

//Bonus
function capitalizeStrings1(strings) {
  let capitalizedArray = [];
  let temp;
  let newtemp;
  let found = false;
  let pushed = false;
  for (let i = 0; i < strings.length; i++) {
    pushed = false;
    for (let j = 0; j < strings[i].length; j++) {
      //   pushed = false;
      found = false;
      temp = strings[i][0].toUpperCase();
      if (strings[i][j - 1] === " ") {
        strings[i][j] = strings[i][j].toUpperCase();
        console.log(strings[i][j]);

        newtemp = strings[i][j].toUpperCase();
        found = true;
      }
      for (let k = 1; k < strings[i].length; k++) {
        if (found && j == k) {
          temp += newtemp;
        } else {
          temp += strings[i][k];
        }
      }
      if (!pushed && found) {
        capitalizedArray.push(temp);
        pushed = true;
      }
      console.log(temp);
    }
    if (!pushed) {
      capitalizedArray.push(temp);
    }
  }
  return capitalizedArray;
}
// const capitalizedStrings2 = capitalizeStrings1(strings);
// console.log("Capitalized Strings1:", capitalizedStrings2);

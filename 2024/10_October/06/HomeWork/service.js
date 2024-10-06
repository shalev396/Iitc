//here crud ops and localStorage
//"Contains logic for interacting with localStorage and performing CRUD operations."
//imports
import { utils } from "./utils.js";
const questionsKey = `question`;
//resets employs
function createQuestions() {
  let questions = [
    {
      number: 1,
      question:
        'Use "forEach" to print any member of the array [1, 2, 3, 4, 5] to the terminal',
      solution: "",
    },
    {
      number: 2,
      question:
        'Use "forEach" to multiply each number in the array [1, 2, 3, 4, 5] and print the results',
      solution: "",
    },
    {
      number: 3,
      question:
        'Use "forEach" to create a new array with the squares of the numbers in [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 4,
      question:
        'Use "forEach" to sum all the numbers in the array [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 5,
      question:
        "Use \"forEach\" to concatenate all the strings in the array ['Hello', ' ', 'World', '!']",
      solution: "",
    },
    {
      number: 6,
      question:
        'Use "map" to create a new array with each number in [1, 2, 3, 4, 5] multiplied by 2',
      solution: "",
    },
    {
      number: 7,
      question:
        "Use \"map\" to create a new array with the length of each word in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 8,
      question:
        'Use "map" to create a new array with the square root of each number in [1, 4, 9, 16, 25]',
      solution: "",
    },
    {
      number: 9,
      question:
        "Use \"map\" to create a new array with each string in ['שלום', 'עולם'] converted to uppercase",
      solution: "",
    },
    {
      number: 10,
      question:
        'Use "map" to create a new array with each boolean in [true, false, true] reversed',
      solution: "",
    },
    {
      number: 11,
      question:
        'Use "filter" to create a new array with only even numbers from [1, 2, 3, 4, 5, 6]',
      solution: "",
    },
    {
      number: 12,
      question:
        "Use \"filter\" to create a new array with strings longer than 5 characters from ['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי']",
      solution: "",
    },
    {
      number: 13,
      question:
        'Use "filter" to create a new array with numbers greater than 10 from [5, 10, 15, 20, 25]',
      solution: "",
    },
    {
      number: 14,
      question:
        "Use \"filter\" to create a new array with strings that start with 'ת' from ['תפוח', 'בננה', 'תפוז', 'דובדבן']",
      solution: "",
    },
    {
      number: 15,
      question:
        'Use "filter" to create a new array with elements at even positions from [1, 2, 3, 4, 5, 6]',
      solution: "",
    },
    {
      number: 16,
      question:
        'Use "reduce" to sum all the numbers in the array [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 17,
      question:
        'Use "reduce" to find the product of all numbers in the array [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 18,
      question:
        'Use "reduce" to find the largest number in the array [10, 5, 15, 20, 25]',
      solution: "",
    },
    {
      number: 19,
      question:
        "Use \"reduce\" to concatenate all the strings in the array ['שלום', ' ', 'עולם', '!']",
      solution: "",
    },
    {
      number: 20,
      question:
        'Use "reduce" to count the occurrences of each number in [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]',
      solution: "",
    },
    {
      number: 21,
      question:
        'Use "some" to check if there is any number greater than 3 in [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 22,
      question:
        'Use "every" to check if all numbers in [2, 4, 6, 8, 10] are even',
      solution: "",
    },
    {
      number: 23,
      question:
        "Use \"some\" to check if there is any string longer than 6 characters in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 24,
      question:
        "Use \"every\" to check if all the strings in ['חתול', 'כלב', 'פיל'] start with a consonant",
      solution: "",
    },
    {
      number: 25,
      question:
        'Use "some" to check if there is any truthy value in [false, false, true, false]',
      solution: "",
    },
    {
      number: 26,
      question:
        'Use "find" to find the first number greater than 3 in [1, 2, 3, 4, 5]',
      solution: "",
    },
    {
      number: 27,
      question:
        'Use "findIndex" to find the index of the first even number in [1, 3, 5, 2, 4, 6]',
      solution: "",
    },
    {
      number: 28,
      question:
        "Use \"find\" to find the first string longer than 5 characters in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 29,
      question:
        "Use \"findIndex\" to find the index of 'דובדבן' in ['תפוח', 'בננה', 'דובדבן', 'תמר']",
      solution: "",
    },
    {
      number: 30,
      question:
        'Use "find" to find the first negative number in [1, 2, 3, -4, 5, -6]',
      solution: "",
    },
    {
      number: 31,
      question:
        'Use "sort" to sort the array [3, 1, 4, 1, 5, 9, 2, 6, 5] in ascending order',
      solution: "",
    },
    {
      number: 32,
      question:
        "Use \"sort\" to sort the array ['בננה', 'דובדבן', 'תפוח', 'תמר'] in alphabetical order",
      solution: "",
    },
    {
      number: 33,
      question:
        'Use "sort" to sort the array [3, 1, 4, 1, 5, 9, 2, 6, 5] in descending order',
      solution: "",
    },
    {
      number: 34,
      question:
        "Use \"sort\" to sort the array ['בננה', 'דובדבן', 'תפוח', 'תמר'] by length (from shortest to longest)",
      solution: "",
    },
    {
      number: 35,
      question:
        "Use \"sort\" to sort the array [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}] by age",
      solution: "",
    },
    {
      number: 36,
      question: 'Use "flat" to flatten the array [1, [2, 3], [4, [5, 6]]]',
      solution: "",
    },
    {
      number: 37,
      question: 'Use "flat" with a depth of 2 on the array [1, [2, [3, [4]]]]',
      solution: "",
    },
    {
      number: 38,
      question:
        'Use "flat" to remove empty spaces from the array [1, 2, , 4, 5]',
      solution: "",
    },
    {
      number: 39,
      question:
        "Use \"flat\" on the array ['א', ['ב', 'ג'], 'ד'] and print the result",
      solution: "",
    },
    {
      number: 40,
      question: 'Use "flat" with infinite depth on [1, [2, [3, [4, [5]]]]]',
      solution: "",
    },
    {
      number: 41,
      question:
        "Use \"forEach\" to print the index and value of each element in ['א', 'ב', 'ג', 'ד']",
      solution: "",
    },
    {
      number: 42,
      question:
        "Use \"map\" to create an array of objects with properties 'index' and 'value' from [10, 20, 30, 40]",
      solution: "",
    },
    {
      number: 43,
      question:
        "Use \"filter\" to create an array of strings that contain the letter 'א' from ['תפוח', 'בננה', 'אבטיח', 'תמר']",
      solution: "",
    },
    {
      number: 44,
      question:
        "Use \"reduce\" to create an object where the keys are the array elements and the values are their occurrences in ['א', 'ב', 'א', 'ג', 'ב', 'א']",
      solution: "",
    },
    {
      number: 45,
      question:
        "Use \"some\" to check if there is any string in ['שלום', 'עולם', 'ג'אווהסקריפט'] that contains the letter 'ז'",
      solution: "",
    },
    {
      number: 46,
      question:
        'Use "every" to check if all numbers in [2, 4, 6, 8] are divisible by 2',
      solution: "",
    },
    {
      number: 47,
      question:
        "Use \"find\" to find the first object with status 'active' in [{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}]",
      solution: "",
    },
    {
      number: 48,
      question:
        'Use "findIndex" to find the index of the first number smaller than 0 in [3, 7, -2, 9, -5]',
      solution: "",
    },
    {
      number: 49,
      question:
        "Use \"sort\" to sort the array ['JavaScript', 'Python', 'Ruby', 'Java'] by string length (from longest to shortest)",
      solution: "",
    },
    {
      number: 50,
      question:
        'Use "flat" on the array [1, [2, [3]], [4, [5]]] with a depth of 1',
      solution: "",
    },
    {
      number: 51,
      question:
        "Use \"forEach\" to create a string from the array ['ש', 'ל', 'ו', 'ם']",
      solution: "",
    },
    {
      number: 52,
      question:
        'Use "map" to create an array where each number in [1, 2, 3, 4, 5] is increased by 10',
      solution: "",
    },
    {
      number: 53,
      question:
        'Use "filter" to create an array of numbers divisible by 3 from [1, 2, 3, 4, 5, 6, 7, 8, 9]',
      solution: "",
    },
    {
      number: 54,
      question:
        "Use \"reduce\" to find the longest string in ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר']",
      solution: "",
    },
    {
      number: 55,
      question:
        'Use "some" to check if there is any even number in [1, 3, 5, 7, 9]',
      solution: "",
    },
    {
      number: 56,
      question:
        "Use \"every\" to check if all strings in ['תפוח', 'תפ', 'תפוז'] start with 'תפ'",
      solution: "",
    },
    {
      number: 57,
      question:
        "Use \"find\" to find the first object with the 'completed' property set to true in [{id: 1, completed: false}, {id: 2, completed: true}]",
      solution: "",
    },
    {
      number: 58,
      question:
        "Use \"findIndex\" to find the index of 'בננה' in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 59,
      question:
        "Use \"sort\" to sort the array [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}] by name in alphabetical order",
      solution: "",
    },
    {
      number: 60,
      question:
        'Use "flat" on the array [1, [2, 3], [4, [5, 6]]] with a depth of 2',
      solution: "",
    },
    {
      number: 61,
      question:
        "Use \"forEach\" to print each character in the string 'שלום' to the terminal",
      solution: "",
    },
    {
      number: 62,
      question:
        "Use \"map\" to create an array of the first letters of each word in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 63,
      question:
        "Use \"filter\" to create an array of strings with more than 3 characters from ['א', 'אב', 'אבג', 'אבגד']",
      solution: "",
    },
    {
      number: 64,
      question:
        "Use \"reduce\" to count the total number of characters in ['תפוח', 'בננה', 'דובדבן']",
      solution: "",
    },
    {
      number: 65,
      question:
        "Use \"some\" to check if there is any string longer than 10 characters in ['שלום', 'עולם', 'ג'אווהסקריפט']",
      solution: "",
    },
    {
      number: 66,
      question:
        'Use "every" to check if all numbers in [10, 20, 30, 40, 50] are greater than 5',
      solution: "",
    },
    {
      number: 67,
      question:
        "Use \"find\" to find the first string that contains 'וו' in ['ספר', 'דלת', 'חלון']",
      solution: "",
    },
    {
      number: 68,
      question:
        'Use "findIndex" to find the index of the first number greater than 10 in [5, 10, 15, 20]',
      solution: "",
    },
    {
      number: 69,
      question:
        "Use \"sort\" to sort the array ['אאא', 'בב', 'ג'] by string length (ascending)",
      solution: "",
    },
    {
      number: 70,
      question: 'Use "flat" on the array [1, [2, [3, [4]]]] with a depth of 3',
      solution: "",
    },
    {
      number: 71,
      question:
        'Use "forEach" to create an array of square roots of the numbers in [1, 4, 9, 16]',
      solution: "",
    },
    {
      number: 72,
      question:
        "Use \"map\" to create an array where each string in ['א', 'ב', 'ג'] appears twice",
      solution: "",
    },
    {
      number: 73,
      question:
        'Use "filter" to create an array of numbers between 10 and 20 from [5, 10, 15, 20, 25]',
      solution: "",
    },
    {
      number: 74,
      question:
        'Use "reduce" to create one object from [{א: 1}, {ב: 2}, {ג: 3}]',
      solution: "",
    },
    {
      number: 75,
      question:
        "Use \"some\" to check if any object in [{x: 1}, {y: 2}, {z: 3}] has the property 'y'",
      solution: "",
    },
    {
      number: 76,
      question:
        "Use \"every\" to check if all strings in ['א1', 'ב2', 'ג3'] contain both a letter and a number",
      solution: "",
    },
    {
      number: 77,
      question:
        "Use \"find\" to find the first object with a 'price' less than 50 in [{price: 60}, {price: 40}, {price: 70}]",
      solution: "",
    },
    {
      number: 78,
      question:
        "Use \"findIndex\" to find the index of the first falsy value in [1, '', true, 0, null, 'שלום']",
      solution: "",
    },
    {
      number: 79,
      question:
        'Use "sort" to sort the array [3.14, 2.71, 1.41, 1.73] in ascending order',
      solution: "",
    },
    {
      number: 80,
      question:
        "Use \"flat\" on the array ['א', ['ב', ['ג']]] with infinite depth",
      solution: "",
    },
    {
      number: 81,
      question:
        'Use a combination of "filter" and "map" to create an array of the squares of the even numbers from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
      solution: "",
    },
    {
      number: 82,
      question:
        "Use \"reduce\" to group an array of objects by a certain property. For example, group [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}, {name: 'Charlie', age: 25}] by age",
      solution: "",
    },
    {
      number: 83,
      question:
        "Implement a simple debounce function using setTimeout and use it with forEach on an array of functions",
      solution: "",
    },
    {
      number: 84,
      question:
        'Use "map" and Promise.all to fetch data from multiple URLs (you can use placeholder URLs)',
      solution: "",
    },
    {
      number: 85,
      question:
        'Implement a simple memoization function and use it with "map" on an array of numbers to calculate Fibonacci numbers',
      solution: "",
    },
    {
      number: 86,
      question: 'Use "reduce" to implement a simple version of Promise.all',
      solution: "",
    },
    {
      number: 87,
      question:
        'Implement a function using "sort" and "reduce" to find the median of an array of numbers',
      solution: "",
    },
    {
      number: 88,
      question:
        'Use a combination of "map" and "reduce" to flatten an array of arrays while applying a transformation to each element',
      solution: "",
    },
    {
      number: 89,
      question:
        'Implement a function that uses "reduce" to compose functions, then use it with "map" on an array of numbers',
      solution: "",
    },
    {
      number: 90,
      question:
        'Use "filter" and "reduce" to implement a simple version of Array.prototype.groupBy (available in some modern browsers)',
      solution: "",
    },
    {
      number: 91,
      question:
        'Use "sort" and "reduce" to find the mode (most common element) in an array',
      solution: "",
    },
    {
      number: 92,
      question: 'Use "reduce" to implement a simple version of flatMap',
      solution: "",
    },
    {
      number: 93,
      question:
        'Implement a function using a combination of "map", "filter", and "reduce" to perform a complex transformation on an array of objects',
      solution: "",
    },
    {
      number: 94,
      question:
        'Use "reduce" to implement a simple version of Array.prototype.reduceRight',
      solution: "",
    },
    {
      number: 95,
      question:
        'Implement a function that uses "sort" with a custom comparison function to sort an array of objects by multiple criteria',
      solution: "",
    },
    {
      number: 96,
      question:
        'Use a combination of "filter", "map", and "reduce" to implement a simple query language for an array of objects',
      solution: "",
    },
    {
      number: 97,
      question:
        'Use "reduce" to create a prefix tree (trie) structure from an array of words',
      solution: "",
    },
    {
      number: 98,
      question:
        'Use a combination of "map" and "reduce" to implement a simple version of Array.prototype.flat with a customizable depth',
      solution: "",
    },
    {
      number: 99,
      question:
        'Implement a function that uses "reduce" to create a balanced binary search tree from a sorted array',
      solution: "",
    },
    {
      number: 100,
      question:
        'Use a combination of array methods you\'ve learned to implement a simple "sumif" function (like in a spreadsheet) for an array of objects',
      solution: "",
    },
  ];
  for (let i = 0; i < questions.length; i++) {
    questions[i].id = utils.makeId();
  }
  utils.saveToStorage(questionsKey, questions);
}

//exports
export const service = {
  createQuestions,
};

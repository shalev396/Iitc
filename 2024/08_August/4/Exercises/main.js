"use strict";
//Exercise 1
// console.log("Exercise 1");
// console.log(getValOfIdArray(students, "id"));
// console.log(getValOfIdArray(students, "name"));
let students = [
  { id: "1", name: "Shalev", grade: 100 },
  { id: "2", name: "Ben", grade: 70 },
  { id: "3", name: "Moshe", grade: 50 },
];
function getValOfIdArray(objArray, key) {
  let newArray = [];
  for (let i = 0; i < objArray.length; i++) newArray.push(objArray[i][key]);
  return newArray;
}
//Exercise 2
// console.log("Exercise 2");
// console.log(geStudentAboveNumArray(students, 60));
// console.log(geStudentAboveNumArray(students, 70));
function geStudentAboveNumArray(objArray, grade) {
  let newArray = [];
  for (let i = 0; i < objArray.length; i++)
    if (objArray[i].grade > grade) newArray.push(objArray[i]);
  return newArray;
}
// Exercise 3
// console.log("Exercise 3");
let names1 = ["shalev", "ben", "moshe"];
// console.log(getNamesObj(names1));
function getNamesObj(array) {
  for (let i = 0; i < array.length; i++)
    array[i] = { id: i + 1, name: array[i] };
  return array;
}
//Exercise 4
console.log("Exercise 4");

let employees = [
  { name: "Shelev Ben Moshe", department: "Development", yearOfExp: 5 },
  { name: "Jone Doe", department: "Engineering", yearOfExp: 5 },
  { name: "Jane Smith", department: "Development", yearOfExp: 3 },
  { name: "Lucky Brown", department: "Engineering", yearOfExp: 3 },
  { name: "Mike Davis", department: "Development", yearOfExp: 5 },
];
console.log(groupBy(employees, "department"));
console.log(groupBy(employees, "yearOfExp"));
function groupBy(objArray, key) {
  let sortedObj = {};
  for (let i = 0; i < objArray.length; i++) {
    if (sortedObj[objArray[i][key]] !== undefined)
      sortedObj[objArray[i][key]].push(objArray[i]);
    else sortedObj[objArray[i][key]] = [objArray[i]];
  }
  return sortedObj;
}

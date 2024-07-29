//Task 8 function
//1.
function greet() {
  console.log("hello world");
}
//2.
function squre(number) {
  return number * number;
}
//3.
function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}
//4.
function getFullName(firstName, LastName) {
  return firstName + LastName;
}
//5.
function sumTwo(number1, number2) {
  return number1 + number2;
}
//6.
function multiply(number1, number2) {
  return number1 * number2;
}
//7.
function greetPerson(name) {
  return "hello" + name;
}
//8.
function getAbsoluteValue(number) {
  return Math.abs(number);
}
//9.
function calculateAverage(number1, number2) {
  return (number1 + number2) / 2;
}
//10.
function convertToUppercase(str) {
  return convertToUppercase(str);
}
//11.
function isPositive(number) {
  if (number > 0) {
    return true;
  }
}
//12.
function getFirstChar(str) {
  return str[0];
}
//13.
function areaOfRectangle(width, hight) {
  return width * hight;
}
//14.
function remainderDivision(number1, number2) {
  return number1 % number2;
}
//15.
function logType(value) {
  return typeof value;
}
//16.
function invertBoolean(bool) {
  return !bool;
}
//17.
function concatenateStrings(str1, str2) {
  return str1 + str2;
}
//18.
function findSmaller(number1, number2) {
  return Math.min(number1, number2);
}
//19.
function greetWithDefault(name) {
  if (name === "") return greet("guest");
  return greet(name);
}
//20.
function isLongString(str) {
  if (str.length > 10) return true;
  return false;
}

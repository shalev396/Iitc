//Task 9 String Methods
//1.
function stringLength(str) {
  return str.length();
}
//2.
function upperCase(str) {
  return str.toUpperCase();
}
//3.
function lowerCase(str) {
  return str.toLowerCase();
}
//4.
function char(str, num) {
  return str.charAt(num);
}
//5.
function substr(str, from, to) {
  return str.substring(from, to);
}
//6.
function replaces(str, old, newer) {
  return str.replace(old, newer);
}
//7.
function trims(str) {
  return str.trim();
}
//8.
function start(str) {
  return str[1];
}
//9.
function end(str) {
  str[str.length() - 1];
}
//10.
function search(str, char) {
  return str.indexOf(char);
}
//11.
function splits(str) {
  return str.split();
}
//12
function repeats(str, num) {
  return str.repeat(num);
}
//13.
function concats(str1, str2) {
  return str1 + str2;
}
//14.
function pads(str, char) {
  return str.padStart(char);
}
//15.
function extractChar(str) {
  return str.slice(1, str.length() - 1);
}
//16.
function replaceFirst(str, char, newChar) {
  return str.replace(char, newChar);
}
//17.
function isInclude(str, char) {
  return str.includes(char);
}
//18.
function lastChar(str) {
  return str[str.length() - 1];
}
//19.
function isEmpty(str) {
  if (str.length() === 0) return true;
  return false;
}
//20.
function cut(str, num) {
  return str.slice(num, str.length() - 1);
}

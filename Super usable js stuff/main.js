//binary convertor
let name = "shalev ben moshe";
let binaryName = textToBinary(name);
function binaryToText(str) {
  let binaryArray = str.split(" ");
  let text = "";
  for (let i = 0; i < binaryArray.length; i++) {
    let decimal = parseInt(binaryArray[i], 2);
    let character = String.fromCharCode(decimal);
    text += character;
  }
  return text;
}
function textToBinary(string) {
  return string
    .split("")
    .map(function (char) {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
}
console.log(binaryName);
console.log(binaryToText(binaryName));
// is a number
let num = "";
do num = prompt("1-10");
while (isNaN(num) || num.trim() == "");
//

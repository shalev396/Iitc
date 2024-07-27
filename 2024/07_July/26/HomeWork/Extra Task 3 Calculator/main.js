//Calculator
//1.
function addition(x, y) {
  return Number(x) + Number(y);
}
function subtraction(x, y) {
  return Number(x) - Number(y);
}
function multiplication(x, y) {
  return Number(x) * Number(y);
}
function division(x, y) {
  if (y === 0) {
    return 0; //i didn't understand what am i suppose to do"Remember to handle division by zero in your division function"
    console.log("error can not /0 value is set to 0");
  }
  return Number(x) / Number(y);
}
//2.
function pawerOf(x, y) {
  return Math.pow(Number(x), Number(y));
}
function squareRoot(x) {
  return Math.sqrt(Number(x));
}
function absolute(x) {
  return Math.abs(Number(x));
}
//3.
function operationSelector(input, x, y) {
  switch (input) {
    case "+":
      return addition(x, y);
      break;
    case "-":
      return subtraction(x, y);
      break;
    case "*":
      return multiplication(x, y);
      break;
    case "/":
      return division(x, y);
      break;
    case "^":
      return pawerOf(x, y);
      break;
    case "#":
      return squareRoot(x);
      break;
    case "@":
      return absolute(x);
      break;
    default:
      console.log("error");
      break;
  }
}
//4.
function input() {
  inputFlag = false;
  askedX = false;
  askedY = false;
  while (!checkInputX(x)) {
    x = prompt("please enter a number");
    askedX = true;
  }
  while (!inputFlag) {
    if (
      userInput === "+" ||
      userInput === "-" ||
      userInput === "*" ||
      userInput === "/" ||
      userInput === "^" ||
      userInput === "#" ||
      userInput === "@"
    )
      inputFlag = true;
    else userInput = prompt("please enter (+,-,*,/,^,#,@)");
  }
  while (!checkInputY(y)) {
    y = prompt("please enter a number");
    askedY = true;
  }
}
function checkInputX(input) {
  if (isNaN(input)) {
    if (askedX) {
      alert("Must input numbers");
    }
    return false;
  }
  return true;
}
function checkInputY(input) {
  if (isNaN(input)) {
    if (askedY) {
      alert("Must input numbers");
    }
    return false;
  }
  return true;
}

//5.i failed on bonus challenge for now
let x = undefined;
let userInput = "abc";
let y = undefined;
let askedX = false;
let askedY = false;
let inputFlag;
let memory = new Array();
let answer = 0;
for (let i = 0; i <= 3; i++) {
  x = undefined;
  userInput = "abc";
  y = undefined;
  askedX = false;
  askedY = false;
  inputFlag;
  memory = new Array();
  answer = 0;

  input();
  answer = operationSelector(userInput, x, y);
  console.log(`your answer is: ${answer}`);

  userInput = prompt("want to use memory (M+,M-,MR,MC,MS) if not leave empty");
  inputFlag = false;
  while (!inputFlag) {
    if (
      userInput === "M+" ||
      userInput === "M-" ||
      userInput === "MR" ||
      userInput === "MC" ||
      userInput === "MS" ||
      userInput === ""
    )
      inputFlag = true;
    else
      userInput = prompt("want to use memory (M+,M-,MR,MC) if not leave empty");
  }
  while (!checkInputX(x)) {
    x = prompt("please enter a number");
    askedX = true;
  }
  switch (userInput) {
    case "M+":
      console.log(x + memory[memory.length() - 1]);
      break;
    case "M-":
      console.log(x - memory[memory.length() - 1]);
      break;
    case "MR":
      y = Number(memory.pop());
      input();
      break;
    case "MC":
      memory = new Array();
      break;
    case "MS":
      memory.push(answer);
      break;
  }
  console.log(answer);
}

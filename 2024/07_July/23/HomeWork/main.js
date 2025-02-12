// all variables and with initials of the task due to the repeating variables names
//Declare Variables (Variables stay for next task)
console.log("Declare Variables:");
let firstNameDV = "Shalev";
let LastNameDV = "Ben Moshe";
let ageDV = 21;
let IsStudentDV = true;
console.log(firstNameDV);
console.log(LastNameDV);
console.log(ageDV);
console.log(IsStudentDV);
//Boolean Expressions:
console.log("Boolean Expressions:");
let isAdultDV = ageDV > 18;
let isJohnDV = firstNameDV === "john";
console.log(isAdultDV);
console.log(isJohnDV);
//Write a Function: (Variables stay for next task)
console.log("Write a Function:");
let firstNameWFT = "Shalev";
let LastNameWFT = "Ben Moshe";
//originally greet but there are 2 function so they are numbered
function greet1(firstNameWF, LastNameWF) {
  let fullnameWF = firstNameWF + " " + LastNameWF;
  return "Hello, " + fullnameWF + "! Welcome to the IITC Bootcamp.";
}
console.log(greet1(firstNameWFT, LastNameWFT));
//String Methods:
console.log("String Methods:");
//originally greet but there are 2 function so they are numbered
function greet2(firstNameWF, LastNameWF) {
  let fullnameWF = firstNameWF + " " + LastNameWF;
  return (
    "Hello, " + fullnameWF.toUpperCase() + "! Welcome to the IITC Bootcamp."
  );
}
console.log(greet2(firstNameWFT, LastNameWFT));
//Conditions:
console.log("Conditions:");
let ageCT = 24;
function checkAge(ageC) {
  if (ageC < 13) return "You are a child.";
  else if (ageC >= 13 && ageC <= 17) return "You are a teenager.";
  else if (ageC >= 18 && ageC <= 64) return "You are an adult.";
  else if (ageC > 65) return "You are a senior.";
}
console.log(checkAge(ageCT));
//Switch Statement:
console.log("Switch Statement:");
let DaySST = "Tuesday";
function GetDayMessage(dayOfWeekSS) {
  switch (dayOfWeekSS) {
    case "Monday":
      return "second day of the week";
      break;
    case "Tuesday":
      return "third day of the week";
      break;
    case "wednesday":
      return "forth day of the week";
      break;
    case "thursday":
      return "fifth day of the week";
      break;
    case "friday":
      return "sixth day of the week";
      break;
    case "saturday":
      return "seventh day of the week";
      break;
    case "sunday":
      return "first day of the week";
      break;
    default:
      return "Invalid day!";
  }
}
console.log(GetDayMessage(DaySST));
//Complex Conditions:
console.log("Complex Conditions:");
let ageCCT = 23;
let isStudentCCT = true;
function checkEligibility(ageCC, isStudentCC) {
  if (ageCC < 18 && isStudentCC) return "You are a minor student.";
  else if (ageCC < 18 && !isStudentCC) return "You are a minor non-student.";
  else if (ageCC > 18 && ageCC < 24 && isStudentCC)
    return "You are a young adult student.";
  else if (ageCC > 18 && ageCC < 24 && !isStudentCC)
    return "You are a young adult non-student.";
  else if (ageCC > 25 && isStudentCC) "You are an adult student.";
  else if (ageCC > 25 && !isStudentCC) "You are an adult non-student.";
}
console.log(checkEligibility(ageCCT, isStudentCCT));
//String Comparison and Manipulation:
console.log("String Comparison and Manipulation:");
let nameSCMT = " admin ";
function formatName(nameSCM) {
  nameSCM = nameSCM.trim();
  nameSCM = nameSCM.toLowerCase();
  if (nameSCM === "admin") return "Welcome, Admin!";
  else return "Hello, " + nameSCM + "!";
}
console.log(formatName(nameSCMT));

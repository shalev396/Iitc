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
//Nested If Statements:
console.log("Nested If Statements:");
let ageNIST = 75;
let isMemberNIST = true;
function checkDiscount(ageNIS, isMemberNIS) {
  if (ageNIS < 18) {
    if (isMemberNIS) return "You get a 20% discount.";
    else return "You get a 10% discount.";
  }
  if (ageNIS > 65) {
    if (isMemberNIS) return "You get a 30% discount.";
    else return "You get a 20% discount.";
  }
  if (ageNIS > 18 && ageNIS < 65) {
    if (isMemberNIS) return "You get a 10% discount.";
    else return "No discount available.";
  }
}
console.log(checkDiscount(ageNIST, isMemberNIST));
//Login Validation:
console.log("Login Validation:");
let usernameLVT = "name";
let passwordLVT = "pass";
function validateLogin(usernameLV, passwordLV) {
  let storedUsernameLV = "name";
  let storedPasswordLV = "pass";
  if (usernameLV === storedUsernameLV && passwordLV === storedPasswordLV)
    return "Login successful.";
  return "Invalid username or password.";
}
console.log(validateLogin(usernameLVT, passwordLVT));
//Substring Extraction:
console.log("Substring Extraction:");
let firstNameSET = "shalev";
let LastNameSET = "ben moshe";
function extractInitials(firstNameSE, LastNameSE) {
  return (
    firstNameSE.charAt(0).toUpperCase() +
    "." +
    LastNameSE.charAt(0).toUpperCase() +
    "."
  );
}
console.log(extractInitials(firstNameSET, LastNameSET));
//String Replacement:
console.log("String Replacement:");
let emailSRT = "shalev396@gmail.com";
function maskEmail(emailSR) {
  let emailPartSR = emailSR.slice(0, emailSR.indexOf("@"));
  emailSR = emailSR.replace(emailPartSR, "******");
  return emailSR;
}
console.log(maskEmail(emailSRT));
//Nested If-Else:
console.log("Nested If-Else:");
let scoreNIET = 81;
function gradeCalculator(scoreNIE) {
  if (scoreNIE >= 90) return "A";
  else if (scoreNIE >= 80) return "B";
  else if (scoreNIE >= 70) return "C";
  else if (scoreNIE >= 60) return "D";
  else return "f";
}
console.log(gradeCalculator(scoreNIET));
//Complex Boolean Conditions:
console.log("Complex Boolean Conditions:");
let ageCBCT = "21";
let isCitizenCBCT = true;
function canVote(ageCBC, isCitizenCBC) {
  if ((ageCBC >= 18, isCitizenCBC)) return "You are eligible to vote.";
  return "You are not eligible to vote.";
}
console.log(canVote(ageCBCT, isCitizenCBCT));
//String and Number Conversion:
console.log("String and Number Conversion:");
let nameSNCT = "Shalev";
let ageSNCT = "21";
function convertToUpperCaseAndAddAge(nameSNC, ageSNC) {
  nameSNC = nameSNC.toUpperCase();
  return nameSNC + ageSNC.toString();
}
console.log(convertToUpperCaseAndAddAge(nameSNCT, ageSNCT));
//Capitalize First Letter:
console.log("Capitalize First Letter:");
let wordCFLT = "shalev";
function capitalize(wordCFL) {
  return wordCFL.replace(wordCFL[0], wordCFL[0].toUpperCase());
}
console.log(capitalize(wordCFLT));
//Check Substring:
console.log("Check Substring:");
let mainStringCST = "abcdefghijklmnopqrstuvwxyz";
let subStringCST = "opq";
function containsSubstring(mainStringCS, subStringCS) {
  if (mainStringCS.includes(subStringCS)) return true;
  return false;
}
console.log(containsSubstring(mainStringCST, subStringCST));

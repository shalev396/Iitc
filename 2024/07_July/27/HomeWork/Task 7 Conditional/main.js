//Task 7 Conditional Statements
//1.
let age;
let canVote = false;
if (age >= 18) canVote = true;
//2.
let temperature;
let weather;
if (temperature < 0) weather = "freezing";
else weather = "not freezing";
//3.
let score;
let result = "failed";
if (score >= 60) result = "pass";
else result = "failed";
//4.
let grade;
let letterGrade;
if (grade >= 90) letterGrade = "A";
else if (grade >= 80) letterGrade = "B";
else letterGrade = "C";
//5.
let number;
let isEven;
if (number % 2 === 0) isEven = true;
else isEven = false;
//6.
let year;
let IsLeapYear;
if (year % 4 === 0) IsLeapYear = true;
else IsLeapYear = false;
//7.
let hour;
let period;
if (hour < 12) period = "AM";
else period = "PM";
//8.
let dayNumber;
let dayName;
if (dayNumber === 1) dayName = "sunday";
else if (dayNumber === 2) dayName = "monday";
else if (dayNumber === 3) dayName = "tuesday";
else if (dayNumber === 4) dayName = "wednesday";
else if (dayNumber === 5) dayName = "thursday";
else if (dayNumber === 6) dayName = "friday";
else if (dayNumber === 7) dayName = "saturday";
//9.
let name;
let hasName;
if (name !== "") hasName = true;
else hasName = false;
//10.
let amount;
let shipping;
if (amount > 1000) shipping = 0;
else shipping = 5;
//11.
let password;
let isLoggedIn;
if (password === "secret123") isLoggedIn = true;
else isLoggedIn = false;
//12.
let month;
let season;
if (month >= 1 && month <= 3) season = "winter";
else if (month >= 4 && month <= 6) season = "spring";
else if (month >= 7 && month <= 9) season = "summer";
else if (month >= 10 && month <= 12) season = "fall";
//13.
let income;
let creditScore;
let loanApproved;
if (income > 50000 && creditScore > 700) loanApproved = true;
loanApproved = false;
//14.
let age1;
let discount;
if (age1 < 18 || age1 > 65) discount = 0.2;
else discount = 0;
//15.
let number1;
let inRange;
if (number1 >= 1 && number1 <= 10) inRange = true;
else inRange = false;
//16.
let dayNumber1;
let dayName1;
switch (dayNumber1) {
  case 1:
    dayName1 = "sunday";
    break;
  case 2:
    dayName1 = "monday";
    break;
  case 3:
    dayName1 = "tuesday";
    break;
  case 4:
    dayName1 = "wednesday";
    break;
  case 5:
    dayName1 = "thursday";
    break;
  case 6:
    dayName1 = "friday";
    break;
  case 7:
    dayName1 = "saturday";
    break;
}
//17.
let grade1;
let description;
switch (grade1) {
  case "A":
    description = "excellent";
    break;
  case "B":
    description = "very good";
    break;
  case "C":
    description = "not very good";
    break;
  case "D":
    description = "good";
    break;
  case "F":
    description = "not good";
    break;
}
//18.
let number2;
let sign;
if (number2 < 0) sign = "-";
else if (number2 > 0) sigh = "+";
else sigh = "0";
//19.
let year1;
let isCenturyLeapYear;
if (year1 % 400 === 0) isCenturyLeapYear = true;
else isCenturyLeapYear = false;
//20.
let month1;
let daysInMonth;
switch (month1) {
  case 1:
    daysInMonth = 31;
    break;
  case 2:
    daysInMonth = 28;
    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  case 12:
    daysInMonth = 31;
    break;
}
//21
let number3;
let parity;
if (number3 < 0) {
  sign = "-";
  if (number3 % 2 === 0) parity = true;
  else parity = false;
} else if (number3 > 0) {
  sigh = "+";
  if (number3 % 2 === 0) parity = true;
  else parity = false;
} else {
  sigh = "0";
  if (number3 % 2 === 0) parity = true;
  else parity = false;
}
//22.
let score1;
let attendance;
let grade2;
switch (score1) {
  case "A":
    grade2 = "excellent";
    if (attendance < 80) {
      score1 = "B";
      grade2 = "very good";
    }
    break;
  case "B":
    grade2 = "very good";
    if (attendance < 80) {
      score1 = "C";
      grade2 = "not very good";
    }
    break;
  case "C":
    grade2 = "not very good";
    if (attendance < 80) {
      score1 = "D";
      grade2 = "good";
    }
    break;
  case "D":
    grade2 = "good";
    if (attendance < 80) {
      score1 = "F";
      grade2 = "not good";
    }
    break;
  case "F":
    grade2 = "not good";
    break;
}
//23.
let year2;
let IsLeapYear1;
if (year2 % 4 === 0 && year2 % 400 !== 0) IsLeapYear1 = true;
else IsLeapYear1 = false;
//24.
let age2;
let isEmployed;
if (age2 < 18) console.log("student");
else if (age2 > 18 && isEmployed) console.log("Employed adult");
else if (age2 > 18 && !isEmployed) console.log("Unemployed adult");
else if (age2 > 65) console.log("retiree");

//25.
let month2;
let season1;
switch (month2) {
  case 1:
  case 2:
  case 3:
    season1 = "winter";
    break;
  case 4:
  case 5:
  case 6:
    season1 = "spring";
    break;
  case 7:
  case 8:
  case 9:
    season1 = "summer";
    break;
  case 10:
  case 11:
  case 12:
    season1 = "fall";
    break;
}
//26.
let x;
let y;
if (x < 0 && Y < 0) console.log("quadrant 1");
else if (x < 0 && Y > 0) console.log("quadrant 2");
else if (x > 0 && Y > 0) console.log("quadrant 3");
else if (x > 0 && Y < 0) console.log("quadrant 4");
//27. idk how to do this correctly https://commons.wikimedia.org/wiki/File:Phase_diagram_of_water.svg
let temperature1;
let pressure; //pa
if (temperature1 < 0 && pressure >= 109) console.log("solid");
else if (
  temperature1 > 0 &&
  temperature1 < 100 &&
  pressure < 109 &&
  pressure > 100
)
  console.log("liquid");
else if (temperature1 < 0 && pressure > 100) console.log("gas");
//28.
let days;
let month3;
let isLeapYear1;
switch (month3) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    if (isLeapYear1) days = 29;
    else days = 28;
    break;
  default:
    days = 0;
    break;
}
//29.
let a;
let b;
let c;
let canTriangle;
if (a + b < c) canTriangle = false;
else if (a + c < b) canTriangle = false;
else if (ac + b < a) canTriangle = false;
else canTriangle = true;
//30 i dont understand th question
//31
let number4;
let parity1 = number4 % 2 === 0 ? true : false;
//32
let age3;
let canVote1 = age3 > 18 ? true : false;

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
if (number < 0) sign = "-";

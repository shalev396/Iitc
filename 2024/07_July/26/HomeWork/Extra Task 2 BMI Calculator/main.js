//BMI Calculator
//1.
let weightFlag = false;
let hightFlag = false;
let userWeight = 0;
let userHight = 0;
// let userWeight = prompt("what's your wight");
// let userHight = prompt("what's your hight");
//BMI History
let bmiArr = new Array();
let bmiSave = new Object();
let bmiTemp;
let date = new Date();
for (let i = 0; i <= 3; i++) {
  //w
  inputCheck();
  bmiSave = {
    date: date.getDate().toString(),
    weight: userWeight,
    hight: userHight,
    bmiVal: calculateBMI(userWeight, userHight),
  };
  bmiArr.push(bmiSave);
  console.log(calculateBMI(userWeight, userHight));
}
let want = prompt("want to see your history");
if (want === "yes")
  for (let x = 0; x <= 3; x++) {
    bmiTemp = bmiArr[x];
    console.log(
      date.toString() +
        " " +
        bmiTemp.weight.toString() +
        " " +
        bmiTemp.hight.toString() +
        " " +
        bmiTemp.bmiVal +
        " "
    );
  }
//2.
function bmi(weight, hight) {
  return Number(weight) / (Number(hight) * Number(hight));
}
//3.
if (bmi(userWeight, userHight) < 18.5) {
  console.log("Underweight");
} else if (
  bmi(userWeight, userHight) > 18.5 &&
  bmi(userWeight, userHight) < 24.9
) {
  console.log("Normal weight");
} else if (
  bmi(userWeight, userHight) > 25 &&
  bmi(userWeight, userHight) < 29.9
) {
  console.log("Overweight");
} else if (bmi(userWeight, userHight) > 30) {
  console.log("Obese");
}
//4.
function calculateBMI(weight, hight) {
  return Number(weight) / (Number(hight) * Number(hight));
}
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi > 25 && bmi < 29.9) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}
// console.log(calculateBMI(userWeight, userHight));
// console.log(getBMICategory(calculateBMI(userWeight, userHight)));
//5.
function inputCheck() {
  weightFlag = false;
  hightFlag = false;

  while (!weightFlag) {
    userWeight = prompt("what's your wight");
    if (typeof userWeight !== NaN && Number(userWeight) > 0) {
      weightFlag = true;
    } else console.log("invalid input");
  }
  while (!hightFlag) {
    userHight = prompt("what's your hight");
    if (typeof userHight !== NaN && userHight > 0) {
      hightFlag = true;
    } else console.log("invalid input");
  }
}

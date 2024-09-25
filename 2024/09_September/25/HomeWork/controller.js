//here only Handles user actions filtering
//"Handles user actions like adding, editing, deleting, and filtering employees.""
//imports
import { utils } from "./utils.js";
import { service } from "./service.js";
//variables
let mode = ""; //can be `add`/`edit`
let oldEmp = "";
const employsKey = `employs`;
const filteredEmploysKey = `filtered employs`;
let viewMode = `all`; //can be `all`/`filtered`
//sort function
function sort() {
  let value = sortDropdown.value;
  if (!value && value === "") {
    value = "First name descending";
  }
  let temp = "";
  let tempEmploys = utils.getFromStorage(employsKey);
  switch (value) {
    case `First name descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[i].firstName.localeCompare(tempEmploys[j].firstName) > 0
          ) {
            let temp = tempEmploys[i];
            tempEmploys[i] = tempEmploys[j];
            tempEmploys[j] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("First name descending");

      break;
    case `First name ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[j].firstName.localeCompare(tempEmploys[i].firstName) > 0
          ) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("First name ascending");
      break;
    case `Last name ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[j].lastName.localeCompare(tempEmploys[i].lastName) > 0
          ) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Last name ascending");
      break;
    case `Last name descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[i].lastName.localeCompare(tempEmploys[j].lastName) > 0
          ) {
            let temp = tempEmploys[i];
            tempEmploys[i] = tempEmploys[j];
            tempEmploys[j] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Last name descending");
      break;
    case `Age ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].age > tempEmploys[i].age) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Age ascending");
      break;
    case `Age descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].age < tempEmploys[i].age) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Age descending");
      break;
    case `Start Date ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].startDate > tempEmploys[i].startDate) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Start Date ascending");
      break;
    case `Start Date descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].startDate < tempEmploys[i].startDate) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Start Date descending");
      break;
    case `Department descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[i].department.localeCompare(tempEmploys[j].department) >
            0
          ) {
            let temp = tempEmploys[i];
            tempEmploys[i] = tempEmploys[j];
            tempEmploys[j] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Department descending");

      break;
    case `Department ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (
            tempEmploys[j].department.localeCompare(tempEmploys[i].department) >
            0
          ) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Department ascending");
      break;
    case `Salary ascending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].salary > tempEmploys[i].salary) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Salary ascending");
      break;
    case `Salary descending`:
      for (let i = 0; i < tempEmploys.length; i++) {
        for (let j = 0; j < tempEmploys.length; j++) {
          if (tempEmploys[j].salary < tempEmploys[i].salary) {
            let temp = tempEmploys[j];
            tempEmploys[j] = tempEmploys[i];
            tempEmploys[i] = temp;
          }
        }
      }
      utils.saveToStorage(employsKey, tempEmploys);
      console.log("Salary descending");
      break;
  }
}
//filter function
function filter() {
  let value = filterDropdown.value;
  let tempEmploys = utils.getFromStorage(employsKey);
  let filteredEmploys = [];
  if (value === `all`) {
    setViewMode(`all`);
    //all
  } else {
    setViewMode(`filtered`);
    for (let i = 0; i < tempEmploys.length; i++) {
      if (tempEmploys[i].department === value) {
        filteredEmploys.push(tempEmploys[i]);
      }
    }

    utils.saveToStorage(filteredEmploysKey, filteredEmploys);
  }
}
//activate the correct function
function moveToFunction(newEmploy) {
  if (getMode() == "ADD") {
    service.addEmploy(newEmploy);
  } else if (getMode() == "EDIT") {
    let oldEmploy = getOldEmp();
    service.updateEmploy(oldEmploy, newEmploy);
  }
}
//set variable Mode
function setMode(str) {
  mode = str;
}
//get variable Mode
function getMode() {
  return mode;
}
//set variable OldEmp
function setOldEmp(employ) {
  oldEmp = employ;
}
//get variable OldEmp
function getOldEmp() {
  return oldEmp;
}
//set variable ViewMode
function setViewMode(str) {
  viewMode = str;
}
//get variable ViewMode
function getViewMode() {
  return viewMode;
}
//exports
export const controller = {
  moveToFunction,
  setMode,
  setOldEmp,
  getMode,
  getOldEmp,
  filter,
  sort,
  setViewMode,
  getViewMode,
};

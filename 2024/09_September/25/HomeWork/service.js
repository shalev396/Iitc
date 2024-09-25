//here crud ops and localStorage
//"Contains logic for interacting with localStorage and performing CRUD operations."
//imports
import { utils } from "./utils.js";
const employsKey = `employs`;
//resets employs
function createEmploys() {
  let employs = [
    {
      firstName: "Alice",
      lastName: "Smith",
      age: 28,
      startDate: "2020-06-15",
      department: "Marketing",
      salary: 50000,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 35,
      startDate: "2018-01-25",
      department: "Sales",
      salary: 60000,
    },
    {
      firstName: "Emma",
      lastName: "Johnson",
      age: 42,
      startDate: "2015-03-12",
      department: "IT",
      salary: 70000,
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      age: 30,
      startDate: "2019-07-01",
      department: "Finance",
      salary: 55000,
    },
    {
      firstName: "Sophia",
      lastName: "Williams",
      age: 26,
      startDate: "2021-05-20",
      department: "HR",
      salary: 45000,
    },
    {
      firstName: "David",
      lastName: "Taylor",
      age: 39,
      startDate: "2017-09-14",
      department: "Operations",
      salary: 64000,
    },
    {
      firstName: "Laura",
      lastName: "White",
      age: 32,
      startDate: "2016-11-03",
      department: "Logistics",
      salary: 50000,
    },
  ];
  for (let i = 0; i < employs.length; i++) {
    employs[i].id = utils.makeId();
  }
  utils.saveToStorage("employs", employs);
}

//add employ
function addEmploy(employ) {
  let tempEmploys = utils.getFromStorage(employsKey);
  tempEmploys.push(employ);
  console.log("pushed");

  utils.saveToStorage(employsKey, tempEmploys);
}
//fire employ
function removeEmploy(employ) {
  let tempEmploys = utils.getFromStorage(employsKey);
  if (utils.findIndex(tempEmploys, employ) !== -1) {
    tempEmploys.splice(utils.findIndex(tempEmploys, employ), 1);
    utils.saveToStorage(employsKey, tempEmploys);
  }
  return tempEmploys;
}
//edit employ
function updateEmploy(oldEmploy, newEmploy) {
  let tempEmploys = utils.getFromStorage(employsKey);
  if (utils.findIndex(tempEmploys, oldEmploy) !== -1) {
    tempEmploys[utils.findIndex(tempEmploys, oldEmploy)] = newEmploy;
    utils.saveToStorage(employsKey, tempEmploys);
  }
}
//exports
export const service = {
  createEmploys,
  addEmploy,
  removeEmploy,
  updateEmploy,
};

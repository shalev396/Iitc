import { controller } from "./controller.js";
import { utils } from "./utils.js";
const employsKey = `employs`;
//create employs array
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
//delete table
function tableEmploysDestructor() {
  const table = document.getElementById("tableEmploys");
  table.innerHTML = `
            <tbody>
              <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>StartDate</th>
              <th>Department</th>
              <th>Salary</th>
              <th>options</th>
            </tr>
            </tbody>
          `;
}
//refresh table
function refCart() {
  //   window.location.reload();
  tableEmploysDestructor();
  controller.tableEmploysContractor();
}
//add employ
function addEmploy(employ) {
  let tempEmploys = utils.getFromStorage(employsKey);
  tempEmploys.push(employ);
  utils.saveToStorage(tempEmploys);
}
//fire employ
function removeEmploy(employ) {
  let tempEmploys = utils.getFromStorage(employsKey);
  if (utils.findIndex(tempEmploys, employ) !== -1) {
    tempEmploys.splice(utils.findIndex(tempEmploys, employ), 1);
    utils.saveToStorage(tempEmploys);
  }
  return tempEmploys;
}
//edit employ
function updateEmploy(oldEmploy, newEmploy) {
  let tempEmploys = utils.getFromStorage(employsKey);
  if (findIndex(tempEmploys, oldEmploy) !== -1) {
    tempEmploys[findIndex(tempEmploys, oldEmploy)] = newEmploy;
    utils.saveToStorage(employsKey, tempEmploys);
  }
}
export const service = {
  createEmploys,
  refCart,
  addEmploy,
  removeEmploy,
  updateEmploy,
};

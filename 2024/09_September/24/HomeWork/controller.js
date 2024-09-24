import { utils } from "./utils.js";
import { service } from "./service.js";
const employsKey = `employs`;
const employs = localStorage.getItem(employsKey);
const submitButton = document.getElementById("submit");
const newFirstName = document.getElementById("fname");
const newLastName = document.getElementById("lname");
const newAge = document.getElementById("age");
const newDate = document.getElementById("date");
const newDep = document.getElementById("Dep");
const newSalary = document.getElementById("Salary");
submitButton.addEventListener("click", function () {
  console.log("submit");
  const employNew = {
    firstName: newFirstName.textContent,
    lastName: newLastName.textContent,
    age: newAge.textContent,
    startDate: newDate.textContent,
    department: newDep.textContent,
    salary: newSalary.textContent,
  };
  service.addEmploy(employNew);
});
//checks if has employs
if (!employs) {
  service.createEmploys();
  console.log("new");
}
tableEmploysContractor();
//render table
function tableEmploysContractor() {
  let tempEmploys = utils.getFromStorage(employsKey);
  const table = tableEmploys;
  for (let i = 0; i < tempEmploys.length; i++) {
    const row = document.createElement("tr");
    //first name
    const EFName = document.createElement("td");
    EFName.textContent = tempEmploys[i].firstName;
    row.appendChild(EFName);
    //last name
    const ELName = document.createElement("td");
    ELName.textContent = tempEmploys[i].lastName;
    row.appendChild(ELName);
    //age
    const EAge = document.createElement("td");
    EAge.textContent = tempEmploys[i].age;
    row.appendChild(EAge);
    //start date
    const EStartDate = document.createElement("td");
    EStartDate.textContent = tempEmploys[i].startDate;
    row.appendChild(EStartDate);
    //department
    const EDepart = document.createElement("td");
    EDepart.textContent = tempEmploys[i].department;
    row.appendChild(EDepart);
    //salary
    const ESalary = document.createElement("td");
    ESalary.textContent = tempEmploys[i].salary;
    row.appendChild(ESalary);
    //buttons
    const modify = document.createElement("td");
    const modifyEdit = document.createElement("button");
    modifyEdit.textContent = "Edit";
    modifyEdit.addEventListener("click", function () {
      //   updateProductInCart(tempEmploys[i], "-");
      service.refCart();
    });
    const modifyRemove = document.createElement("button");
    modifyRemove.textContent = "Remove";
    modifyRemove.addEventListener("click", function () {
      service.removeEmploy(tempEmploys[i]);
      // service.refCart();
    });
    modify.appendChild(modifyEdit);
    modify.appendChild(modifyRemove);
    row.appendChild(modify);
    table.appendChild(row);
  }
}

export const controller = { tableEmploysContractor };

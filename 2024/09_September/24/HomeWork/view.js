//here only the rendering stuff needs to be
//"Displays the list of employees and provides UI for adding, editing, and deleting employees."
//imports
import { utils } from "./utils.js";
import { service } from "./service.js";
import { controller } from "./controller.js";
//declare variable
const employsKey = `employs`;
const filteredEmploysKey = `filtered employs`;
const employs = localStorage.getItem(employsKey);
//get elements from document
const submitButton = document.getElementById("submit");
const newFirstName = document.getElementById("fname");
const newLastName = document.getElementById("lname");
const newAge = document.getElementById("age");
const newDate = document.getElementById("date");
const newDep = document.getElementById("Dep");
const newSalary = document.getElementById("Salary");
const form = document.getElementById("employForm");
const addEditH1 = document.getElementById("addEditH1");
const addEditBox = document.getElementById("addEditEmploy");
const sortDropdown = document.getElementById("sortDropdown");
const filterDropdown = document.getElementById("filterDropdown");
//checks if has employs
if (!employs) {
  service.createEmploys();
  console.log("new");
}
//filter dropdown
filterDropdown.onchange = function () {
  controller.filter();
  refEmploys();
};
//sort dropdown
sortDropdown.onchange = function () {
  controller.sort();
  refEmploys();
};
//hide add employ box
addEditBox.style.display = "none";
//submitting new employ
function handleForm(event) {
  event.preventDefault();
  const employNew = {
    firstName: newFirstName.value,
    lastName: newLastName.value,
    age: newAge.value,
    startDate: newDate.value,
    department: newDep.value,
    salary: newSalary.value,
  };
  controller.moveToFunction(employNew);
  refEmploys();
  newFirstName.value = "";
  newLastName.value = "";
  newAge.value = "";
  newDate.value = "";
  newDep.value = "";
  newSalary.value = "";
  addEditH1.style.display = "none";
  addEditBox.style.display = "none";
}
form.addEventListener("submit", handleForm);

//activate render table
tableEmploysContractor();
//sort table
controller.sort();
//rerender table as sort
refEmploys();

//render table
function tableEmploysContractor() {
  let tempEmploys = "";
  //if all or filtered are shown
  if (controller.getViewMode() === "all") {
    tempEmploys = utils.getFromStorage(employsKey);
  } else if (controller.getViewMode() === `filtered`) {
    tempEmploys = utils.getFromStorage(filteredEmploysKey);
  }

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
    //edit
    const modifyEdit = document.createElement("button");
    modifyEdit.textContent = "Edit";
    modifyEdit.addEventListener("click", function () {
      controller.setMode("EDIT");
      addEditH1.textContent = "Edit Employ";
      addEditH1.style.display = "block";
      addEditBox.style.display = "block";
      newFirstName.value = tempEmploys[i].firstName;
      newLastName.value = tempEmploys[i].lastName;
      newAge.value = tempEmploys[i].age;
      newDate.value = tempEmploys[i].startDate;
      newDep.value = tempEmploys[i].department;
      newSalary.value = tempEmploys[i].salary;
      controller.setOldEmp(tempEmploys[i]);
      refEmploys();
    });
    //remove
    const modifyRemove = document.createElement("button");
    modifyRemove.textContent = "Remove";
    modifyRemove.addEventListener("click", function () {
      service.removeEmploy(tempEmploys[i]);
      refEmploys();
    });
    modify.appendChild(modifyEdit);
    modify.appendChild(modifyRemove);
    row.appendChild(modify);
    table.appendChild(row);
  }
  //add
  const row = document.createElement("tr");
  const addButtonRow = document.createElement("td");
  addButtonRow.id = "addButton";
  addButtonRow.colSpan = "7";
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.addEventListener("click", function () {
    controller.setMode("ADD");
    addEditH1.textContent = "Add Employ";
    addEditBox.style.display = "block";
    addEditH1.style.display = "block";
    // refEmploys();
  });
  addButtonRow.appendChild(addButton);
  row.appendChild(addButtonRow);

  table.appendChild(row);
}
//unrender table
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
    </tbody>`;
}
//refresh(rerender) table
function refEmploys() {
  //   window.location.reload();
  tableEmploysDestructor();
  tableEmploysContractor();
}
//exports functions
export const view = {
  tableEmploysContractor,
  tableEmploysDestructor,
  refEmploys,
};

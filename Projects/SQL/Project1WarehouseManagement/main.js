//"use strict";
let GlobalResult = undefined;
fetch("http://localhost:3000/array")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text(); // Get the response as text
  })
  .then((text) => {
    if (text) {
      return JSON.parse(text); // Parse the text as JSON if it's not empty
    } else {
      throw new Error("Empty response");
    }
  })
  .then((data) => {
    console.log(data); // Use the array here
  })
  .catch((error) => console.error("Error fetching array:", error));

//let grab =server.;
let query1 = [{ Object: 10 }, { Object: 7 }, { Object: 3 }];
//shows table
const newTable = document.createElement("table"); //w3school
newTable.innerHTML = "<thead><th>Number</th><th>Object</th></thead>";
for (let i = 0; i < query1.length; i++) {
  const newRow = document.createElement("tr");
  const tdNumber = document.createElement("td");
  const tdObject = document.createElement("td");
  tdNumber.textContent = i;
  tdObject.textContent = query1[i].Object;
  newRow.appendChild(tdNumber);
  newRow.appendChild(tdObject);
  newTable.appendChild(newRow);
}
const target = document.getElementById("target");
target.appendChild(newTable).border = 1;

//"use strict";
//game.js
import { GlobalResult } from "./server.js";
console.log(GlobalResult);
//
// const getArrayEntry = async (filename) => { fetch (filename) then((response
// ) => response.json) then(parser => parser.parse) then(result => result[0].data.entries[0].value) }
// const getArrayFromJSFile = async 0 => { return await getArrayEntry(
// "/assets/js/animalList.js") }
//
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

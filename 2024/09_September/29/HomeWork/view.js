//here only the rendering stuff needs to be
//"Displays the list of questions and provides solutions"
//imports
import { utils } from "./utils.js";
import { service } from "./service.js";
import { controller } from "./controller.js";
//declare variable
const questionsKey = `question`;
const questions = utils.getFromStorage(questionsKey);
const myProgress = 50;
//get elements from document
const tableQuestions = document.getElementById("tableQuestions");
//checks if has employs
if (!questions || questions.length === 0) {
  service.createQuestions();
}

//activate render table
tableQuestionsContractor();
//render table
function tableQuestionsContractor() {
  let tempQuestions = "";

  tempQuestions = utils.getFromStorage(questionsKey);

  const table = tableQuestions;

  for (let i = 1; i <= tempQuestions.length; i++) {
    const row = document.createElement("tr");
    //number
    const QNum = document.createElement("td");
    QNum.textContent = tempQuestions[i - 1].number;
    row.appendChild(QNum);
    //question
    const QQuestion = document.createElement("td");
    QQuestion.textContent = tempQuestions[i - 1].question;
    row.appendChild(QQuestion);
    //solutions
    const QSolution = document.createElement("td");

    if (i <= myProgress) {
      const functionName = `solution${i}`;
      QSolution.textContent = controller.doFunc(functionName);
      console.log(QSolution.textContent);
    } else QSolution.textContent = tempQuestions[i - 1].solution;
    row.appendChild(QSolution);
    table.appendChild(row);
  }
}
//unrender table
function tableQuestionsDestructor() {
  const table = document.getElementById("tableQuestions");
  table.innerHTML = `
    <tbody>
      <tr>
        <th>question number</th>
        <th>question</th>
        <th>answer</th>
      </tr>
    </tbody>`;
}
//refresh(rerender) table
function refQuestions() {
  //   window.location.reload();
  tableQuestionsDestructor();
  tableQuestionsContractor();
}
//exports functions
export const view = {
  tableQuestionsDestructor,
  tableQuestionsContractor,
  refQuestions,
};

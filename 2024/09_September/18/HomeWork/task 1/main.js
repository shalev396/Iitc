"use strict";
const gList = document.getElementById("list");
const gTitleInput = document.getElementById("inputTitle");
const gDescInput = document.getElementById("inputDesc");
const gStageInput = document.getElementById("inputStage");
const gAddButton = document.getElementById("addBut");
const exampleList = [];
let countToDo = parseInt(localStorage.getItem("ToDoCount"));
if (countToDo) {
  getFromStorage();
} else {
  countToDo = 0;
}
//newId
function getId() {
  countToDo += 1;
  return countToDo;
}
gAddButton.addEventListener("click", function () {
  addToStorage(gTitleInput.value, gDescInput.value, gStageInput.value);
});
//get all tasks
function getFromStorage() {
  for (let i = 0; i < countToDo; i++) {
    exampleList[i] = {
      uid: localStorage.getItem(`uid${i + 1}`),
      title: localStorage.getItem(`title${i + 1}`),
      desc: localStorage.getItem(`desc${i + 1}`),
      stage: localStorage.getItem(`stage${i + 1}`),
    };
  }
}
//show all tasks
for (let i = 0; i < exampleList.length; i++) {
  duplicateDiv(i, exampleList[i]);
}
//add to storage
function addToStorage(title1, desc1, stage1) {
  let item = { uid: getId(), title: title1, desc: desc1, stage: stage1 };
  exampleList.push(item);
  console.log(item);
  console.log(countToDo);

  duplicateDiv(countToDo - 1, item);
  localStorage.setItem(`ToDoCount`, countToDo);
  localStorage.setItem(`uid${item.uid}`, item.uid);
  localStorage.setItem(`title${item.uid}`, item.title);
  localStorage.setItem(`desc${item.uid}`, item.desc);
  localStorage.setItem(`stage${item.uid}`, item.stage);
}
//add click listener to paragraph
function addListener(p) {
  p.addEventListener("click", function () {
    p.textContent = prompt("edit");
  });
}

//duplicate div
function duplicateDiv(i, item) {
  let originalDiv = document.getElementById(`task${i}`);
  let clone = originalDiv.cloneNode(true);
  clone.removeAttribute("id");
  clone.id = `task${i + 1}`;
  //
  let children = clone.children;
  children[0].id = `taskUID${i + 1}`;
  children[0].textContent = item.uid;
  addListener(children[0]);
  children[1].id = `taskTitle${i + 1}`;
  children[1].textContent = item.title;
  addListener(children[1]);
  children[2].id = `taskDesc${i + 1}`;
  children[2].textContent = item.desc;
  addListener(children[2]);
  children[3].id = `taskStage${i + 1}`;
  children[3].textContent = item.stage;
  addListener(children[3]);
  children[4].id = `deleteBut${i + 1}`;
  children[4].addEventListener("click", function () {
    clone.style.display - "none";
    clone.innerHTML = null;
    exampleList[i] = null;
    //del
    exampleList.splice(i, 1);
    localStorage.removeItem(`uid${i}`);
    localStorage.removeItem(`title${i}`);
    localStorage.removeItem(`desc${i}`);
    localStorage.removeItem(`stage${i}`);
    localStorage.setItem("ToDoCount", countToDo - 1);
    fixArr();
  });
  gList.appendChild(clone);
  document.getElementById(`task${i + 1}`).style.display = "flex";
}
function fixArr() {
  for (let i = 0; i < exampleList.length; i++) {
    exampleList[i].uid = i;
  }
}
//keep on the end of code
document.getElementById(`task0`).style.display = "none";

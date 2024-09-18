"use strict";
const gList = document.getElementById("list");
const gTitleInput = document.getElementById("inputTitle");
const gDescInput = document.getElementById("inputDesc");
const gStageInput = document.getElementById("inputStage");
const gAddButton = document.getElementById("addBut");
const exampleList = [
  { uid: 1, title: "title1", desc: "desc1", stage: "progress" },
  { uid: 2, title: "title2", desc: "desc2", stage: "progress" },
  { uid: 3, title: "title3", desc: "desc3", stage: "completed" },
];
let count = 3;
gAddButton.addEventListener("click", function () {
  addToStorage(gTitleInput.value, gDescInput.value, gStageInput.value);
  gTitleInput.value = "";
  gDescInput.value = "";
  gStageInput.value = "";
});
function addToStorage(title, desc, stage) {
  count += 1;
  console.log(exampleList);

  exampleList.push({ uid: count, title: title, desc: desc, stage: stage });
  console.log(
    exampleList[exampleList.length - 1].uid - 1,
    exampleList[exampleList.length - 1]
  );

  duplicateDiv(
    exampleList[exampleList.length - 1].uid - 1,
    exampleList[exampleList.length - 1]
  );
  // localStorage.setItem();
}

for (let i = 0; i < exampleList.length; i++) {
  duplicateDiv(i, exampleList[i]);
}
function createNewTask() {}
function addListener(p) {
  p.addEventListener("click", function () {
    p.textContent = prompt("edit");
  });
}
function duplicateDiv(i, item) {
  let originalDiv = document.getElementById(`task${i}`);
  console.log(i);

  let clone = originalDiv.cloneNode(true);
  clone.removeAttribute("id");
  clone.id = `task${i + 1}`;
  //
  if (item.stage === "completed") {
    clone.style.backgroundColor = "Lightgreen";
  } else {
    clone.style.backgroundColor = "hsl(0, 0%, 100%)";
  }
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
  // addListener(children[3]);
  children[4].id = `deleteBut${i + 1}`;
  children[4].addEventListener("click", function () {
    clone.style.display - "none";
    clone.innerHTML = null;
    exampleList[i] = null;
    clone.style.display = "none";
  });
  children[3].addEventListener("click", function () {
    if (item.stage === "completed") {
      item.stage = "progress";
      clone.style.backgroundColor = "hsl(0, 0%, 100%)";
      children[3].textContent = item.stage;
    } else {
      item.stage = "completed";
      clone.style.backgroundColor = "lightgreen";
      children[3].textContent = item.stage;
    }
  });
  gList.appendChild(clone);
}
//keep on the end of code
document.getElementById(`task0`).style.display = "none";

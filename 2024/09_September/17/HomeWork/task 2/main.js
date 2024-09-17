const addItemBtn = document.getElementById("add");
const itemList = document.querySelector("ul");

const remFirstItemBtn = document.getElementById("removeFirst");
const remLastItemBtn = document.getElementById("removeLast");
const remSelItemBtn = document.getElementById("removeSel");

addItemBtn.addEventListener("click", function () {
  addItem();
});

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  newItem.addEventListener("click", function () {
    selectItem(newItem);
  });
  itemList.appendChild(newItem);
}

function selectItem(selectedItem) {
  selectedItem.classList.add("selected");
  selectedItem.style.fontWeight = "bold";
}
remFirstItemBtn.addEventListener("click", function () {
  removeFirst();
});
function removeFirst() {
  let liArr = document.querySelectorAll("li");
  liArr[0].outerHTML = "";
}
remLastItemBtn.addEventListener("click", function () {
  removeLast();
});
function removeLast() {
  let liArr = document.querySelectorAll("li");
  liArr[liArr.length - 1].outerHTML = "";
}
remSelItemBtn.addEventListener("click", function () {
  removeSelected();
});
function removeSelected() {
  let liArr = document.querySelectorAll("li");
  for (let i = 0; i < liArr.length; i++) {
    if (liArr[i].getAttribute("class") === "selected") {
      liArr[i].outerHTML = "";
    }
  }
}

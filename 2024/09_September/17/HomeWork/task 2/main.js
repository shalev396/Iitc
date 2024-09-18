const addItemBtn = document.getElementById("add");
const itemList = document.querySelector("ul");

const remFirstItemBtn = document.getElementById("removeFirst");
const remLastItemBtn = document.getElementById("removeLast");
const remSelItemBtn = document.getElementById("removeSel");

addItemBtn.addEventListener("click", function () {
  addItem();
});

itemList.addEventListener("click", function (ev) {
  selectItem(ev.target);
});

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  // newItem.addEventListener("click", function () {
  //   selectItem(newItem);
  // });

  itemList.appendChild(newItem);
}

function selectItem(selectedItem) {
  // selectedItem.classList.toggle("selected");

  // const items = itemList.getElementsByTagName("li");
  // for (let i = 0; i < items.length; i++) {
  //   items[i].classList.remove("selected")
  // }

  // itemList.querySelector(".selected")?.classList.remove("selected");

  const currentSelectedItem = itemList.querySelector(".selected");
  if (currentSelectedItem === selectedItem) {
    selectedItem.classList.toggle("selected");
  } else {
    currentSelectedItem?.classList.remove("selected");
    selectedItem.classList.add("selected");
  }
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

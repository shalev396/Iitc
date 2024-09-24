"use strict";
// catalog on variable mode
let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 600 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Keyboard", price: 50 },
  { id: 5, name: "Mouse", price: 30 },
  { id: 6, name: "Monitor", price: 300 },
  { id: 7, name: "Printer", price: 150 },
  { id: 8, name: "Webcam", price: 80 },
  { id: 9, name: "USB Cable", price: 10 },
  { id: 10, name: "External Hard Drive", price: 120 },
];
//cart on localStorage mode
let cart = [];

//switching between saving modes
const GLOBAL_MODE = 2; //saving at 1=variable, 2=localStorage
//set element references
const sortDropdown = document.getElementById("sortDropdown");
const tableCart = document.getElementById("tableCart");
const tableCatalog = document.getElementById("tableCatalog");
let AllTotalCell = ""; //this element is defined in the function scope
sortDropdown.onchange = filter; //activate filter() when dropdown option change
//set tables
tableCartContractor();
tableCatalogContractor();

//functions
//CRUD cart
function getCart() {
  if (GLOBAL_MODE === 1) {
    return [...cart];
  } else if (GLOBAL_MODE === 2) {
    let jsonCart = localStorage.getItem("cart");
    if (jsonCart) {
      return JSON.parse(jsonCart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }
  }
}

function setCart(newCart) {
  if (GLOBAL_MODE === 1) {
    cart = newCart;
  } else if (GLOBAL_MODE === 2) {
    let jsonCart = JSON.stringify(newCart);

    localStorage.setItem("cart", jsonCart);
  }
}

function addProduct(product) {
  let tempCart = getCart();
  product.amount = 1;
  tempCart.push(product);
  setCart(tempCart);
}
function removeProduct(product) {
  let tempCart = getCart();

  if (findIndex(tempCart, product) !== -1) {
    tempCart.splice(findIndex(tempCart, product), 1);
    setCart(tempCart);
  }
  return tempCart;
}

function updateProductInCart(product, op) {
  let tempCart = getCart();
  if (findIndex(tempCart, product) !== -1) {
    if (op === "+") {
      tempCart[findIndex(tempCart, product)].amount++;
      setCart(tempCart);
    } else if (op === "-") {
      tempCart[findIndex(tempCart, product)].amount--;
      if (tempCart[findIndex(tempCart, product)].amount === 0) {
        setCart(removeProduct(product));
      } else {
        setCart(tempCart);
      }
    }
  }
}
//CRUD table cart
function tableCartContractor() {
  let tempCart = getCart();

  const table = tableCart;
  for (let i = 0; i < tempCart.length; i++) {
    const row = document.createElement("tr");

    const pName = document.createElement("td");
    pName.textContent = tempCart[i].name;

    row.appendChild(pName);

    const pPrice = document.createElement("td");

    pPrice.textContent = tempCart[i].price;
    row.appendChild(pPrice);

    const pAmount = document.createElement("td");
    pAmount.textContent = tempCart[i].amount;
    row.appendChild(pAmount);

    const pTotal = document.createElement("td");
    pTotal.textContent = tempCart[i].amount * tempCart[i].price;
    row.appendChild(pTotal);

    const modify = document.createElement("td");
    const modifyAdd = document.createElement("button");
    modifyAdd.textContent = "+";
    modifyAdd.addEventListener("click", function () {
      updateProductInCart(tempCart[i], "+");
      refCart();
    });
    const modifyMinus = document.createElement("button");
    modifyMinus.textContent = "-";
    modifyMinus.addEventListener("click", function () {
      updateProductInCart(tempCart[i], "-");
      refCart();
    });
    const modifyRemove = document.createElement("button");
    modifyRemove.textContent = "Remove";
    modifyRemove.addEventListener("click", function () {
      removeProduct(tempCart[i]);
      refCart();
    });
    modify.appendChild(modifyAdd);
    modify.appendChild(modifyMinus);
    modify.appendChild(modifyRemove);
    row.appendChild(modify);

    table.appendChild(row);
  }
  const row = document.createElement("tr");
  AllTotalCell = document.createElement("td");
  AllTotalCell.id = "TotalP";
  AllTotalCell.colSpan = "5";

  row.appendChild(AllTotalCell);
  table.appendChild(row);

  updateSum();
}
function tableCartDestructor() {
  const table = document.getElementById("tableCart");
  table.innerHTML = `
      <tbody>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>modify</th>
        </tr>
      </tbody>
    `;
}
function refCart() {
  //   window.location.reload();
  tableCartDestructor();
  tableCartContractor();
}
function updateSum() {
  let tempCart = getCart();
  let sum = 0;
  for (let i = 0; i < tempCart.length; i++) {
    sum += tempCart[i].amount * tempCart[i].price;
  }
  AllTotalCell.textContent = `Overall Total: ${sum}`;
}
//CRUD catalog //no d
function getProducts() {
  return [...products];
}
function setProducts(newProducts) {
  products = newProducts;
}
//not in used
function refCatalog() {
  //   window.location.reload();
  tableCatalogDestructor();
  tableCatalogContractor();
}
//CRUD table catalog
function tableCatalogContractor() {
  let tempCart = getCart();
  let tempProducts = getProducts();

  const table = tableCatalog;
  for (let i = 0; i < tempProducts.length; i++) {
    const row = document.createElement("tr");

    const pName = document.createElement("td");
    pName.textContent = tempProducts[i].name;

    row.appendChild(pName);

    const pPrice = document.createElement("td");

    pPrice.textContent = tempProducts[i].price;
    row.appendChild(pPrice);

    const modify = document.createElement("td");

    const modifyAddCart = document.createElement("button");
    modifyAddCart.textContent = "add to cart";
    modifyAddCart.addEventListener("click", function () {
      if (hasProduct(tempProducts[i])) {
        updateProductInCart(tempProducts[i], "+");
      } else {
        addProduct(tempProducts[i]);
      }
      refCart();
    });
    modify.appendChild(modifyAddCart);
    row.appendChild(modify);

    table.appendChild(row);
  }
  updateSum();
}
//not in use
function tableCatalogDestructor() {
  const table = document.getElementById("tableCart");
  table.innerHTML = `
        <tbody>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th>modify</th>
          </tr>
        </tbody>
      `;
}
function hasProduct(product) {
  let tempCart = getCart();
  for (let i = 0; i < tempCart.length; i++)
    if (tempCart[i].id === product.id) return true;

  return false;
}
//filter
function filter() {
  let value = sortDropdown.value;
  let temp = "";
  let tempCart = getCart();
  switch (value) {
    case `Name`:
      for (let i = 0; i < tempCart.length; i++) {
        for (let j = 0; j < tempCart.length; j++) {
          if (tempCart[i].name.localeCompare(tempCart[j].name) > 0) {
            let temp = tempCart[i];
            tempCart[i] = tempCart[j];
            tempCart[j] = temp;
          }
        }
      }
      setCart(tempCart);
      refCart();
      break;
    case `Price`:
      for (let i = 0; i < tempCart.length; i++) {
        for (let j = 0; j < tempCart.length; j++) {
          if (tempCart[i].price < tempCart[j].price) {
            temp = tempCart[i];
            tempCart[i] = tempCart[j];
            tempCart[j] = temp;
          }
        }
      }
      setCart(tempCart);
      refCart();
      break;
    case `Total`:
      for (let i = 0; i < tempCart.length; i++) {
        for (let j = 0; j < tempCart.length; j++) {
          if (
            tempCart[i].price * tempCart[i].amount <
            tempCart[j].price * tempCart[j].amount
          ) {
            temp = tempCart[i];
            tempCart[i] = tempCart[j];
            tempCart[j] = temp;
          }
        }
      }
      setCart(tempCart);
      refCart();
      break;
  }
}
//find index // indexof is not working expectedly because on every "read" from localStorage i change the ref of the array
function findIndex(tempCart, product) {
  for (let i = 0; i < tempCart.length; i++)
    if (tempCart[i].id === product.id) return i;

  return -1;
}

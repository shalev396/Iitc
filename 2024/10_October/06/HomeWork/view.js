//imports
// import { utils } from "./utils.js";
// import { service } from "./service.js";
// import { controller } from "./controller.js";
//"cards database"
const cards = [
  {
    number: "1234",
    uid: "abcd",
    pin: "1234",
    count: 0,
    blocked: false,
    balance: 1000,
  },
  {
    number: "5678",
    uid: "efgh",
    pin: "5678",
    count: 0,
    blocked: false,
    balance: 500,
  },
  {
    number: "9876",
    uid: "ijkl",
    pin: "9876",
    count: 0,
    blocked: false,
    balance: 2000,
  },
];
let currentCard = null; //current card
// States
let isIdle = true;
let currentOperation = null;
//html
const idleHTML = `<h1>Idle</h1><p>Click anywhere to start</p>`;
const homeHtml = `<h1>Welcome to Maze Bank ATM</h1><p>Please enter your card</p><input type="text" id="cardnumber" placeholder="Enter your card number"/><button id="addCard">Insert</button>`;
const sorryHTML = `<h1>Fraud detected</h1><p>Your account is blocked</p><button id="goHome">Return to Home</button>`;
const pinHTML = `<h1>Enter PIN</h1><p>Please enter your PIN</p><input type="password" id="pinInput" placeholder="Enter your PIN"/><button id="submitPin">Submit</button>`;
const optionsHTML = `<h1>Choose Operation</h1><button id="checkBalance">Check Balance</button><button id="withdraw">Withdraw Money</button><button id="deposit">Deposit Money</button>`;
const withdrawHTML = `<h1>Withdraw Money</h1><input type="number" id="withdrawAmount" placeholder="Enter amount"/><button id="submitWithdraw">Submit</button>`;
const depositHTML = `<h1>Deposit Money</h1><input type="number" id="depositAmount" placeholder="Enter amount"/><button id="submitDeposit">Submit</button>`;
const successHTML = `<h1>Transaction Successful</h1><p>Operation completed successfully</p><button id="goHome">Return to Home</button>`;
const errorHTML = `<h1>Transaction Failed</h1><p>Insufficient funds</p><button id="goHome">Return to Home</button>`;
const content = document.getElementById("content");
// going back to home
function goToHome() {
  content.innerHTML = homeHtml;
  handleCardInsertion();
}
// card insertion
function handleCardInsertion() {
  const addCard = document.getElementById("addCard");
  addCard.addEventListener("click", function () {
    const cardnumber = document.getElementById("cardnumber").value;
    currentCard = cards.find((card) => card.number === cardnumber);

const lat = "33";
const lon = "33";
const APIKey = `ee97b04a747bf9d781756c80e59bb04f`;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

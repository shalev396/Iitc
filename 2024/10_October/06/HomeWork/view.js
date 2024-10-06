//imports
import { utils } from "./utils.js";
import { service } from "./service.js";
import { controller } from "./controller.js";
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

    if (currentCard) {
      if (currentCard.blocked) {
        alert("Your account is blocked.");
        content.innerHTML = sorryHTML;
        document.getElementById("goHome").addEventListener("click", goToHome);
      } else {
        content.innerHTML = pinHTML;
        handlePinInput();
      }
    } else {
      alert("Your card is not supported.");
      goToHome();
    }
  });
}
// PIN verification
function handlePinInput() {
  const submitPin = document.getElementById("submitPin");
  submitPin.addEventListener("click", function () {
    const enteredPin = document.getElementById("pinInput").value;
    if (enteredPin === currentCard.pin) {
      currentCard.count = 0;
      content.innerHTML = optionsHTML;
      handleOperations();
    } else {
      currentCard.count++;
      if (currentCard.count >= 3) {
        currentCard.blocked = true;
        content.innerHTML = sorryHTML;
        document.getElementById("goHome").addEventListener("click", goToHome);
      } else {
        alert("Incorrect PIN. Try again.");
        handlePinInput();
      }
    }
  });
}
// operations
function handleOperations() {
  const checkBalance = document.getElementById("checkBalance");
  const withdraw = document.getElementById("withdraw");
  const deposit = document.getElementById("deposit");

  checkBalance.addEventListener("click", function () {
    alert(`Your balance is $${currentCard.balance}`);
    goToHome();
  });

  withdraw.addEventListener("click", function () {
    content.innerHTML = withdrawHTML;
    handleWithdraw();
  });

  deposit.addEventListener("click", function () {
    content.innerHTML = depositHTML;
    handleDeposit();
  });
}
// withdrawal
function handleWithdraw() {
  const submitWithdraw = document.getElementById("submitWithdraw");
  submitWithdraw.addEventListener("click", function () {
    const amount = parseInt(document.getElementById("withdrawAmount").value);
    if (amount > currentCard.balance) {
      content.innerHTML = errorHTML;
    } else {
      currentCard.balance -= amount;
      content.innerHTML = successHTML;
    }
    document.getElementById("goHome").addEventListener("click", goToHome);
  });
}
// deposit
function handleDeposit() {
  const submitDeposit = document.getElementById("submitDeposit");
  submitDeposit.addEventListener("click", function () {
    const amount = parseInt(document.getElementById("depositAmount").value);
    if (amount > 0) {
      currentCard.balance += amount;
      content.innerHTML = successHTML;
    } else {
      alert("Enter a valid amount.");
    }
    document.getElementById("goHome").addEventListener("click", goToHome);
  });
}
// idle mode
content.innerHTML = idleHTML;
content.addEventListener("click", function () {
  if (isIdle || content.innerHTML === sorryHTML) {
    goToHome();
  }
  isIdle = false;
});

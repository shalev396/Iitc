//ATM Simulation
//1.
const account = "12345";
let balance = 1234.56;
let attempt = 0;
const pinCode = "1234";
let maxWithdrawalLimit = 100;
//2.
function pinVerify(code) {
  if (pinCode === code && attempt < 3) return true;
  else attempt++;
  {
    if (attempt >= 4) console.log("locked out");
    else console.log("try again");
    return false;
  }
}
//3.
function accountBalance() {
  return balance;
}
//4.
function withdrawal(amount) {
  if (amount <= maxWithdrawalLimit && amount <= balance) {
    balance -= amount;
    return balance;
  }
  return "can'nt withdrawal from this account due to insufficient balance or above the withdrawal limit";
}
//5. used "npm install prompt"
function deposit(amount) {
  balance += amount;
  return balance;
}
function atm() {
  let action = prompt("check balance, withdrawal, deposit");
  switch (action) {
    case "check balance": {
      console.log("success");
      return accountBalance();
    }
    case "withdrawal": {
      console.log("success");
      return withdrawal(prompt("how much to withdrawal"));
    }
    case "deposit": {
      console.log("success");
      return deposit(prompt("how much to deposit"));
    }
    default:
      return "invalid input";
  }
}
function getAccount(accountNum) {
  if (accountNum === account) {
    return true;
  }
  return false;
}
function atmScript() {
  let tAccount = prompt("enter account number");
  if (getAccount(tAccount.toString())) {
    let tPin = prompt("enter PIN");
    if (pinVerify(tPin.toString())) {
      console.log(atm());
    }
  } else console.log("account number invalid");
  return null;
}
while (true) atmScript();

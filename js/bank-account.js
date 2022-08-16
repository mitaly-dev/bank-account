//deposit js
document.getElementById("deposit-btn").addEventListener("click", function () {
  let newDepositElement = document.getElementById("deposit-input");
  let newDeposit = newDepositElement.value;
  newDeposit = parseFloat(newDeposit);

  let prevDepositElement = document.getElementById("prev-deposit");
  let prevDeposit = prevDepositElement.innerText;
  prevDeposit = parseFloat(prevDeposit);

  let prevBalanceElement = document.getElementById("prev-balance");
  let prevBalance = prevBalanceElement.innerText;
  prevBalance = parseFloat(prevBalance);

  newDepositElement.value = "";
  if (isNaN(newDeposit)) {
    return alert("Please provide us a valid number");
  }

  prevDepositElement.innerText = prevDeposit + newDeposit;

  prevBalanceElement.innerText = prevBalance + newDeposit;
});

//withdraw js

document.getElementById("withdraw-btn").addEventListener("click", function () {
  let newWithdrawElement = document.getElementById("withdraw-input");
  let newWithdraw = newWithdrawElement.value;
  newWithdraw = parseFloat(newWithdraw);

  let prevWithdrawElement = document.getElementById("prev-withdraw");
  let prevWithdraw = prevWithdrawElement.innerText;
  prevWithdraw = parseFloat(prevWithdraw);

  let prevBalanceEle = document.getElementById("prev-balance");
  let prevBalance = prevBalanceEle.innerText;
  prevBalance = parseFloat(prevBalance);

  newWithdrawElement.value = "";

  if (isNaN(newWithdraw)) {
    return alert("Please provide us a valid number");
  } else if (newWithdraw > prevBalance) {
    alert(`sorry.... You have $${prevBalance}`);
    return;
  }

  prevWithdrawElement.innerText = prevWithdraw + newWithdraw;

  prevBalanceEle.innerText = prevBalance - newWithdraw;
});

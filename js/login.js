let login = document.getElementById("login-btn");
login.addEventListener("click", function () {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let password = document.getElementById("password");
  let passwordValue = password.value;
  email.value == "";
  password.value == "";
  login.style.backgroundColor = "red";
  if (emailValue.includes("@gmail.com") == true && passwordValue == "mybank") {
    window.location.href = "./bank-account.html";
  }
});

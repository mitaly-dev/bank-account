let login = document.getElementById("login-btn");
login.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  login.style.backgroundColor = "red";
  if (
    email.value.includes("@gmail.com") == true &&
    password.value == "mybank"
  ) {
    window.location.href = "./bank-account.html";
    email.value == "an";
    password.value == "an";
  }
});

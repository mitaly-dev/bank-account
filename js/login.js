document.getElementById("login-btn").addEventListener("click", function () {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let password = document.getElementById("password");
  let passwordValue = password.value;
  email.value == "";
  password.value == "";
  if (emailValue.includes("@gmail.com") == true && passwordValue == "mybank") {
    window.location.href = "./bank-account.html";
  } else {
    return alert("Please provide your valid email and password");
  }
});

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is Required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is Required");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is Required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password is Required");
  } else {
    showSuccess(password2);
  }
});

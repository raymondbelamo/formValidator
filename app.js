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

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(
        input,
        `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} Is Required`
      );
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    showError(
      input,
      `${input.id.charAt(0).toUpperCase() +
        input.id.slice(1)} Must Have ${min} to ${max} Characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkPassword(password, password2);

  // if (username.value === "") {
  //   showError(username, "Username is Required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email is Required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Enter valid email");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password is Required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === "") {
  //   showError(password2, "Password is Required");
  // } else {
  //   showSuccess(password2);
  // }
});

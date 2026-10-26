function checkEmail(value) {
  if (value.length > 3 && value.includes("@") && value.includes(".")) {
    return true;
  }
  return false;
}

function checkPassword(value) {
  if (value.length > 8) {
    return true;
  }
  return false;
}

function checkFormValidity(emailEntered, passValue) {
  if (checkEmail(emailEntered) && checkPassword(passValue)) {
    document.querySelector("#successMsg").textContent = "All good to go!";
  } else {
    document.querySelector("#successMsg").textContent = "";
  }
}

let emailEntered = "";
let passValue = "";
document.querySelector("#email").addEventListener("input", () => {
  emailEntered = document.querySelector("#email").value;
  if (checkEmail(emailEntered)) {
    document.querySelector("#emailError").textContent = "";
  } else {
    document.querySelector("#emailError").textContent =
      "Make sure email is more than 3 characters and has @ and a .";
  }
  checkFormValidity(emailEntered, passValue);
});

document.querySelector("#password").addEventListener("input", () => {
  passValue = document.querySelector("#password").value;
  if (checkPassword(passValue)) {
    document.querySelector("#passwordError").textContent = "";
  } else {
    document.querySelector("#passwordError").textContent =
      "Make sure password is more than 8 characters.";
  }
  checkFormValidity(emailEntered, passValue);
});

document.querySelector("#submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (checkEmail(emailEntered) && checkPassword(passValue)) {
    if (confirm("Are you sure you want to submit?")) {
      alert("successful signup!");
    } else {
      document.querySelector("#myForm").reset();
      document.querySelector("#successMsg").textContent = "";
    }
  }
});

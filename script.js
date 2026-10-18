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

document.querySelector("#email").addEventListener("input", () => {
  let emailEntered = document.querySelector("#email").value;
  if (checkEmail(emailEntered)) {
    document.querySelector("#emailError").textContent = "";
  } else {
    document.querySelector("#emailError").textContent =
      "Make sure email is more than 3 characters and has @ and a .";
  }
});

document.querySelector("#password").addEventListener("input", () => {
  let passValue = document.querySelector("#password").value;
  if (checkPassword(passValue)) {
    document.querySelector("#passwordError").textContent = "";
  } else {
    document.querySelector("#passwordError").textContent =
      "Make sure password is more than 8 characters.";
  }
});
console.log(screen.height);
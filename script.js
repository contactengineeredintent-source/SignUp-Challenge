function checkEmail(value) {
  if (value.length > 3 && value.includes("@") && value.includes(".")) {
    return true;
  }
  return false;
}

function checkPassword(value) {
  if (value.length >= 8) {
    return true;
  }
  return false;
}

function checkFormValidity() {
  let emailEntered = document.querySelector("#email").value;
  let passValue = document.querySelector("#password").value;
  if (checkEmail(emailEntered) && checkPassword(passValue)) {
    document.querySelector("#successMsg").textContent = "All good to go!";
  }
  else{
    document.querySelector("#successMsg").textContent = "";
  }
}

document.querySelector("#email").addEventListener("input", () => {
  let emailEntered = document.querySelector("#email").value;
  if (checkEmail(emailEntered)) {
    document.querySelector("#emailError").textContent = "";
  } else {
    document.querySelector("#emailError").textContent =
      "Make sure email is more than 3 characters and has @ and a .";
  }
  checkFormValidity();
});

document.querySelector("#password").addEventListener("input", () => {
  let passValue = document.querySelector("#password").value;
  if (checkPassword(passValue)) {
    document.querySelector("#passwordError").textContent = "";
  } else {
    document.querySelector("#passwordError").textContent =
      "Make sure password is more than 8 characters.";
  }
  checkFormValidity();
});

document.querySelector("#submitBtn").addEventListener("click",(e)=>{
  e.preventDefault();
  if(confirm("Are you sure you want to submit?")){
    alert("successful signup!");
  }
  else{
    document.querySelector("#myForm").reset();
  }
  
});

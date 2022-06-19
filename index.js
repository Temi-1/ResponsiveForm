const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
var fnameError = document.getElementById("fname-error");
var fnameIcon = document.getElementById("fname-error-svg");
var lnameError = document.getElementById("lname-error");
var lnameIcon = document.getElementById("lname-error-svg");
var emailError = document.getElementById("email-error");
var emailIcon = document.getElementById("email-error-svg");
var pwdError = document.getElementById("pwd-error");
var pwdIcon = document.getElementById("pwd-error-svg");

function formValidate() {
  if (fname.value === "") {
    fnameError.innerHTML = "First Name cannot be empty";
    fnameIcon.hidden = false;
    setTimeout(function () {
      fnameError.innerHTML = "";
      fnameIcon.hidden = true;
    }, 2000);
  }
  if (lname.value === "") {
    lnameError.innerHTML = "Last Name cannot be empty";
    lnameIcon.hidden = false;
    setTimeout(function () {
      lnameError.innerHTML = "";
      lnameIcon.hidden = true;
    }, 2000);
  }
  if (validateEmail(email.value) == false) {
    emailError.innerHTML = "Looks like this is not an email";
    emailIcon.hidden = false;
    setTimeout(function () {
      emailError.innerHTML = "";
      emailIcon.hidden = true;
    }, 2000);
  }
  if (password.value === "") {
    pwdError.innerHTML = "Password cannot be empty";
    pwdIcon.hidden = false;
    setTimeout(function () {
      pwdError.innerHTML = "";
      pwdIcon.hidden = true;
    }, 2000);
  }
}

function validateEmail(passedEmail) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(passedEmail);
}
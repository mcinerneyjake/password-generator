// This is a random password generator.

const btn = document.getElementById("generate");
const textBox = document.getElementById("password-container");
const textBoxInput = document.getElementById("password-text");

// This function acts as the actual generator.

btn.addEventListener("click", function randomPassword() {
  var length = 20,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (btn.clicked === true) {
    textBoxInput.textContent = "Error";
  } else {
    textBoxInput.textContent = retVal.valueOf("");
  }
  return retVal.valueOf("");
});

const nums = document.getElementById("nums");
const uppers = document.getElementById("uppers");
const lowers = document.getElementById("lowers");
const symbols = document.getElementById("symbols");

nums.addEventListener("change", function () {
  if (nums.checked === true) {
    textBoxInput.textContent = 1234567890;
  } else {
    textBoxInput.textContent = "Click 'Generate' button again.";
  }
});

uppers.addEventListener("change", function () {
  if (uppers.checked === true) {
    textBoxInput.textContent = "UPPERCASE";
  } else {
    textBoxInput.textContent = "Click 'Generate' button again.";
  }
});

lowers.addEventListener("change", function () {
  if (lowers.checked === true) {
    textBoxInput.textContent = "lowercase";
  } else {
    textBoxInput.textContent = "Click 'Generate' button again.";
  }
});

symbols.addEventListener("change", function () {
  if (symbols.checked === true) {
    textBoxInput.textContent = "!@#$%^&*";
  } else {
    textBoxInput.textContent = "Click 'Generate' button again.";
  }
});

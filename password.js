// This is a random password generator.

const btn = document.getElementById("generate");
const textBox = document.getElementById("password-container");
const textBoxInput = document.getElementById("password-text");
const nums = document.getElementById("nums");
const uppers = document.getElementById("uppers");
const lowers = document.getElementById("lowers");
const symbols = document.getElementById("symbols");
const addAll = document.getElementById("add-all");
let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// This function acts as the actual generator.

btn.addEventListener("click", function (event) {
  var length = 20,
    retVal = "";
  for (var i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  if (event) {
    textBoxInput.textContent = retVal.valueOf("");
  } else {
    textBoxInput.textContent = "Error";
  }
  return retVal.valueOf("");
});

// These funtions add functionality to the checkboxes.

// KEEP WORKING ON THIS FUNCTION AND ADD IT TO THE BUTTON USING THE FUNCTION AT THE VERY BOTTOM
nums.addEventListener("change", function () {
  var length = 20,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (nums.checked === true) {
    textBoxInput.textContent = retVal.valueOf("");
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  } else {
    textBoxInput.textContent = retVal.valueOf(btn.addEventListener);
  }
});

uppers.addEventListener("change", function () {
  var length = 20,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (uppers.checked === true) {
    textBoxInput.textContent = retVal.valueOf("");
    charset = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
  } else {
    textBoxInput.textContent = retVal.valueOf(btn.addEventListener);
  }
});

lowers.addEventListener("change", function () {
  var length = 20,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (lowers.checked === true) {
    textBoxInput.textContent = retVal.valueOf("");
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
  } else {
    textBoxInput.textContent = retVal.valueOf(btn.addEventListener);
  }
});

symbols.addEventListener("change", function () {
  var length = 20,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (symbols.checked === true) {
    textBoxInput.textContent = retVal.valueOf("");
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  } else {
    textBoxInput.textContent = retVal.valueOf(btn.addEventListener);
  }
});

addAll.addEventListener("change", function () {
  var length = 20,
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (addAll.checked === true) {
    textBoxInput.textContent = retVal.valueOf("");
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  } else {
    textBoxInput.textContent = retVal.valueOf(btn.addEventListener);
  }
});

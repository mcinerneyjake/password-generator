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
    textBoxInput.textContent = console.log(retVal);
  } else {
    textBoxInput.textContent = retVal.valueOf("");
  }
  return retVal.valueOf("");
});

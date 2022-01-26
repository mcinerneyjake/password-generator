// This is a random password generator.

const btn = document.getElementById("generate");
const textBox = document.getElementById("password-container");
const textBoxInput = document.getElementById("password-text");

// This was my first try. It appears on the console,
// but doesn't do what I need it to do.

var randomArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (var i = 0; i < randomArray.length; i++) {
  console.log(randomArray[i]);
}

// This is the actual generator.

btn.addEventListener("click", function randomPassword() {
  var length = 20,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  if (btn.clicked === true) {
    textBox.textContent = console.log(retVal);
  } else {
    textBox.textContent = retVal.valueOf("");
  }
  return retVal.valueOf("");
});

// I'm still trying to figure out how to return the function inside of the text box.
// At the moment, the text box itself returns the function.

//textBox.textContent = retVal.valueOf("");
//console.log(retVal)

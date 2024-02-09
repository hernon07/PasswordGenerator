const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordLength = document.getElementById("password-length");

function randomNumber(number) {
  return Math.floor(Math.random() * number + 1);
}

function generate() {
  let password = "";
  const passwordll = passwordLength.value ? passwordLength.value : 15;

  for (let i = 0; i < passwordll; i++) {
    password += characters[randomNumber(characters.length)];
  }
  return password;
}

const btn = document.getElementById("btn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

btn.addEventListener("click", function () {
  password1.value = generate();

  password2.value = generate();
});

//copy password

password1.addEventListener("click", function () {
  navigator.clipboard.writeText(password1.value);
  password1.value = "Password Copied";
});

password2.addEventListener("click", function () {
  navigator.clipboard.writeText(password2.value);
  password2.value = "Password Copied";
});

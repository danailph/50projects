const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textArea");
  const password = resultEl.innerText;
  if (!password) return;

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard!");
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatePassword = "";
  const typesCount = lower + upper + number + symbol;
  if (typesCount === 0) return "";
  const types = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );
  for (let i = 0; i < length; i += typesCount) {
    types.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  return generatePassword.slice(0, length);
};

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love programming";
let index = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(() => writeText(), speed);
};

writeText();

speedEl.addEventListener(
  "input",
  ({ target: { value } }) => (speed = 300 / value)
);

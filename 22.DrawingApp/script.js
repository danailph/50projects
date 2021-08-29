const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 20;
let isPressed = false;
let color = "black";
let x, y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x, y, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener("mousedown", ({ offsetX, offsetY }) => {
  isPressed = true;
  x = offsetX;
  y = offsetY;
});

canvas.addEventListener("mousemove", ({ offsetX, offsetY }) => {
  if (isPressed) {
    drawCircle(offsetX, offsetY);
    drawLine(x, y, offsetX, offsetY);
    x = offsetX;
    y = offsetY;
  }
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

colorEl.addEventListener("change", ({ target: { value } }) => (color = value));
increaseBtn.addEventListener("click", () => {
  size++;
  sizeEl.innerHTML = size;
});

decreaseBtn.addEventListener("click", () => {
  if (size > 1) size--;
  sizeEl.innerHTML = size;
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

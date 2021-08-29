const btn = document.getElementById("btn");
const boxes = document.getElementById("boxes");

btn.addEventListener("click", () => boxes.classList.toggle("big"));

for (let i = 0; i < 4; i++) {
  for (let n = 0; n < 4; n++) {
    console.log("a");
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundPosition = `${-n * 125}px ${-i * 125}px`;
    boxes.appendChild(box);
  }
}

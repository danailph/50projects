const container = document.querySelector(".container");

const getSingleColor = () => Math.floor(Math.random() * 255);
const getColor = () =>
  `rgb(${getSingleColor()}, ${getSingleColor()}, ${getSingleColor()})`;

for (let i = 0; i < 500; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    const color = getColor();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  });
  square.addEventListener("mouseout", () => {
    square.style.backgroundColor = "#1d1d1d";
    square.style.boxShadow = `0 0 2px #000`;
  });
  container.appendChild(square);
}

const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectedInsect = {};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
};

const createInsect = () => {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();

  insect.style.top = `${x}px`;
  insect.style.left = `${y}px`;

  insect.innerHTML = `
    <img
      src="${selectedInsect.src}"
      alt="${selectedInsect.alt}"
      style="transform: rotate(${Math.random() * 360}deg)"
    />
  `;

  insect.addEventListener("click", () => {
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
    if (score > 10) messageEl.classList.add("visible");
    insect.classList.add("clicked");
    setTimeout(() => insect.remove(), 2000);
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
  });

  gameContainer.append(insect);
};
const startGame = () => {
  setInterval(() => {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    time.innerHTML = `Time ${m}:${s}`;
    seconds++;
  }, 1000);
};

startBtn.addEventListener("click", () => screens[0].classList.add("up"));
chooseInsectBtns.forEach((btn, i) =>
  btn.addEventListener("click", () => {
    const image = btn.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedInsect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  })
);

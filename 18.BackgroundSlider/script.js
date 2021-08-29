const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let activeSlide = 0;
console.log(leftArrow);
const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};

rightArrow.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) activeSlide = 0;
  setBgToBody();
  setActiveSlide();
});

leftArrow.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = slides.length - 1;
  setBgToBody();
  setActiveSlide();
});

setBgToBody();

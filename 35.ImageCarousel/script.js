const imgs = document.getElementById("imgs");
const prev = document.getElementById("left");
const next = document.getElementById("right");

let index = 0;
const interval = setInterval(() => {
  index++;
  if (index > imgs.childElementCount - 1) index = 0;
  imgs.style.transform = `translateX(-${index * 500}px)`;
}, 2000);

prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = imgs.childElementCount - 1;
  imgs.style.transform = `translateX(-${--index * 500}px)`;
});

next.addEventListener("click", () => {
  index++;
  if (index > imgs.childElementCount - 1) index = 0;
  imgs.style.transform = `translateX(-${index * 500}px)`;
});

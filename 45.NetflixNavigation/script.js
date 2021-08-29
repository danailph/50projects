const openBtb = document.querySelector(".open-btn");
const closeBtb = document.querySelector(".close-btn");
const navs = document.querySelectorAll(".nav");

openBtb.addEventListener("click", () =>
  navs.forEach((nav, i) => nav.classList.add("visible"))
);

closeBtb.addEventListener("click", () =>
  navs.forEach((nav, i) => nav.classList.remove("visible"))
);

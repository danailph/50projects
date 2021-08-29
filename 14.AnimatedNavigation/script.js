const btn = document.getElementById("toggle");
const nav = document.getElementById("nav");

console.log(btn, nav);

btn.addEventListener("click", () => nav.classList.toggle("active"));

const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", ({ target: { value } }) => {
  background.style.filter = `blur(${20 - value.length * 2}px)`;
});

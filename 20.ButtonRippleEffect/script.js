const button = document.querySelectorAll(".ripple");

button.forEach((button) => {
  button.addEventListener(
    "click",
    ({ clientX, clientY, target: { offsetTop, offsetLeft } }) => {
      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.top = `${clientY - offsetTop}px`;
      circle.style.left = `${clientX - offsetLeft}px`;
      button.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 500);
    }
  );
});

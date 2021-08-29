const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button, i) =>
  button.addEventListener("click", () =>
    button.parentNode.classList.toggle("active")
  )
);

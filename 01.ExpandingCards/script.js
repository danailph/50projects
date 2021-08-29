const panels = document.querySelectorAll(".panel");
panels.forEach((panel, i) => {
  panel.addEventListener("click", () => {
    panels.forEach((panel) => panel.classList.remove("active"));
    panel.classList.add("active");
  });
});

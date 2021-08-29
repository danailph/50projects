const codes = document.querySelectorAll(".code");

codes[0].focus();
codes.forEach((code, i) => {
  code.addEventListener("keydown", ({ key }) => {
    if (key >= 0 && key <= 9) {
      codes[i].value = "";
      setTimeout(() => codes[i + 1].focus(), 10);
    }
    if (key === "Backspace") setTimeout(() => codes[i - 1].focus(), 10);
  });
});

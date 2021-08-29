const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");
listItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    contents.forEach((item, i) => item.classList.remove("show"));
    listItems.forEach((item, i) => item.classList.remove("active"));
    contents[i].classList.add("show");
    item.classList.add("active");
  });
});

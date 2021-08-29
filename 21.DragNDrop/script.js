const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = (e) => {
  e.target.className += " hold";
  setTimeout(() => (e.target.className = ""), 0);
};

const dragEnd = () => {
  fill.className = "fill";
};

const dragOver = (e) => {
  e.preventDefault();
};

const dragEnter = (e) => {
  e.preventDefault();
  e.target.className += " hovered";
};

const dragLeave = (e) => {
  e.target.className = "empty";
};

const dragDrop = (e) => {
  e.target.className = "empty";
  e.target.append(fill);
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

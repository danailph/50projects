const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, i) => {
  cup.addEventListener("click", () => highlightCups(i));
});

const highlightCups = (i) => {
  if (
    smallCups[i].classList.contains("full") &&
    !smallCups[i]?.nextElementSibling?.classList?.contains("full")
  )
    i--;
  smallCups.forEach((cup, index) => {
    if (index <= i) cup.classList.add("full");
    else cup.classList.remove("full");
  });

  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = 0;
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};
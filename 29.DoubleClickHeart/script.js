const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");

let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener(
  "click",
  ({ clientX, clientY, target: { offsetTop, offsetLeft } }) => {
    if (clickTime === 0) {
      clickTime = new Date().getTime();
    } else if (new Date().getTime() - clickTime < 800) {
      clickTime = 0;

      const heart = document.createElement("i");
      heart.classList.add("fas");
      heart.classList.add("fa-heart");

      heart.style.left = `${clientX - offsetLeft}px`;
      heart.style.top = `${clientY - offsetTop}px`;
      timesClicked++;
      times.innerHTML = timesClicked;
      loveMe.appendChild(heart);
      setTimeout(() => {
        loveMe.removeChild(heart);
      }, 600);
    } else {
      clickTime = new Date().getTime();
    }
  }
);

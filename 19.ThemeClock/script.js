const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
console.log(dateEl, timeEl);
//prettier-ignore
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//prettier-ignore
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

//prettier-ignore
const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  timeEl.innerHTML = `${hoursForClock}:${minutes <= 10 ? `0${minutes}` : minutes} ${hours >= 12 ? "PM" : "AM" }`
  dateEl.innerHTML = `${day[day]}, ${months[month]} <span class="circle">${date}</span>`

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale( hoursForClock, 0, 11, 0, 360 )}deg)`;
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale( minutes, 0, 59, 0, 360 )}deg)`;
  secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale( seconds, 0, 59, 0, 360 )}deg)`;


};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setTime();
setInterval(() => {
  setTime();
}, 1000);

const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "succes", "error"];

btn.addEventListener("click", () => createNotification());

const createNotification = (message = null, type = null) => {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type || types[Math.floor(Math.random() * types.length)]);

  toast.innerText =
    message || messages[Math.floor(Math.random() * messages.length)];
  toasts.appendChild(toast);

  setTimeout(() => {
    toasts.removeChild(toast);
  }, 3000);
};

const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    randomSelect();
    setTimeout(() => {
      e.target.value = "";
    }, 10);
  }
});

const createTags = (value) => {
  const tags = value
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

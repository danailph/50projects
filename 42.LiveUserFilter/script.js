const result = document.getElementById("result");
const filter = document.getElementById("filter");

const listItems = [];

const getData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  result.innerHTML = "";
  results.forEach(({ picture, name, location }, i) => {
    const li = document.createElement("li");
    listItems.push(li);
    li.innerHTML = `
      <img src="${picture.large}" alt="${name.first}">
      <div class="user-info">
          <h4>${name.first} ${name.last}</h4>
          <p>${location.city}, ${location.country}</p>
      </div>
    `;
    result.appendChild(li);
  });
};

filter.addEventListener("input", ({ target: { value: query } }) => {
  listItems.forEach((item, i) => {
    if (item.innerText.toLowerCase().includes(query.toLowerCase()))
      item.classList.remove("hide");
    else item.classList.add("hide");
  });
});

getData();

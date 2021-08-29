const URL = `https://source.unsplash.com/random/`;
const container = document.querySelector(".container");
const rows = 10;
const getRandomNumber = () => Math.floor(Math.random() * 10) + 300;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${URL}/${getRandomNumber()}x${getRandomNumber()}`;
  container.append(img);
}

const container = document.querySelector(".container");
const pokemonCount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i < pokemonCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (data) => {
  console.log(data);
  const card = document.createElement("div");
  card.classList.add("pokemon");
  card.style.backgroundColor = colors[data?.types[0].type.name];
  card.innerHTML = `
    <div class="img-container">
      <img
        src="https://pokeres.bastionbot.org/images/pokemon/${data.id}.png"
        alt=""
      />
    </div>
    <div class="info">
      <span class="number">#${data.id.toString().padStart(3, "0")}</span>
      <h3 class="name">${data.name}</h3>
      <small class="type"
        >Type:
        <span>${data?.types[0].type.name}</span>
      </small>
      `;

  container.appendChild(card);
};

fetchPokemons();

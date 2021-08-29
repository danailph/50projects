const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4fb47453f1f3dd6dc6c8ee6199a544e7&page=1";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=4fb47453f1f3dd6dc6c8ee6199a544e7&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!!search.value) {
    getMovies(SEARCH_URL + search.value);
    search.value = "";
  }
});

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    <img src="${IMAGE_PATH + poster_path}" alt="" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClass(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;
    main.append(movieEl);
  });
};

const getClass = (vote_average) => {
  if (vote_average >= 8) return "green";
  if (vote_average >= 4) return "orange";
  return "red";
};

getMovies(API_URL);

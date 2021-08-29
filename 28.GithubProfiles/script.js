const URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search.value && getUser(search.value);
  search.value = "";
});

const getUser = async (username) => {
  try {
    const { data } = await axios(URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404)
      createErrorCard("No profile with this username.");
  }
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos.");
  }
};

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>`;
  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;
    reposEl.append(repoLink);
  });
};

const createUserCard = ({
  avatar_url,
  name,
  login,
  bio,
  followers,
  following,
  public_repos,
}) => {
  const cardHTML = `
    <div class="card">
      <div>
        <img
          src="${avatar_url ?? ""}"
          alt="${name ?? ""}"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${name ?? login ?? ""}</h2>
        <p>${bio ?? ""}</p>
        <ul>
          <li>${followers ?? ""} <strong>Followers</strong></li>
          <li>${following ?? ""} <strong>Following</strong></li>
          <li>${public_repos ?? ""} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>`;
  main.innerHTML = cardHTML;
};

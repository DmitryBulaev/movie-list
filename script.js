const STORAGE_LABEL_MOVIES = "movies";

const inputNode = document.getElementById("movieInput");
const addButtonNode = document.getElementById("addMovieButton");
const movieListNode = document.getElementById("movieList");
const formNode = document.querySelector("#form");

let movies = [];

function initMovieList() {
  const moviesFromStarageString = localStorage.getItem(STORAGE_LABEL_MOVIES);
  const moviesFromStarage = JSON.parse(moviesFromStarageString);
  if (Array.isArray(moviesFromStarage)) {
    movies = moviesFromStarage;
  }
  renderMovieList();
}

initMovieList();

function getMovieFromUser() {
  const movie = inputNode.value;

  if (!inputNode.value) {
    return;
  }

  return movie;
}

function renderMovieList(newMovie) {
  movieNode = newMovie;
  movies.forEach((movieNode) => {
    const btnCssClass = movieNode.btnTag ? "tag-movie enable" : "tag-movie";
    const textCssClass = movieNode.textMark ? "movie-text crossed-out-on" : "movie-text";
    const liCssClass = movieNode.lable ? "movie-item lable-on" : "movie-item";

    const movieItem = document.createElement("li");
    movieItem.id = movieNode.id;
    movieItem.dataset.class = "movieItem";
    movieItem.className = `${liCssClass}`;
    movieItem.innerHTML = `<button data-class="tagMovie" class="${btnCssClass}"></button>
                          <span data-class="movie" class="${textCssClass}">${movieNode.item}</span>
                          <button data-class="resetMovie" class="reset-movie"></button>
                        `;
    movieListNode.insertAdjacentElement("beforeend", movieItem);

    const tagMovieBtn = movieItem.querySelector("[data-class=tagMovie]");
    const resetMovieBtn = movieItem.querySelector("[data-class=resetMovie]");

    tagMovieBtn.addEventListener("click", tagMovie);
    resetMovieBtn.addEventListener("click", resetMovie);
  });
}

const clearInput = (input) => {
  input.value = "";
  input.focus();
};

const addMovieHandler = (event) => {
  event.preventDefault();

  const movie = getMovieFromUser();

  const newMovie = {
    id: Date.now(),
    item: movie,
    btnTag: false,
    textMark: false,
    lable: false,
  };

  if (!newMovie.item) {
    return;
  }

  movies.push(newMovie);

  movieListNode.innerHTML = "";

  renderMovieList(newMovie);

  saveToLocalStorage();

  clearInput(inputNode);
};

formNode.addEventListener("submit", addMovieHandler);

function toggleTagMovieButton(movieItem) {
  const tagButton = movieItem.querySelector("[data-class=tagMovie]");
  tagButton.classList.toggle("enable");
}

function toggleTextMarkMovie(movieItem) {
  const movieTextNode = movieItem.querySelector("[data-class=movie]");
  movieTextNode.classList.toggle("crossed-out-on");
}

function toggleLableMovieItem(movieItem) {
  movieItem.classList.toggle("lable-on");
}

function tagMovie(event) {
  const movieItem = event.target.closest("[data-class=movieItem]");

  if (event.target.dataset.class !== "tagMovie") return;

  const movieItemId = Number(movieItem.id);
  const newMovie = movies.find((movie) => movie.id === movieItemId);

  newMovie.btnTag = !newMovie.btnTag;
  newMovie.textMark = !newMovie.textMark;
  newMovie.lable = !newMovie.lable;

  toggleTagMovieButton(movieItem);
  toggleTextMarkMovie(movieItem);
  toggleLableMovieItem(movieItem);

  saveToLocalStorage();
}

function resetMovie(event) {
  const movieItem = event.target.closest("[data-class=movieItem]");

  if (event.target.dataset.class !== "resetMovie") return;

  const movieItemId = Number(movieItem.id);

  movies = movies.filter((movie) => movie.id !== movieItemId);

  movieItem.remove();

  saveToLocalStorage();
}

function saveToLocalStorage() {
  const moviesString = JSON.stringify(movies);
  localStorage.setItem(STORAGE_LABEL_MOVIES, moviesString);
}

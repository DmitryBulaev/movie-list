let movies = [];

const inputNode = document.getElementById("movieInput");
const addButtonNode = document.getElementById("addMovieButton");
const movieListNode = document.getElementById("moviesList");
const formNode = document.querySelector("#form");

const getMovieFromUser = () => {
  const movie = inputNode.value;

  if (!inputNode.value) {
    return;
  }

  movies.push(movie);
};

const renderMoviesList = () => {
  movieListNode.innerHTML = "";

  movies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.dataset.class = "movieItem";
    movieItem.className = "movie-item";
    movieItem.innerHTML = `<button data-class="tagMovie" class="tag-movie"></button>
                            <span data-class="movie" class="movie-text">${movie}</span>
                            <button data-class="resetMovie" class="reset-movie"></button>
                            `;
    movieListNode.append(movieItem);
  });
};

const clearInput = (input) => {
  input.value = "";
  input.focus();
};

const addMovieHandler = (event) => {
  event.preventDefault();

  getMovieFromUser();

  renderMoviesList();

  clearInput(inputNode);
  console.log(movies);
};

formNode.addEventListener("submit", addMovieHandler);

const toggleTagMovieButton = (movieItem) => {
  const tagButton = movieItem.querySelector("[data-class=tagMovie]");
  tagButton.classList.toggle("enable");
};

const toggleLableMovie = (movieItem) => {
  const movieTextNode = movieItem.querySelector("[data-class=movie]");
  movieTextNode.classList.toggle("crossed-out-on");
};

const toggleMovieItem = (movieItem) => {
  movieItem.classList.toggle("lable-on");
};

const tagMovie = (event) => {
  const movieItem = event.target.closest("[data-class=movieItem]");
  if (event.target.dataset.class === "tagMovie") {
    toggleTagMovieButton(movieItem);
    toggleLableMovie(movieItem);
    toggleMovieItem(movieItem);
    console.log(movieItem);
  }
};

const resetMovie = (event) => {
  const movieItem = event.target.closest("[data-class=movieItem]");
  let index = movies.indexOf(movieItem);

  if (event.target.dataset.class === "resetMovie") {
    movieItem.remove();
    console.log(movies);
  }
};

movieListNode.addEventListener("click", tagMovie);
movieListNode.addEventListener("click", resetMovie);

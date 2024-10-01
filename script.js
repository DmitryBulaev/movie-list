let movies = [];

const inputNode = document.getElementById("movieInput");
const addButtonNode = document.getElementById("addMovieButton");
const moviesListNode = document.getElementById("moviesList");

const getMovieFromUser = () => {
  const movie = inputNode.value;

  if (!inputNode.value) {
    return;
  }

  movies.push(movie);
};

const renderMoviesList = () => {
  moviesListNode.innerHTML = "";

  movies.forEach((movie) => {
    const moviesItem = document.createElement("li");
    moviesItem.className = "movie-item";
    moviesItem.innerHTML = `<button class='tagMovie'></button>${movie}<button class='resetMovie'></button>`;
    moviesListNode.append(moviesItem);
  });
};

const clearInput = (input) => {
  input.value = "";
};

const addButtonHandler = () => {
  getMovieFromUser();

  renderMoviesList();

  clearInput(inputNode);
};

addButtonNode.addEventListener("click", addButtonHandler);

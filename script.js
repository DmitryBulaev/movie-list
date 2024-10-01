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
    moviesItem.innerText = movie;
    moviesListNode.appendChild(moviesItem);
  });
};

const clearInput = (input) => {
  input.value = "";
};

const addButtonHandler = () => {
  getMovieFromUser();

  renderMoviesList();

  clearInput(inputNode);
  console.log(1);
};

addButtonNode.addEventListener("click", addButtonHandler);

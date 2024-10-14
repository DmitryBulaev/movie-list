const inputNode = document.getElementById("movieInput");
const addButtonNode = document.getElementById("addMovieButton");
const movieListNode = document.getElementById("moviesList");
const formNode = document.querySelector("#form");

let movies = [];

const getMovieFromUser = () => {
  const movie = inputNode.value;

  if (!inputNode.value) {
    return;
  }

  return movie;
};

const renderMoviesList = () => {
  const movie = getMovieFromUser();

  const newMovie = {
    id: Date.now(),
    item: movie,
    lable: false,
  };

  movies.push(newMovie);
  movieListNode.innerHTML = "";

  movies.forEach((newMovie) => {
    const movieItem = document.createElement("li");
    movieItem.id = newMovie.id;
    movieItem.dataset.class = "movieItem";
    movieItem.className = "movie-item";
    movieItem.innerHTML = `<button data-class="tagMovie" class="tag-movie"></button>
                            <span data-class="movie" class="movie-text">${newMovie.item}</span>
                            <button data-class="resetMovie" class="reset-movie"></button>
                          `;
    movieListNode.insertAdjacentElement("beforeend", movieItem);

    const tagMovieBtn = movieItem.querySelector("[data-class=tagMovie]");
    const resetMovieBtn = movieItem.querySelector("[data-class=resetMovie]");

    tagMovieBtn.addEventListener("click", tagMovie);
    resetMovieBtn.addEventListener("click", resetMovie);
  });

  // const lableMovie = newMovie.lable ? tagMovie :
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
};

formNode.addEventListener("submit", addMovieHandler);

function toggleTagMovieButton(movieItem) {
  const tagButton = movieItem.querySelector("[data-class=tagMovie]");
  tagButton.classList.toggle("enable");
}

function toggleLableMovie(movieItem) {
  const movieTextNode = movieItem.querySelector("[data-class=movie]");
  movieTextNode.classList.toggle("crossed-out-on");
}

function toggleMovieItem(movieItem) {
  movieItem.classList.toggle("lable-on");
}

function tagMovie(event) {
  const movieItem = event.target.closest("[data-class=movieItem]");
  if (event.target.dataset.class === "tagMovie") {
    toggleTagMovieButton(movieItem);
    toggleLableMovie(movieItem);
    toggleMovieItem(movieItem);
  }
}

function resetMovie(event) {
  const movieItem = event.target.closest("[data-class=movieItem]");
  // let index = movies.indexOf(movieItem);

  if (event.target.dataset.class === "resetMovie") {
    movieItem.remove();
    console.log(movies);
  }
}

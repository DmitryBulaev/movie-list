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
    btnTag: false,
    textMark: false,
    lable: false,
  };

  const btnCssClass = newMovie.btnTag ? "tag-movie enable" : "tag-movie";
  const textCssClass = newMovie.textMark ? "movie-text crossed-out-on" : "movie-text";
  const liCssClass = newMovie.lable ? "movie-item lable-on" : "movie-item";

  movies.push(newMovie);
  movieListNode.innerHTML = "";

  movies.forEach((newMovie) => {
    const movieItem = document.createElement("li");
    movieItem.id = newMovie.id;
    movieItem.dataset.class = "movieItem";
    movieItem.className = `${liCssClass}`;
    movieItem.innerHTML = `<button data-class="tagMovie" class="${btnCssClass}"></button>
                            <span data-class="movie" class="${textCssClass}">${newMovie.item}</span>
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
  toggleTagMovieButton(movieItem);
  toggleTextMarkMovie(movieItem);
  toggleLableMovieItem(movieItem);
}

function resetMovie(event) {
  const movieItem = event.target.closest("[data-class=movieItem]");

  if (event.target.dataset.class !== "resetMovie") return;
  movieItem.remove();
  console.log(movies);
}

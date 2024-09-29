let movies = [];

const inputNode = document.getElementById("movieInput");
const addButtonNode = document.getElementById("addMovieButton");
const moviesListNode = document.getElementById("moviesList");

addButtonNode.addEventListener("click", function () {
  const movie = inputNode.value;

  movies.push(movie);

  moviesListNode.innerHTML = "";

  movies.forEach((movie) => {
    const moviesItem = document.createElement("li");
    moviesItem.innerText = movie;
    moviesListNode.appendChild(moviesItem);
  });
});

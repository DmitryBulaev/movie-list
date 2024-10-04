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
    moviesItem.className = "movie-item lable-off";
    moviesItem.innerHTML = `<span id="movie" class="movie-text crossed-out-off">${movie}</span>`;
    moviesListNode.append(moviesItem);
    moviesItem.insertAdjacentHTML(
      "afterBegin",
      '<button id="tagMovie" class="tag-movie disable"></button>'
    );
    moviesItem.insertAdjacentHTML(
      "beforeEnd",
      '<button id="resetMovie" class="reset-movie"></button>'
    );
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

const toggleTagMovieButton = (node) => {
  let tagMovieNode = document.getElementById("tagMovie");
  tagMovieNode = node;
  node.classList.toggle("disable");
  node.classList.toggle("enable");
};

// const toggleLableMovie = (node) => {
//   let movieTextNode = document.getElementById("movie");
//   movieTextNode = node;
//   node.classList.toggle("crossed-out-off");
//   node.classList.toggle("crossed-out-on");
// };

// const toggleMovieItem = (node) => {
//   let item = document.querySelector(".movie-item");
//   item = node;
//   node.classList.toggle("lable-on");
//   node.classList.toggle("lable-off");
// };

// const toggleTagMovieButton = () => {
//   let tagMovieNode = document.getElementById("tagMovie");
//   tagMovieNode.classList.toggle("disable");
//   tagMovieNode.classList.toggle("enable");
// };

const toggleLableMovie = () => {
  let movieTextNode = document.getElementById("movie");
  movieTextNode.classList.toggle("crossed-out-off");
  movieTextNode.classList.toggle("crossed-out-on");
};

const toggleMovieItem = () => {
  let item = document.querySelector(".movie-item");
  item.classList.toggle("lable-on");
  item.classList.toggle("lable-off");
};

const resetMovie = () => {
  let resetMovieNode = document.getElementById("resetMovie");
};

moviesListNode.addEventListener("click", function (event) {
  const tagButton = event.target.classList.contains("tag-movie");
  const resetButton = event.target.classList.contains("reset-movie");
  // const target = event.target;
  // while (target != this) {
  //   if (tagButton) {
  //     toggleTagMovieButton(target);
  //     toggleLableMovie(target);
  //     toggleMovieItem(target);
  //     console.log(1);
  //     break;
  //   }
  //   return;
  // }

  // while (target != this) {
  //   if (tagButton) {
  //     toggleTagMovieButton(target);
  //     toggleLableMovie(target);
  //     toggleMovieItem(target);
  //     console.log(1);
  //     break;
  //   }
  //   return;
  // }

  // while (target != this) {
  //   if (resetButton) {
  //     // resetMovie(target);
  //     console.log(1);
  //     break;
  //   }
  //   return;
  // }

  // const target = event.target;
  // switch (target.id) {
  //   case "tagMovie":
  //     while (target != this) {
  //       if (tagButton) {
  //         toggleTagMovieButton(target);
  //         toggleLableMovie();
  //         toggleMovieItem();
  //         console.log(1);
  //         break;
  //       }
  //       return;
  //     }
  //     break;
  //   case "resetMovie":
  //     while (target != this) {
  //       if (resetButton) {
  //         // resetMovie(target);
  //         console.log(1);
  //         break;
  //       }
  //       return;
  //     }
  //     break;
  //   default:
  //     "что-то пошло не так";
  //     break;
  // }

  const target = event.target;
  switch (target.id) {
    case "tagMovie":
      toggleTagMovieButton(target);
      toggleLableMovie();
      toggleMovieItem();
      break;
    case "resetMovie":
      resetMovie();
      console.log(1);
      break;
    default:
      "что-то пошло не так";
      break;
  }
});

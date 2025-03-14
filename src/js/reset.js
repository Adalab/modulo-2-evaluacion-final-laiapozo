const resetButton = document.querySelector(".js-reset-btn");

const handleResetClick = () => {
  shows = [];
  renderResults(shows);
  favShows = [];
  renderFavs(favShows);
  localStorage.removeItem("shows");
};

resetButton.addEventListener("click", handleResetClick);

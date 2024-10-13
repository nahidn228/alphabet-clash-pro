
const continueGame = () => {
  const alphabet = getRandomAlphabet();
};

const playNow = () => {
  // const homeScreen = document.getElementById("home-screen");
  // const playGround = document.getElementById("play-ground");
  // homeScreen.classList.add("hidden");
  // playGround.classList.remove("hidden");

  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
};


const handleKeyboardButtonPress = (event) => {
  const playerPressed = event.key;

  //stop the game if player press Esc

  if (playerPressed === "Escape") {
    gameOver();
  }
  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  //check matched or not

  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");

    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);

    //update score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    //start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you  miss a life");

    const currentLife = getTextElementValueById("current-life");
    const updateLife = currentLife - 1;
    setTextElementValueById("current-life", updateLife);
    //update Life count
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // currentLifeElement.innerText = newLife;

    if (updateLife === 0) {
      gameOver();
    }
  }
};

document.addEventListener("keyup", handleKeyboardButtonPress);

const continueGame = () => {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundColorById(alphabet);
};

const playNow = () => {
  // const homeScreen = document.getElementById("home-screen");
  // const playGround = document.getElementById("play-ground");
  // homeScreen.classList.add("hidden");
  // playGround.classList.remove("hidden");

  //Hide everything show only play ground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
};

const gameOver = () => {
  hideElementById("play-ground");
  showElementById("final-score");

  //update final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  //clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
};

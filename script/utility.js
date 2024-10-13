const hideElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
};
const showElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
};

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

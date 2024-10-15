const hideElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
};
const showElementById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
};

const setBackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
};
const removeBackgroundColorById = (elementId) => {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
};

const getTextElementValueById = (elementId) => {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const elementNumber = parseInt(elementValueText);
  return elementNumber;
};
const setTextElementValueById = (elementId, value) => {
  const element = document.getElementById(elementId);
  element.innerText = value;
};

const getElementTextById = (elementId) => {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
};

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

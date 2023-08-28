const button = document.querySelector(".change-color");
const bodyBg = document.querySelector("body");
const colorName = document.querySelector(".color")

button.addEventListener(`click`, onClickButton);
function onClickButton() {
  const randomColor = getRandomHexColor();
  bodyBg.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

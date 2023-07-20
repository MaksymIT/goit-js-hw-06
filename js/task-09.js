function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const elemBtn = document.querySelector('.change-color');
const elemColor = document.querySelector('.color');

elemBtn.addEventListener("click", () => {

const randomColor = getRandomHexColor();

document.body.style.backgroundColor = randomColor;

elemColor.textContent = randomColor;

});










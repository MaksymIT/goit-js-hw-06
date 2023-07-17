const counterValue = document.getElementById('value');
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

let currentValue = 0;

buttonMinus.addEventListener("click",  () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

buttonPlus.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});


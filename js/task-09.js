// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEl = document.querySelector('.change-color');
const bcgColor = document.querySelector('.color');
const body = document.querySelector('body');

buttonEl.addEventListener('click', () => { 
  body.style.backgroundColor = getRandomHexColor();
  bcgColor.textContent = body.style.backgroundColor;
} )
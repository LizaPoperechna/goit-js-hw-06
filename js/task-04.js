// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");


let counterValue = 0;



function valueAdd() {
    value.textContent = counterValue;
}


decrementBtn.addEventListener('click', () => { 
    counterValue -= 1;
    valueAdd();
}) 


incrementBtn.addEventListener('click', () => { 
    counterValue += 1;
    valueAdd();
})



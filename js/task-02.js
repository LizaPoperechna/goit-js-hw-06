// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.




const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector('#ingredients');


const ingredientsItemEl = ingredients.map(ingredient => {
  const ingredientEL = document.createElement('li');
  ingredientEL.textContent = ingredient;
  ingredientEL.classList.add('item');

  return ingredientEL;
})


ingredientsEL.append(...ingredientsItemEl);



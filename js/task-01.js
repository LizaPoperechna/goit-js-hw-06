

const categoriesEL = document.querySelector('#categories').children.length;
console.log(`Number of categories: ${categoriesEL}`);

const titleEl = document.querySelectorAll('.item h2');

const itemList = document.querySelectorAll('.item ul');

console.log(`Category: ${titleEl[0].textContent}`);
console.log(`Elements: ${itemList[0].children.length}`);

console.log(`Category: ${titleEl[1].textContent}`);
console.log(`Elements: ${itemList[1].children.length}`);

console.log(`Category: ${titleEl[2].textContent}`);
console.log(`Elements: ${itemList[2].children.length}`);


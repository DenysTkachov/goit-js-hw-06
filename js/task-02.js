const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsArr = document.querySelector(`#ingredients`);
const markup = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add(`item`);
  
  return li;
});

ingredientsArr.append(...markup);


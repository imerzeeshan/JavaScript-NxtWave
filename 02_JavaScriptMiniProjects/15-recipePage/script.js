let recipeObj = {
  title: "Tomato Pasta",
  imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let ingredientList = recipeObj.ingredients;

let recipeTitleEl = document.getElementById("recipeTitle");
let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("img");
let ingredientListContainerEl = document.getElementById("ingredientListContainer");

recipeTitleEl.textContent = recipeObj.title;

imgEl.setAttribute("src", recipeObj.imgSrc);
imgEl.classList.add("w-100");
imgContainerEl.appendChild(imgEl);

for (let ingredient of ingredientList) {
  let ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("ingredient");
  ingredientListContainerEl.appendChild(ingredientEl);
}

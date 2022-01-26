import { e } from "../dom.js";
import { detailsPage } from "./details.js";

const spinner = document.getElementById('loadingView');
spinner.remove();

const main = document.querySelector('main');

export async function catalogPage() {
    main.innerHTML = 
    main.appendChild(spinner);

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach((c) => main.appendChild(c));
}


async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes');
    const recipes = await response.json();

    return recipes;
}

function createRecipePreview(recipe) {
    const result = e(
        'article',
        {className: 'preview', onClick: cardDetails},
        e('div', {className: 'title'}, e('h2', {}, recipe.name)),
        e('div', {className: 'small'}, e('img', {src: recipe.img}))
    );

    return result;

    
    function cardDetails() {
        detailsPage(recipe._id);
    }
}
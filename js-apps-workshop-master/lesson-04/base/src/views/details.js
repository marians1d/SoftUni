import { getRecipeById } from "../api/api.js";
import { e } from "../dom.js";
import { editPage } from "./edit.js";

const main = document.getElementById('root')

let recipeUrl = '';

export async function detailsPage(id) {
    recipeUrl = 'http://localhost:3030/data/recipes/' + id;
    const fullRecipe = await getRecipeById(id);

    main.innerHTML = '';
    main.appendChild(createRecipeCard(fullRecipe));
}

function createRecipeCard(recipe) {
    const userId = sessionStorage.getItem('userId');
    const result = e(
        'article',
        {},
        e('h2', {}, recipe.name),
        e(
            'div',
            {className: 'band'},
            e('div', {className: 'thumb'}, e('img', {src: recipe.img})),
            e(
                'div',
                {className: 'ingredients'},
                e('h3', {}, 'Ingredients:'),
                e(
                    'ul',
                    {},
                    recipe.ingredients.map((i) => e('li', {}, i))
                )
            )
        ),
        e(
            'div',
            {className: 'description'},
            e('h3', {}, 'Preparation:'),
            recipe.steps.map((s) => e('p', {}, s))
        )
    );

    if (recipe._ownerId == userId) {
        result.appendChild(e('div',
        {className: 'controls'},
        e('button', {onClick: onEdit}, '\u270E Edit'),
        e('button', {onClick: onDelete}, '\u2716 Delete'),))
    }

    return result;

    function onDelete() {
        const confirmation = confirm('Are you sure you want to delete this recipe?')

        if(confirmation) {
            deleteRecipeById()
        }
    }

    function onEdit() {
        editPage(main, recipe._id);
    }
}

async function deleteRecipeById() {
    try {
        const res = await fetch(recipeUrl, {
            method: 'delete',
            headers: {
                'X-Authorization': sessionStorage.getItem('authToken')
            }
        });
    
        if (res.status != 200) {
            const error = res.json();
            throw new Error(error.message);
        }

        main.innerHTML = '';
        main.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')))
    } catch(err) {
        alert(err.message);
    }
}
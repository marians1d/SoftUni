window.addEventListener('load', getRecipes);

async function getRecipes() {
    const book = document.querySelector('p');
    
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    
    const res = await fetch(url);
    const data = await res.json();
    
    book.textContent = '';
    
    const recipes = Object.values(data);
    
    recipes.forEach((r) => getCard(r));
}

async function getRecipeById(id) {
    const url = 'http://localhost:3030/jsonstore/cookbook/details/' + id;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

function getCard(recipe) {
    const card = el(
        'article',
        {className: 'preview'},
        el('div', {className: 'title'}, el('h2', {}, recipe.name)),
        el('div', {className: 'small'}, el('img', {src: recipe.img}))
    );

    card.addEventListener('click', onTogle);

    async function onTogle(ev) {
        const info = await getRecipeById(recipe._id);

        card.textContent = '';

        const ingredients = info.ingredients.map((i) => el('li', {}, i));
        const steps = info.steps.map((s) => el('p', {}, s));

        card.replaceWith(
            el(
                'article',
                {},
                el('h2', {}, info.name),
                el(
                    'div',
                    {className: 'band'},
                    el('div', {className: 'thumb'}, el('img', {src: info.img})),
                    el(
                        'div',
                        {className: 'ingredients'},
                        el('h3', {}, 'Ingredients:'),
                        el('ul', {}, ...ingredients)
                    )
                ),
                el(
                    'div',
                    {className: 'description'},
                    el('h3', {}, 'Preparation:'),
                    ...steps
                )
            )
        );
    }

    document.querySelector('main').appendChild(card);
}

function el(type, attr, ...content) {
    const element = document.createElement(type);

    for (const prop in attr) {
        element[prop] = attr[prop];
    }

    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }

        element.appendChild(item);
    }

    return element;
}


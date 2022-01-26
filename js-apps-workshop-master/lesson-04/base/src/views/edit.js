import { getRecipeById } from "../api/api.js";
import { catalogPage } from "./catalog.js";

const section = document.getElementById('editView');
section.remove();

const form = section.querySelector('form');

export async function editPage(main, id) {
    const recipe = await getRecipeById(id);

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        onSubmit([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, {[k]: v}), {}), id);
    });
    
    const [name, image] = [...section.querySelectorAll('input')];
    const [ingredients, steps] = [...section.querySelectorAll('textarea')];


    name.value = recipe.name;
    image.value = recipe.img;

    ingredients.value = recipe.ingredients.join('\n');
    steps.value = recipe.steps.join('\n');

    main.innerHTML = '';
    main.appendChild(section);
}

async function onSubmit(data, id) {
    const body = JSON.stringify({
        name: data.name,
        img: data.img,
        ingredients: data.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: data.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    });


    const token = sessionStorage.getItem('authToken');
    if (token == null) {
        return catalogPage();
    }

    try {
        const response = await fetch('http://localhost:3030/data/recipes/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body
        });
        
        if (response.status == 200) {
            form.reset();
            catalogPage();
        } else {
            throw new Error(await response.json());
        }
    } catch (err) {
        console.error(err.message);
    }
}
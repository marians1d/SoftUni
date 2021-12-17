import {loadNav} from '../app.js';
import { createMovie } from '../api/data.js';
import {showView} from '../dom.js';
import {showHome} from './home.js';

const section = document.getElementById('add-movie');
section.remove();

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function showCreate(ev) {
    ev.preventDefault();

    form.reset();
    
    showView(section);

    loadNav();
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl').trim();

    if (title == '' || description == '' || img == '') {
        alert('Fill all fields!');
        return;
    }

    await createMovie(title, description, img);

    form.reset();

    showHome();
}
import {loadNav} from '../app.js';
import {updateMovie} from '../api/data.js';
import {showDetails} from './details.js';
import {showView} from '../dom.js';

const section = document.getElementById('edit-movie');
section.remove();

const form = section.querySelector('form');

export function showEdit(data) {
    form.addEventListener('submit', (ev) => onSubmit(ev, data));

    const [title, description, img] = [
        ...form.querySelectorAll('.form-control')
    ];

    title.value = data.title;
    description.value = data.description;
    img.value = data.img;

    showView(section);

    loadNav();
}

async function onSubmit(ev, data) {
    ev.preventDefault();

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl').trim();

    if (title == '' || description == '' || img == '') {
        alert('Fill all fields!');
        return;
    }

    await updateMovie(title, description, img, data._id);
    showDetails(data._id);
}

import {loadNav} from '../app.js';
import {showCreate} from './create.js';
import { getAllMovies } from '../api/data.js';
import { showDetails } from './details.js';
import {createMovieCard, showView} from '../dom.js';

const section = document.getElementById('homeView');
section.remove();

const addBtn = section.querySelector('#add-movie-button a');
addBtn.addEventListener('click', showCreate);

const deck = section.querySelector('.card-deck');
deck.addEventListener('click', onDetailsClick)

export async function showHome() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        addBtn.style.display = 'inline-block';
    } else {
        addBtn.style.display = 'none';
    }

    loadNav();

    showView(section);

    const movies = await getAllMovies();

    deck.replaceChildren(...movies.map(createMovieCard));
}

function onDetailsClick(ev) {
    
    let target = ev.target;
    
    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }
    
    if (target.tagName == 'A') {
        ev.preventDefault();

        showDetails(target.dataset.id);
    }
}
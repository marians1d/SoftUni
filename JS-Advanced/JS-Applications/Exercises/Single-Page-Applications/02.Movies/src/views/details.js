import { loadNav } from '../app.js';
import { deleteMovie, getDetails, getLikeByUser, postLike } from '../api/data.js';
import { createDetails, getLikesElement, showView } from '../dom.js';
import { showEdit } from './edit.js';
import { showHome } from './home.js';

export async function showDetails(id) {
    const data = await getDetails(id);

    const section = createDetails(data);

    const buttons = [...section.querySelectorAll('a')];

    if (buttons.length == 1) {
        const like = await getLikeByUser(id);
        if (like.length > 0) {

            buttons[0].replaceWith(await getLikesElement(id));
        } else {
            buttons[0].addEventListener('click', (ev) => onLike(ev, id, buttons[0]))
        }

    } else { 
        buttons[0].addEventListener('click', (ev) => onDelete(ev, id));
        buttons[1].addEventListener('click', (ev) => onEdit(ev, data));
    }

    showView(section)

    loadNav();
}

async function onLike(ev, id, likeBtn) {
    ev.preventDefault();

    await postLike(id);

    likeBtn.replaceWith(await getLikesElement(id))
}

async function onDelete(ev, id) {
    ev.preventDefault();
    
    await deleteMovie(id);
    
    showHome();
}

function onEdit(ev, data) {
    ev.preventDefault();

    showEdit(data);
}
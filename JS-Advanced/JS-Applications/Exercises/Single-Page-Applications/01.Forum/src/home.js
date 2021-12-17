import {showView, createPostElement} from './dom.js';
import {showSection} from './post.js';

const section = document.getElementById('homeView');
section.remove();

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const form = section.querySelector('#newTopic');

const topicContainer = section.querySelector('.topic-container');

topicContainer.addEventListener('click', onPostClick);

section.querySelector('.public').addEventListener('click', createTopic);

section.querySelector('.cancel').addEventListener('click', () => form.reset());

export async function createTopic(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('topicName').trim();
    const username = formData.get('username').trim();
    const content = formData.get('postText').trim();

    const date = new Date(Date.now()).toJSON();
    if (title != '' && username != '' && content != '') {
        try {
            const res = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({title, username, content, date})
            });

            if (res.status == 200) {
                const data = await res.json();

                topicContainer.appendChild(createPostElement(data));

                form.reset();
            } else {
                const error = await res.json();
                throw new Error(error.message);
            }
        } catch (err) {
            alert(err.message);
        }
    } else {
        alert('All Fields need to be filled');
    }
}

export async function showHome() {
    form.reset();

    showView(section);

    try {
        const res = await fetch(url);

        if (res.status == 200) {
            const data = await res.json();

            topicContainer.replaceChildren(
                ...Object.values(data).map((p) => createPostElement(p))
            );
        } else {
            const error = await res.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert(err.message);
    }
}

function onPostClick(ev) {
    let element = ev.target;
    if (element.tagName == 'H2' || element.tagName == 'A') {
        ev.preventDefault();

        if (element.tagName == 'H2') {
            element = element.parentElement;
        }

        showSection(element.dataset.id);
    }
}

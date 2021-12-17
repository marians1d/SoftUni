import {createPostView, showView, e, createComment} from './dom.js';

const section = document.querySelector('#views .container');
section.remove();

const commentBtn = section.querySelector('form button');
commentBtn.addEventListener('click', onSubmit);

const form = section.querySelector('#commentForm');

const commentSection = section.querySelector('.theme-content .comment');

let postId = null;

export async function showSection(id) {
    postId = id;

    form.reset()

    const data = await getSectionInfo();

    const post = createPostView(data);
    const title = e('h2', {}, data.title);

    commentSection.replaceChildren(post);
    section.querySelector('.theme-name').replaceChildren(title);

    getComments()

    showView(section);
}

async function getSectionInfo() {
    try {
        const url =
            'http://localhost:3030/jsonstore/collections/myboard/posts/' + postId;

        const res = await fetch(url);

        if (res.status == 200) {
            const data = await res.json();

            return data;
        } else {
            const error = await res.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert(err.message);
    }
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(form);

    const content = formData.get('postText').trim();
    const username = formData.get('username').trim();

    const date = new Date(Date.now()).toJSON();

    if (username != '' && content != '') {
        try {
            const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';

            const res = await fetch(url, {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({username, content, date, postId})
            });

            if (res.status == 200) {
                const data = await res.json();

                commentSection.appendChild(createComment(data));

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

async function getComments() {
    try {
        const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';

        const res = await fetch(url);

        if (res.status == 200) {
            const data = await res.json();

                Object.values(data)
                .filter((c) => c.postId == postId)
                .map((c) => createComment(c))
                .forEach((c) => commentSection.appendChild(c));
        } else {
            const error = await res.json();
            throw new Error(error.message);
        }
    } catch (err) {
        alert(err.message);
    }
}
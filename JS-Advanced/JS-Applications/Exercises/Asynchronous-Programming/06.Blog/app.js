function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    loadPostsBtn.addEventListener('click', addPostOptions);

    const btnViewPost = document.getElementById('btnViewPost');
    btnViewPost.addEventListener('click', viewPost);

    const selectElement = document.getElementById('posts');
    const titleElement = document.getElementById('post-title');
    const bodyElement = document.getElementById('post-body');
    const commentsElement = document.getElementById('post-comments');

    async function addPostOptions(ev) {
        selectElement.textContent = '';

        const posts = Object.values(await getPosts());
        posts.forEach((p) => {
            makeOption(p);
        });
    }

    function getPosts() {
        return getPostById('');
    }

    async function viewPost(ev) {
        const selectedPost =
            selectElement.children[selectElement.selectedIndex];

        titleElement.textContent = 'Loading...';
        commentsElement.textContent = '';
        bodyElement.textContent = '';

        if (selectedPost != undefined) {
            const [post, comments] = await Promise.all([
                getPostById(selectedPost.value),
                getComments(selectedPost.value)
            ]);

            titleElement.textContent = post.title;
            bodyElement.textContent = post.body;

            comments.forEach((c) => addComment(c));
        } else {
            titleElement.textContent = 'Error';

            alert('No Posts Found');
        }
    }

    function addComment(comment) {
        commentsElement.appendChild(el('li', {id: comment.id}, comment.text));
    }

    async function getPostById(id) {
        const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;

        try {
            const res = await fetch(url);

            if (res.status != 200) {
                throw new Error('Error');
            }

            const data = await res.json();

            return data;
        } catch (err) {
            alert('Error Post');
        }
    }

    async function getComments(id) {
        const url = 'http://localhost:3030/jsonstore/blog/comments';

        try {
            const res = await fetch(url);

            if (res.status != 200) {
                throw new Error('Error');
            }

            const data = await res.json();

            return Object.values(data).filter((c) => c.postId == id);
        } catch (err) {
            alert('Error Comment');
        }
    }

    function makeOption(post) {
        selectElement.appendChild(el('option', {value: post.id}, post.title));
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
}

attachEvents();

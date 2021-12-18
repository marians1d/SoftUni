window.addEventListener('load', solve);

function solve() {
    const fields = Array.from(document.querySelectorAll('form input'));

    const allSongs = document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');


    const likes = document.querySelector('#total-likes p');


    document.getElementById('add-btn').addEventListener('click', onSubmit);

    function onSubmit(event) {
        event.preventDefault();

        const genre = fields[0].value;
        const name = fields[1].value;
        const author = fields[2].value;
        const date = fields[3].value;

        if (genre != '' && name != '' && author != '' && date != '') {
            addCollectionCard(genre, name, author, date);
        }

        event.target.parentNode.reset()
    }

    function addCollectionCard(genre, name, author, date) {
        const card = document.createElement('div');
        card.className = 'hits-info';

        card.innerHTML = `<img src="./static/img/img.png">
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`;

        const saveBtn = card.querySelector('.save-btn');
        const likeBtn = card.querySelector('.like-btn');

        saveBtn.addEventListener('click', onSave);
        likeBtn.addEventListener('click', onLike);
        card.querySelector('.delete-btn').addEventListener('click', onDelete);

        allSongs.appendChild(card);

        function onSave() {
            saveBtn.remove();
            likeBtn.remove();

            savedSongs.appendChild(card);
        }

        function onLike(ev) {
            ev.target.disabled = true;

            const count = Number(likes.textContent.split(': ')[1]) + 1;

            likes.textContent = `Total Likes: ${count}`;
        }

        function onDelete() {
            card.remove();
        }
    }
}
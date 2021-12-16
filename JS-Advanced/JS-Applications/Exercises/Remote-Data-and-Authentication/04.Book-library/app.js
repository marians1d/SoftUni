const tbody = document.querySelector('tbody');

tbody.addEventListener('click', onActionClick)

loadBooks();

const createForm = document.getElementById('createForm');
createForm.addEventListener('submit', onCreate);
const editForm = document.getElementById('editForm');
editForm.addEventListener('submit', onEditSubmit);

const loadAllBtn = document.getElementById('loadBooks');
loadAllBtn.addEventListener('click', loadBooks)

// load books
async function loadBooks() {
    const books = await request(
        'http://localhost:3030/jsonstore/collections/books'
    );

    const result = Object.entries(books).map(([id, bookInfo]) =>
        createRow(id, bookInfo)
    );
    tbody.replaceChildren(...result);
}
// add book
async function onCreate(event) {
    event.preventDefault()
    const data = new FormData(event.target);

    const title = data.get('title');
    const author = data.get('author');

    if (title != '' || author != '') {
        const res = await createBook({title, author});
        tbody.appendChild(createRow(res._id, res));
    
        event.target.reset();
    } else {
        alert('Empty field');
    }
}

async function createBook(book) {
    const responce = await request(
        'http://localhost:3030/jsonstore/collections/books',
        {
            method: 'post',
            body: JSON.stringify(book)
        }
    );

    return responce;
}

function onActionClick(event) {
    if (event.target.className == 'edit') {
        onEdit(event.target);
    } else if (event.target.className == 'delete'){
        onDelete(event.target);
    }
}

// edit book
async function onEdit(button) {
    const id = button.parentElement.dataset.id;

    const book = await loadBookById(id)

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    
    editForm.querySelector('[name="id"]').value = id;
    editForm.querySelector('[name="author"]').value = book.author;
    editForm.querySelector('[name="title"]').value = book.title;
}

async function onEditSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target);

    const id = data.get('id');
    const author = data.get('author');
    const title = data.get('title');


    updateBook(id, {author, title})

    event.target.reset();
    createForm.style.display = 'block';
    editForm.style.display = 'none';

    loadBooks();
}

async function updateBook(id, body) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;

    const result = await request(url, {
        method: 'put',
        body: JSON.stringify(body)
    })

    return result;
}

async function loadBookById(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;

    const result = await request(url);

    return result;
}

// delete book
async function onDelete(button) {
    const id = button.parentElement.dataset.id;
    const result = await deleteBook(id);

    button.parentElement.parentElement.remove();
}

async function deleteBook(id) {
    const url = 'http://localhost:3030/jsonstore/collections/books/' + id;
    const result = request(url, {
        method: 'delete'
    });

    return result;
}

async function request(url, options) {
    if (options && options.body != undefined) {
        Object.assign(options, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }

    const response = await fetch(url, options);

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}

function createRow(id, bookInfo) {
    const row = document.createElement('tr');
    
    const title = document.createElement('td');
    title.textContent = bookInfo.title;
    
    const author = document.createElement('td');
    author.textContent = bookInfo.author;
    
    const actions = document.createElement('td');
    actions.setAttribute('data-id', id);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('class', 'edit');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('class', 'delete');

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(actions);

    return row;
}

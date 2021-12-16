import {html, render} from '../node_modules/lit-html/lit-html.js';
import {until} from '../node_modules/lit-html/directives/until.js';

export {
    html,
    render,
    until
};

const host = 'http://localhost:3030/jsonstore/collections';

async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(host + url, options);

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        return res.json();
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function getBooks() {
    return request('/books');
}

export async function createBook(book) {
    return request('/books', 'post', book);
}

export async function editBook(id, book) {
    return request('/books/' + id, 'put', book);
}

export async function deleteBook(id) {
    return request('/books/' + id, 'delete');
}

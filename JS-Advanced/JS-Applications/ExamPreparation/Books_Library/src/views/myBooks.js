import {getMyBook} from '../api/data.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';
import {bookCard} from './common.js';

const myBookTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>

    ${books.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="my-books-list">
              ${books.map(bookCard)}
          </ul>`}
</section>`;

export async function myBookPage(ctx) {
    const userData = getUserData();

    const books = await getMyBook(userData.id);

    ctx.render(myBookTemplate(books));
}

import {html, editBook} from './utility.js';

export const updateTemplate = (ctx) => html`
<form @submit=${(ev) => onSubmit(ev, ctx)} id="edit-form">
    <input type="hidden" name="id" .value=${ctx.book._id}/>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" .value=${ctx.book.title}/>
    <label>AUTHOR</label>
    <input type="text" name="author" .value=${ctx.book.author}/>
    <input type="submit" value="Save" />
</form>`;

async function onSubmit(ev, ctx) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    const id = formData.get('id');

    await editBook(id, { title, author });

    delete ctx.book;

    ev.target.reset()

    ctx.update();
}
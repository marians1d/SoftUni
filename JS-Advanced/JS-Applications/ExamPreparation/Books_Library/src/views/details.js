import {deleteBook, getBookById, getBookLikes, getUserLike, postLike} from '../api/data.js';
import {html} from '../lib.js';
import {getUserData} from '../util.js';

const detailsTemplate = (book, isOwner, onDelete, likeCount, likeVision, onLike) => html` <section
    id="details-page"
    class="details"
>
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl} /></p>
        <div class="actions">
            ${userActions(book, isOwner, onDelete)}
            ${likesActions(likeVision, onLike)}
            <div class="likes">
                <img class="hearts" src="/images/heart.png" />
                <span id="total-likes">Likes: ${likeCount}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

const userActions = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html` <a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
};

const likesActions = (likeVision, onLike) => {
    if (likeVision) {
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`;
    } else {
        return null;
    }
};

export async function detailsPage(ctx) {
    const userData = getUserData();

    const [book, likeCount , isLiked] = await Promise.all([
        getBookById(ctx.params.id),
        getBookLikes(ctx.params.id),
        userData ? getUserLike(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == book._ownerId;

    const likeVision = userData != null && isOwner == false && isLiked == 0

    ctx.render(detailsTemplate(book, isOwner, onDelete, likeCount, likeVision, onLike));

    async function onDelete() {
        const anser = confirm('Are you sure you want to delete ' + book.title);
        if (anser) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await postLike(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}
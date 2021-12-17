import {createComment, deleteGame, getAllComments, getGameById} from '../api/data.js';
import {html} from '../lib.js';
import {getUserData} from '../util.js';

const detailsTemplate = (game, comments, isOwner, canComment, onDelete, onComment) => html`<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0
                ? html`<p class="no-comment">No comments.</p>`
                : comments.map(commentCard)}
        </div>

        ${isOwner
            ? html`<div class="buttons">
                  <a href="/edit/${game._id}" class="button">Edit</a>
                  <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
              </div>`
            : null}
    </div>

    ${canComment
        ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${onComment} class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>`
        : null}
</section>`;

const commentCard = (comment) => html` <li class="comment">
    <p>Content: ${comment.comment}.</p>
</li>`;

export async function detailsPage(ctx) {
    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getAllComments(ctx.params.id),
    ]);

    const userData = getUserData();
    const isOwner = userData && userData.id == game._ownerId;
    const canComment = userData != null && userData.id != game._ownerId

    ctx.render(detailsTemplate(game, comments, isOwner, canComment, onDelete, onComment));

    async function onDelete() {
        const dialog = confirm('Are sure you want to delete ' + game.title);

        if (dialog) {
            await deleteGame(ctx.params.id);
            ctx.loadNav();
            ctx.page.redirect('/');
        }
    }

    async function onComment(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const comment = formData.get('comment');

        if (comment != '') {
            await createComment(ctx.params.id, comment);
            event.target.reset();
            ctx.page.redirect(`/details/${ctx.params.id}`);
        }
    }
}

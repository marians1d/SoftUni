import {deleteMeme, getMemeById} from '../api/data.js';
import {html} from '../lib.js';
import {getUserData} from '../util.js';

const detailsTemplate = (meme, userId, onDelete) => html` <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl} />
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            ${userId == meme._ownerId
                ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                      <button @click=${onDelete} class="button danger">Delete</button>`
                : null}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const meme = await getMemeById(ctx.params.id);

    const userData = getUserData();
    let userId = undefined;

    if (userData != null) {
        userId = userData.id;
    }

    ctx.render(detailsTemplate(meme, userId, onDelete));

    async function onDelete() {
        await deleteMeme(ctx.params.id);

        ctx.loadNav();
        ctx.page.redirect('/memes');
    }
}

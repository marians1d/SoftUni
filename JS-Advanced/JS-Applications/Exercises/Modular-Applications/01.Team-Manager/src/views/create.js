import { approveMember, becomeAMember, createTeam } from '../api/data.js';
import {html} from '../lib.js';

const createTemplate = (message, onCreate) => html` <section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${onCreate} id="create-form" class="main-form pad-large">
            ${message != null ? html`<div class="error">${message}</div>` : null}
            <label>Team name: <input type="text" name="name" /></label>
            <label>Logo URL: <input type="text" name="logoUrl" /></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team" />
        </form>
    </article>
</section>`;

export async function createPage(ctx) {
    update(null);

    function update(message) {
        ctx.render(createTemplate(message, onCreate));
    }

    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get('name').trim();
        const logoUrl = formData.get('logoUrl').trim();
        const description = formData.get('description').trim();

        if (name == '' || logoUrl == '' || description == '') {
            return update('All fields must be filled!');
        }

        if (name.length < 4) {
            return update('Name must be at least four characters long!');
        }
        
        if (description.length < 10) {
            return update('Description must be at least ten characters long!');
        }

        const team = await createTeam(name, logoUrl, description);
        
        const request = await becomeAMember(team._id);
        await approveMember(request._id);

        ctx.updateNav();
        ctx.page.redirect('/details/' + team._id);
    }
}
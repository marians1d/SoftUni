import {createTeam, editTeam, getTeamById} from '../api/data.js';
import {html} from '../lib.js';

const editTemplate = (team, message, onEdit) => html`
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onEdit} id="edit-form" class="main-form pad-large">
            ${message != null ? html`<div class="error">${message}</div>` : null}
            <label>Team name: <input type="text" name="name" .value=${team.name} /></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl} /></label>
            <label>Description: <textarea name="description" .value=${team.description} ></textarea></label>
            <input class="action cta" type="submit" value="Save Changes" />
        </form>
    </article>
</section>`;

export async function editPage(ctx) {
    const team = await getTeamById(ctx.params.id);

    update(null);

    function update(message) {
        ctx.render(editTemplate(team, message, onEdit));
    }

    async function onEdit(event) {
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

        const team = await editTeam(ctx.params.id, name, logoUrl, description);
        ctx.updateNav();
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}

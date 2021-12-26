import {getAllTeamsCount, getPageMembers, getTeams} from '../api/data.js';
import {html, until} from '../lib.js';
import {teamCard} from '../util.js';

const teamsTemplate = (teamsPromise, user, onPrev, onNext) => html`<section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${user != null
        ? html`<article class="layout narrow">
              <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
          </article>`
        : null}

    <a @click=${onPrev} href="javascript:void(0)" class="action">Prev</a>
    <a @click=${onNext} href="javascript:void(0)" class="action">Next</a>

    ${until(teamsPromise, html`<h2>Loading&#8230;</h2>`)}
</section>`;

export async function teamsPage(ctx) {
    const userData = ctx.getUserData();

    update();

    async function update() {
        ctx.render(teamsTemplate(loadTeams(), userData, onPrev, onNext));
    }
    
    async function loadTeams() {
        const teams = await getTeams(ctx.pageState);

        const memberIds = teams.map((t) => t._id);

        const members = await getPageMembers(memberIds);

        teams.forEach((t) => {
            t.memberCount = members.filter((m) => m.teamId == t._id).length;
        });

        return teams.map(teamCard);
    }

    async function onNext(event) {
        event.preventDefault();

        const count = await getAllTeamsCount();
        
        if (ctx.pageState * 5 < count) {
            ctx.pageState++;
            update();
        }

    }

    async function onPrev(event) {
        event.preventDefault();

        if (ctx.pageState > 1) {
            ctx.pageState--;
            update();
        }
    }
}

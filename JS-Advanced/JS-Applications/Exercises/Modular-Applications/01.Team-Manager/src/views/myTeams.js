import {getAllMembers, getUserTeams, getUserTeamsCount} from '../api/data.js';
import {html, until} from '../lib.js';
import {teamCard} from '../util.js';

const profileTemplate = (teamsPromise, teamsCount, onPrev, onNext) => html` <section id="my-teams">
    ${teamsCount > 0
        ? html` <article class="pad-med">
              <h1>My Teams</h1>
          </article>`
        : null}

    <article class="layout narrow">
        ${teamsCount == 0
            ? html`<div class="pad-med">
                  <p>You are not a member of any team yet.</p>
                  <p>
                      <a href="/teams">Browse all teams</a> to join one, or use the button bellow to
                      cerate your own team.
                  </p>
              </div>`
            : null}

        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>

    ${teamsCount > 0
        ? html`<a @click=${onPrev} href="javascript:void(0)" class="action">Prev</a>
              <a @click=${onNext} href="javascript:void(0)" class="action">Next</a>`
        : null}
    ${until(teamsPromise, html`<h2>Loading&#8230;</h2>`)}
</section>`;

export async function profilePage(ctx) {
    const userData = ctx.getUserData();

    const teamsCount = await getUserTeamsCount(userData.id);

    update();

    async function update() {
        ctx.render(profileTemplate(loadTeams(), teamsCount, onPrev, onNext));
    }

    async function loadTeams() {
        const teams = await getUserTeams(userData.id, ctx.pageState);

        const members = await getAllMembers();

        teams.forEach((t) => {
            t.team.memberCount = members.filter((m) => m.teamId == t.team._id).length;
        });

        return teams.map((t) => teamCard(t.team));
    }

    async function onNext(event) {
        event.preventDefault();
        
        if (ctx.pageState * 5 < teamsCount) {
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

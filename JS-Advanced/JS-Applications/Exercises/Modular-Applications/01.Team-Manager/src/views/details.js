import {
    approveMember,
    becomeAMember,
    cancelRequest,
    getAllMemberships,
    getTeamById,
} from '../api/data.js';
import {html} from '../lib.js';
import {notify} from '../util.js';

const detailsTemplate = (
    team,
    members,
    requests,
    user,
    buttonControls,
    onJoin,
    onLeave,
    currentMember,
    onApprrove
) => html` <section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col" />
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members.length} Members</span>
            <div>
                ${buttonControls.isOwner
                    ? html`<a href="/edit/${team._id}" class="action">Edit team</a>`
                    : null}
                ${buttonControls.isMember == false && buttonControls.isRequesting == false
                    ? html`<a
                          @click=${onJoin.bind(null, team._id)}
                          href="javascript:void(0)"
                          class="action"
                          >Join team</a
                      >`
                    : null}
                ${buttonControls.isMember && buttonControls.isOwner == false
                    ? html`<a
                          @click=${onLeave.bind(null, currentMember._id)}
                          href="javascript:void(0)"
                          class="action invert"
                          >Leave team</a
                      >`
                    : null}
                ${buttonControls.isRequesting
                    ? html`Membership pending.
                          <a
                              @click=${onLeave.bind(null, currentMember._id)}
                              href="javascript:void(0)"
                              >Cancel request</a
                          >`
                    : null}
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${members.map((m) => memberSlot(m, user, buttonControls, onLeave, currentMember))}
            </ul>
        </div>

        ${buttonControls.isOwner
            ? html`<div class="pad-large">
                  <h3>Membership Requests</h3>
                  <ul class="tm-members">
                      ${requests.map((r) => requestSlot(r, onLeave, onApprrove))}
                  </ul>
              </div>`
            : null}
    </article>
</section>`;

const memberSlot = (member, user, buttonControls, onLeave) => html` <li>
    ${member.user.username}${buttonControls.isOwner && member.user.username != user.username
        ? html`<a
              @click=${onLeave.bind(null, member._id)}
              href="javascript:void(0)"
              class="tm-control action"
              >Remove from team</a
          >`
        : null}
</li>`;

const requestSlot = (request, onLeave, onApprrove) => html` <li>
    ${request.user.username}<a
        @click=${onApprrove.bind(null, request._id)}
        href="javascript:void(0)"
        class="tm-control action"
        >Approve</a
    >
    <a @click=${onLeave.bind(null, request._id)} href="javascript:void(0)" class="tm-control action"
        >Decline</a
    >
</li>`;

export async function detailsPage(ctx) {
    update();

    async function update() {
        const [team, memberships] = await Promise.all([
            getTeamById(ctx.params.id),
            getAllMemberships(ctx.params.id),
        ]);

        const userData = ctx.getUserData();

        const members = memberships.filter((m) => m.status == 'member');
        const requests = memberships.filter((m) => m.status == 'pending');

        let buttonVisibility = {};
        let currentMember = {};
        if (userData != null) {
            buttonVisibility = {
                isOwner: team._ownerId == userData.id,
                isMember:
                    team._ownerId == userData.id ||
                    members.some((m) => m.user.username == userData.username),
                isRequesting: requests.some((r) => r.user.username == userData.username),
            };

            currentMember = memberships.find((m) => m.user.username == userData.username);
        }

        ctx.render(
            detailsTemplate(
                team,
                members,
                requests,
                userData,
                buttonVisibility,
                onJoin,
                onLeave,
                currentMember,
                onApprrove
            )
        );
    }

    async function onJoin(id, event) {
        event.preventDefault();

        await becomeAMember(id);
        update();
    }

    async function onLeave(memberId, event) {
        event.preventDefault();

        const onConfirm = async () => {
            await cancelRequest(memberId);
            update();
        };

        notify('Are you sure you want to LEAVE!', 'Comfirm', 'Close', onConfirm);
    }

    async function onApprrove(id, event) {
        event.preventDefault();

        await approveMember(id);
        update();
    }
}

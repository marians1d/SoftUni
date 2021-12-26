import {html, render} from './lib.js';

export function setUserData(data) {
    return sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeUserData() {
    sessionStorage.removeItem('userData');
}

export function validateEmail(email) {
    const res =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

export function notify(message, firstBtnMessage = 'Close', secondBtnMessage, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const bodyElement = document.querySelector('body');

    const notificationTemplate = () => html` <div class="modal">
        <p>${message}</p>
        <a @click=${onAction.bind(null, onConfirm)} href="javascript:void(0)" class="action">${firstBtnMessage}</a>
        ${secondBtnMessage != undefined
            ? html`<a @click=${onCansel} href="javascript:void(0)" class="action"
                  >${secondBtnMessage}</a
              >`
            : null}
    </div>`;

    render(notificationTemplate(), overlay);

    bodyElement.appendChild(overlay);

    async function onAction(onConfirm, ev) {
        if (secondBtnMessage != undefined) {
            onConfirm();
            overlay.remove();
        }
    }

    function onCansel(ev) {
        overlay.remove();
    }
}

export const teamCard = (team) => html` <article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col" />
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.memberCount} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`;

export const teamContent = (team) => html` <img src=${team.logoUrl} class="team-logo left-col" />
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.memberCount} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>`;

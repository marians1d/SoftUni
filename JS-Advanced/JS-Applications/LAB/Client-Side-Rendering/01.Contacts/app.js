import { html, render } from './node_modules/lit-html/lit-html.js';
import {contacts} from './contacts.js'

const myContacts = [...contacts];
myContacts.forEach(c => c.details = false);
const root = document.getElementById('contacts');

const listTemplate = () => html`${myContacts.map(cardTemplate)}`;

const cardTemplate = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button @click=${onDetails.bind(null, contact)} class="detailsBtn">Details</button>
        <div class="details" id=${contact.id}>
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>`;

render(listTemplate(), root);

function onDetails(contact, event) {
    if (contact.details) {
        event.target.nextElementSibling.style.display = 'none';
    } else {
        event.target.nextElementSibling.style.display = 'block';
    }

    contact.details = !contact.details;
}
import {html, render} from './node_modules/lit-html/lit-html.js';
import {cats as catsData} from './catSeeder.js';

const root = document.getElementById('allCats');

catsData.forEach(c => c.info == false);

const catCard = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap"/>
    <div class="info">
        <button @click=${() => onCat(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        ${cat.info ? html`<div class="status" id=${cat.info.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>` : null}
    </div>
</li>`;

update()

function onCat(cat) {
    cat.info = !cat.info;
    update()
}

function update() {
render(html`<ul>${catsData.map(c => catCard(c))}</ul>`, root);
}
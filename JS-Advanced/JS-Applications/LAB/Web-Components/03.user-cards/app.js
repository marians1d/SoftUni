import {html, render as litRender} from './node_modules/lit-html/lit-html.js'

const userTamplate = ({name, avatar, info}, onTogle) => html`
<style>
.user-card {
    display: flex;
    font-family: 'Arial', sans-serif;
    background-color: #EEE;
    border-bottom: 5px solid darkorchid;
    width: 100%;
}

.user-card img {
    width: 200px;
    height: 200px;
    border: 1px solid darkorchid;
}

.info {
    display: flex;
    flex-direction: column;
}

.info h3 {
    font-weight: bold;
    margin-top: 1em;
    text-align: center;
}

.info button {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: darkorchid;
    color: white;
    padding: 0.5em 1em;
}

@media only screen and (max-width: 500px) {
    .user-card {
        flex-direction: column;
        margin-bottom: 1em;
    }

    .user-card figure,
    .info button {
        align-self: center;
    }

    .info button {
        margin-bottom: 1em;
    }

    .info p {
        padding-left: 1em;
    }
}
</style>
<div class="user-card">
    <figure>
        <img src=${avatar} />
    </figure>
    <div class="info">
        <h3>${name}</h3>
        <div style="display: ${info ? 'block' : 'none'}">
            <p>
                <slot name="email">
            </p>
            <p>
                <slot name="phone">
            </p>
        </div>

        <button @click=${onTogle} class="toggle-info-btn">${info ? 'Hide info' : 'Show info'}</button>
    </div>
</div>`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        
        this.state = {
            name: this.childNodes[0].textContent.trim(),
            avatar: this.getAttribute('avatar'),
            info: false
        };
    }

    connectedCallback() {
        this.render();
    }

    handleEvent() {
        this.state.info = !this.state.info;
        this.render();
    }

    render() {
        litRender(userTamplate(this.state, this), this.shadowRoot);
    }
}

customElements.define('user-card', UserCard);
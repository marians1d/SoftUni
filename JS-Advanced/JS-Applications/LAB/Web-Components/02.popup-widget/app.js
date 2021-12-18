import {html, render} from './node_modules/lit-html/lit-html.js';

const widgetTemplate = ({text, img, alt}) => html`
<style>
.wrapper {
    position: relative;
}

.info {
    font-size: 0.8rem;
    width: 200px;
    display: inline-block;
    border: 1px solid black;
    padding: 10px;
    background: white;
    border-radius: 10px;
    opacity: 0;
    transition: 0.6s all;
    position: absolute;
    bottom: 20px;
    left: 10px;
    z-index: 3;
}

img {
    width: 1.2rem;
}

.icon:hover + .info,
.icon:focus + .info {
    opacity: 1;
}
</style>
<span class="wrapper">
    <span class="icon" tabindex="0">
        <img src=${img ? img : alt} />
    </span>

    <span class="info">${text}</span>
</span>`;

class Widget extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.state = {
            text: this.textContent,
            img: this.getAttribute('src'),
            alt: this.getAttribute('alt')
        }
    }

    connectedCallback() {
        render(widgetTemplate(this.state), this.shadowRoot);
    }
}

customElements.define('popup-widget', Widget);
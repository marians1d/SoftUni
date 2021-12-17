import { loadNav } from "../app.js";
import { login } from "../api/data.js";
import { showView } from "../dom.js";
import { showHome } from "./home.js";

const section = document.getElementById('form-login');
section.remove();


const form = section.querySelector('#form-login form');
form.addEventListener('submit', onSubmit)

export function showLogin() {
    showView(section);

    loadNav();

    form.reset();
}

async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    await login(email, password);

    showHome();
}
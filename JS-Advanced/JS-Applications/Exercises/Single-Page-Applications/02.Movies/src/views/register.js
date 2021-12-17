import { register } from "../api/data.js";
import { loadNav } from "../app.js";
import { showView } from "../dom.js";
import { showHome } from "./home.js";

const section = document.getElementById('form-sign-up');
section.remove();

const form = section.querySelector('#form-sign-up form');
form.addEventListener('submit', onSubmit)

export function showRegister() {
    form.reset();
    
    loadNav();
    
    showView(section)
}


async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repeatPassword').trim();

    if (password.length < 6) {
        alert('Passwords needs to be at least 6 characters');
        return;
    }
    if (password != repass || email == '') {
        alert('Passwords don\'t match');
        return;
    }

    await register(email, password);
    
    showHome();
}
import { logout } from './api/data.js';
import {showHome} from './views/home.js';
import {showLogin} from './views/login.js';
import {showRegister} from './views/register.js';

loadNav();
showHome();

const homeLink = document.getElementById('home');
homeLink.addEventListener('click', (ev) => {
    ev.preventDefault();

    showHome();
});

const loginLink = document.getElementById('login');
loginLink.addEventListener('click', (ev) => {
    ev.preventDefault();

    showLogin();
});

const registerLink = document.getElementById('register');
registerLink.addEventListener('click', (ev) => {
    ev.preventDefault();

    showRegister();
});

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', onLogout);

export function loadNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        [...document.querySelectorAll('.guest')].forEach(
            (e) => (e.style.display = 'none')
        );
        [...document.querySelectorAll('.user')].forEach(
            (e) => (e.style.display = 'block')
        );

        document.querySelector(
            '.welcomeMessage'
        ).textContent = `Welcome, ${userData.email}`;
    } else {
        [...document.querySelectorAll('.guest')].forEach(
            (e) => (e.style.display = 'block')
        );
        [...document.querySelectorAll('.user')].forEach(
            (e) => (e.style.display = 'none')
        );
    }
}

async function onLogout(ev) {
    ev.preventDefault();

    await logout();
    
    sessionStorage.removeItem('userData')
    
    showHome();
}

import { catalogPage } from './views/catalog.js';
import {createPage} from './views/create.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('main');

async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('authToken'),
        },
    });
    if (response.status == 204) {
        sessionStorage.removeItem('authToken');
        catalogPage();
        loadNav();
    } else {
        console.error(await response.json());
    }
}

window.addEventListener('load', async () => {
    document.querySelector('nav a').addEventListener('click', (ev) => {
        ev.preventDefault();
        catalogPage();
    })
    loadNav()
    catalogPage();
});

export function loadNav() {
    const userSection = document.getElementById('user');
    const guestSection = document.getElementById('guest');

    if (sessionStorage.getItem('authToken') != null) {
        userSection.style.display = 'inline-block';
        guestSection.style.display = 'none';

        document.getElementById('logoutBtn').addEventListener('click', logout);

        document.querySelectorAll('#user a')[0].addEventListener('click', (ev) => {
            ev.preventDefault();
            createPage(main)
        });
    } else {       
        userSection.style.display = 'none'; 
        guestSection.style.display = 'inline-block';

        guestSection.children[0].addEventListener('click', (ev) => {
            ev.preventDefault();
            
            loginPage(main);
        })

        guestSection.children[1].addEventListener('click', (ev) => {
            ev.preventDefault();
            
            registerPage(main);
        })
    }
}
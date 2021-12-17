import { logout } from './api/api.js';
import {page, render} from './lib.js';
import { getUserData } from './util.js';
import {catalogPage} from './views/catalog.js';
import {createPage} from './views/create.js';
import {detailsPage} from './views/details.js';
import {editPage} from './views/edit.js';
import {loginPage} from './views/login.js';
import {registerPage} from './views/register.js';

const root = document.querySelector('div.container');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/my-furniture', catalogPage);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav

    next();
}

function updateNav() {
    const userData = getUserData()
    if (userData) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }

}

async function onLogout() {
    await logout();
    updateNav();
    page.redirect('/')
}
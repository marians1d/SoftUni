import { logout } from './api/api.js';
import {page, render} from './lib.js'
import { getUserData } from './util.js';
import { catalogPage } from './vews/catalog.js';
import { createPage } from './vews/create.js';
import { detailsPage } from './vews/details.js';
import { editPage } from './vews/edit.js';
import { homePage } from './vews/home.js';
import { loginPage } from './vews/login.js';
import { registerPage } from './vews/register.js';
import { searchPage } from './vews/search.js';

const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/catalog', catalogPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/search', searchPage)

loadNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.loadNav = loadNav;

    next();
}

function loadNav() {
    const userData = getUserData();

    if(userData) {
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'inline-block');
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'none');
    } else {
        [...document.querySelectorAll('.user')].forEach(i => i.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(i => i.style.display = 'inline-block');
    }
}

async function onLogout() {
    logout();
    loadNav()
    page.redirect('/');
}
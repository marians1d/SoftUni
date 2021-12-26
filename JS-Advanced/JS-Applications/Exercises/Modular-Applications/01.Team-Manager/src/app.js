import { getAllTeamsCount, logout } from './api/data.js';
import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/myTeams.js';
import { registerPage } from './views/register.js';
import { teamsPage } from './views/teams.js';

const root = document.querySelector('main');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/index.html', '/')

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/teams', teamsPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-teams', profilePage);

updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    ctx.getUserData = getUserData;
    ctx.pageState = 1;

    next();
}

function updateNav() {
    const userData = getUserData();
    
    if(userData) {
        document.querySelectorAll('.guest').forEach(l => l.style.display = 'none');
        document.querySelectorAll('.user').forEach(l => l.style.display = 'block');
    } else {
        document.querySelectorAll('.guest').forEach(l => l.style.display = 'block');
        document.querySelectorAll('.user').forEach(l => l.style.display = 'none');
    }
}

async function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}

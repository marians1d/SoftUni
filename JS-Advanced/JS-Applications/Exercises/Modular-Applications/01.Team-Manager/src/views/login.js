import {login} from '../api/data.js';
import {html} from '../lib.js';
import { validateEmail } from '../util.js';

const loginTemplate = (message, onLogin) => html` <section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit=${onLogin} id="login-form" class="main-form pad-large">
            ${message != null ? html`<div class="error">${message}</div>` : null}
            <label>E-mail: <input type="text" name="email" /></label>
            <label>Password: <input type="password" name="password" /></label>
            <input class="action cta" type="submit" value="Sign In" />
        </form>
        <footer class="pad-small">
            Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`;

export async function loginPage(ctx) {
    update(null);

    function update(message) {
        ctx.render(loginTemplate(message, onLogin));
    }

    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            return update('All fields are required!');
        }

        if (password.length < 3) {
            return update('Password must be at least 3 characters long!');
        }

        const isValid = validateEmail(email);

        if (isValid == false) {
            return update('Invalid email!')
        }

        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/my-teams');
    }
}

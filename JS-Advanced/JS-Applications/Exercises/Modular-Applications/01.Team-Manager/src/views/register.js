import {register} from '../api/data.js';
import {html} from '../lib.js';
import {validateEmail} from '../util.js';

const registerTemplate = (message, onRegister) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onRegister} id="register-form" class="main-form pad-large">
            ${message != null ? html`<div class="error">${message}</div>` : null}
            <label>E-mail: <input type="text" name="email" /></label>
            <label>Username: <input type="text" name="username" /></label>
            <label>Password: <input type="password" name="password" /></label>
            <label>Repeat: <input type="password" name="repass" /></label>
            <input class="action cta" type="submit" value="Create Account" />
        </form>
        <footer class="pad-small">
            Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

export async function registerPage(ctx) {
    update(null);

    function update(message) {
        ctx.render(registerTemplate(message, onRegister));
    }

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repass').trim();

        if (email == '' || password == '' || username == '') {
            return update('All fields are required!');
        }

        if (password != repass) {
            return update('Passwords don\'t match!')
        }

        if (password.length < 3) {
            return update('Password must be at least 3 characters long!');
        }

        if (username.length < 3) {
            return update('Username must be at least 3 characters long!');
        }

        const isValid = validateEmail(email);

        if (isValid == false) {
            return update('Invalid email!');
        }

        await register(username, email, password);
        ctx.updateNav();
        ctx.page.redirect('/my-teams');
    }
}

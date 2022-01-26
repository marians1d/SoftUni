window.addEventListener('load', async () => {
    const register = document.querySelector('form');
    register.addEventListener('submit', onRegister);
});

async function onRegister(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('rePass').trim();

    if (password != repass) {
        return console.error('Passwords don\'t match!')
    }

    const url = 'http://localhost:3030/users/register';

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        
        if (res.ok == false) {
            const response = res.json();
            throw new Error(response.message)
        }
        
        const body = await res.json();
    
        sessionStorage.setItem('token', body.accessToken);
    
        window.location = '/';
    } catch(err) {
        console.error(err.message);
    }

}

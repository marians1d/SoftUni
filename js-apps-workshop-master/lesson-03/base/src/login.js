window.addEventListener('load', async () => {
    document.querySelector('form').addEventListener('submit', onLogin)
});

async function onLogin(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    const url = 'http://localhost:3030/users/login'

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        
        if (res.ok == false) {
            const response = res.json();
            throw new Error(response.message);
        }
    
        const body = await res.json();
    
        sessionStorage.setItem('token', body.accessToken);
        
        window.location = '/';
    } catch(err) {
        console.error(err.message);
    }
}
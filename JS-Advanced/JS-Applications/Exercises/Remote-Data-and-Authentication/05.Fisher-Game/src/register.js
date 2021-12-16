async function onRegister(ev) {
    ev.preventDefault();
    
    const fields = new FormData(ev.target);
    
    const email = fields.get('email').trim();
    const password = fields.get('password').trim();
    const rePass = fields.get('rePass').trim();

    
    try {
        if (password != rePass) {
            throw new Error('Non matching passwords');
        }

        const body = JSON.stringify({email, password});

        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body
        });

        const response = await res.json();

        if (res.status == 200) {
            const user = {
                email: response.email,
                token: response.accessToken,
                id: response._id
            }

            sessionStorage.setItem('userData', JSON.stringify(user));
            
            window.location = '/index.html';
        } else {
            throw new Error(data.message);
        }
    } catch (err) {
        alert(err.message);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', onRegister);
});
window.addEventListener('DOMContentLoaded', () => {
    if (data != null) {
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
    }

    const logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', onLogout);
});

const data = JSON.parse(sessionStorage.getItem('userData'));

async function onLogout(ev) {
    const res = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': `${data.token}`
        }
    });

    if (res.ok == true) {
        sessionStorage.removeItem('userData');
        window.location = '/index.html';
    } else {
        alert('Error');
    }
}

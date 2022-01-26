window.addEventListener('load', async () => {
    document.querySelector('form').addEventListener('submit', onCreate);
});

async function onCreate(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const name = formData.get('name').trim();
    const img = formData.get('img').trim();
    const ingredients = formData.get('ingredients').trim().split('\n');
    const steps = formData.get('steps').trim().split('\n');

    if (name == '' || img == '' || ingredients == '' || steps == '') {
        return alert('All Fields Must be filled!')
    }

    const host = 'http://localhost:3030/data/recipes';
    const token = sessionStorage.getItem('token');

    try {
        const res = await fetch(host, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify({name, img, ingredients, steps})
        })

        if (res.ok == false) {
            const response = res.json();
            throw new Error(response.message);
        }

        await res.json();

        window.location = '/';
    } catch(err) {
        alert(err.message);
    }
}
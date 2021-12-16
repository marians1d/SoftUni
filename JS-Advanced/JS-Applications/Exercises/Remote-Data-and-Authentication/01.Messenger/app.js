function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSend);
    
    document.getElementById('refresh').addEventListener('click', onRefresh);
    
    onRefresh()
}

async function onSend(ev) {
    // do a post request
    const author = document.querySelector('[name="author"]');
    const content = document.querySelector('[name="content"]');
    
    await postMessage({author: author.value, content: content.value});

    text.value += '\n' + `${author.value}: ${content.value}`;
    
    content.value = '';
}

async function postMessage(message) {
    const url = 'http://localhost:3030/jsonstore/messenger';

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        if (res.status != 200) {
            throw new Error('Message Error');
        }

        const result = await res.json();

        return result;
    } catch (err) {
        alert('Error');
    }
}

async function onRefresh(ev) {

    const messages = await getMessages();

    text.textContent = messages.join('\n');
}

async function getMessages() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    try {
        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('Message Error');
        }

        const data = await res.json();

        const messages = Object.values(data);

        return messages.map((m) => `${m.author}: ${m.content}`);
    } catch (err) {
        alert('Error');
    }
}

const text = document.getElementById('messages');

attachEvents();
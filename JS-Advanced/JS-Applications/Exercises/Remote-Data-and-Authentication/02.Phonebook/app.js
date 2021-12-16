function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhones);

    document.getElementById('btnCreate').addEventListener('click', onCreate);

    list.addEventListener('click', onDelete)

    loadPhones();
}

const list = document.getElementById('phonebook');
const person = document.getElementById('person');
const phone = document.getElementById('phone');

attachEvents();


async function onCreate(ev) {
    const contact = {
        person: person.value,
        phone: phone.value
    };

    contact['_id'] = await createPhone(contact);

    list.appendChild(createElement(contact));

    person.value = '';
    phone.value = '';
}

async function createPhone(contact) {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    const data = await res.json();

    return data._id;
}

async function loadPhones() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const res = await fetch(url);
    const data = await res.json();

    list.replaceChildren(...Object.values(data).map((c) => createElement(c)))
}

async function onDelete(ev) {
    if(ev.target.dataset.id != undefined) {
        await deletePhone(ev.target.dataset.id);
        ev.target.parentNode.remove();
    }
}

async function deletePhone(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    const res = await fetch(url, {method: 'delete'});
    const response = await res.json();

    return response;
}

function createElement(contactInfo) {
    const li = document.createElement('li');
    li.innerHTML = `${contactInfo.person}: ${contactInfo.phone}`;

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.setAttribute('data-id', contactInfo._id);

    li.appendChild(button);

    return li;
}

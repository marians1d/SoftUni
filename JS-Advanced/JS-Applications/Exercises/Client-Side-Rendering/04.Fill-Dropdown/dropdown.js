import { html, render } from './node_modules/lit-html/lit-html.js'

let townsData;
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.querySelector('div');
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

const selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value=${i._id}>${i.text}</option>`)}
</select>`

update();

async function update(newOption) {
    if (newOption == undefined) {
        townsData = await loadOptions();
    } else {
        townsData.push(newOption);
    }

    const result = selectTemplate(townsData)

    render(result, root)
}

async function loadOptions() {
    try {
    const res = await fetch(url);

    if(res.ok == false) {
        const error = await res.json();
        throw new Error(error);
    }

    const data = await res.json();
    const options = Object.values(data); 

    return options;

    } catch (err) {
        alert(err.message);
    }
}

async function onSubmit(ev) {
    ev.preventDefault();

    const text = document.getElementById('itemText').value.trim();
    form.reset();

    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
    
        if(res.ok == false) {
            const error = await res.json();
            throw new Error(error);
        }
        const data = await res.json();

        update(data);   
        } catch (err) {
            alert(err.message);
        }
}
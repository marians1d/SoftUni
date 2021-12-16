import {html, render} from './node_modules/lit-html/lit-html.js';

let students;
const root = document.querySelector('tbody');
document.querySelector('#searchBtn').addEventListener('click', onClick);

const tableTemplate = (student) => html` <tr
    class=${student.status ? 'select' : null}
>
    <td>${student.item.firstName} ${student.item.lastName}</td>
    <td>${student.item.email}</td>
    <td>${student.item.course}</td>
</tr>`;

start();

function onClick() {
    const text = document
        .getElementById('searchField')
        .value.trim()
        .toLocaleLowerCase();

    const predicate = (v) => text && v.toLocaleLowerCase().includes(text);

    students.forEach((s) => (s.status = Object.values(s.item).some(predicate)));

    render(students.map(tableTemplate), root);
}

async function start() {
    students = Object.values(await getStudents());
    students = students.map((s) => ({item: s, status: false}));

    render(students.map(tableTemplate), root);
}

async function getStudents() {
    const url = 'http://localhost:3030/jsonstore/advanced/table';

    try {
        const res = await fetch(url);

        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error);
        }

        const data = await res.json();

        return data;
    } catch (err) {
        alert(err.message);
    }
}

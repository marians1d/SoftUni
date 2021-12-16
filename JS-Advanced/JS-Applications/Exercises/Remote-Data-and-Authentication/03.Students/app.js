const resuls = document.getElementById('results');

loadStudents();

const form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

async function createStudent(body) {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    
    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (res.status != 200) {
            throw new Error('');
        }

        const data = await res.json();
    } catch (err) {
        alert('An Error has ocured!');
    }
}

function onSubmit(ev) {
    ev.preventDefault();

    
    const data = new FormData(form)
    
    const body = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        facultyNumber: data.get('facultyNumber'),
        grade: data.get('grade')
    };

    createStudent(body);

    addStudent(body);

    form.reset()
}

async function loadStudents() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    try {
        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('');
        }

        const data = await res.json();

        Object.values(data).forEach((s) => {
            addStudent(s);
        });
    } catch (err) {
        alert('An Error has ocured!');
    }
}

function addStudent(info) {
    const row = document.createElement('tr');

    const firstName = document.createElement('td');
    firstName.textContent = info.firstName;

    const lastName = document.createElement('td');
    lastName.textContent = info.lastName;

    const facultyNumber = document.createElement('td');
    facultyNumber.textContent = info.facultyNumber;

    const grade = document.createElement('td');
    grade.textContent = Number(info.grade).toFixed(2);

    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(facultyNumber);
    row.appendChild(grade);

    resuls.appendChild(row);
}
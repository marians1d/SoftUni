async function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', showInfo)

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    let users;

    try {
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('');
        }
        const data = await res.json();

        users = Object.values(data);
    } catch (err) {
        alert('Error');
    }

    let count = 2;
    for (const user of users) {
        addUser(user);
    }

    function showInfo(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const profile = ev.target.parentNode;
            const unlock = profile.querySelector('input[value="unlock"]');
            const hidenFields = profile.querySelector('#user1HiddenFields');
            
            if (unlock.checked) {
                if (ev.target.textContent == 'Show more') {
                    hidenFields.style.display = 'inline';
                    ev.target.textContent = 'Hide it';
                } else {
                    hidenFields.style.display = '';
                    ev.target.textContent = 'Show more';
                }
            }
        }
    }

    function addUser(user) {
        const currentProfile = el(
            'div',
            {className: 'profile'},
            el('img', {src: './iconProfile2.png', className: 'userIcon'}),
            el('label', {}, 'Lock'),
            ' ',
            el('input', {
                type: 'radio',
                name: `user${count}Locked`,
                value: 'lock',
                checked: true
            }),
            ' ',
            el('lable', {}, 'Unlock'),
            ' ',
            el('input', {
                type: 'radio',
                name: `user${count}Locked`,
                value: 'unlock'
            }),
            el('hr', {}),
            el('lable', {}, 'Username'),
            el('input', {
                type: 'text',
                name: `user1Username`,
                value: user.username,
                disabled: true,
                readOnly: true
            }),
            el(
                'div',
                {id: `user1HiddenFields`},
                el('hr', {}),
                el('label', {}, 'Email:'),
                el('input', {
                    type: 'email',
                    name: 'user1Email',
                    value: user.email,
                    disabled: true,
                    readOnly: true
                }),
                el('label', {}, 'Age:'),
                el('input', {
                    type: 'email',
                    name: 'user1Age',
                    value: user.age,
                    disabled: true,
                    readOnly: true
                })
            ),
            el('button', {}, 'Show more')
        );
        count++;

        main.appendChild(currentProfile);
    }

    function el(type, attr, ...content) {
        const element = document.createElement(type);

        for (const prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}

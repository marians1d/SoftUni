const container = document.querySelector('.container');

export function showView(section) {
    container.replaceChildren(section);
}

export function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(
                attr.substring(2).toLocaleLowerCase(),
                value
            );
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce(
        (a, c) => a.concat(Array.isArray(c) ? c : [c]),
        []
    );

    content.forEach((e) => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

export function createPostView(data) {
    const element = e(
        'div',
        {className: 'header'},
        e('img', {src: './static/profile.png', alt: 'avatar'}),
        e(
            'p',
            {},
            e('span', {}, data.username),
            ' posted on ',
            e('time', {}, data.date)
        ),
        e('p', {className: 'post-content'}, data.content)
    );

    return element;
}

export function createPostElement(data) {
    const link = e(
        'a',
        {href: '#', className: 'normal'},
        e('h2', {}, data.title)
    );

    link.setAttribute('data-id', data._id);

    const element = e(
        'div',
        {className: 'topic-name-wrapper'},
        e(
            'div',
            {className: 'topic-name'},
            link,
            e(
                'div',
                {className: 'columns'},
                e(
                    'div',
                    {},
                    e('p', {}, `Date: `, e('time', {}, data.date)),
                    e(
                        'div',
                        {className: 'nick-name'},
                        e('p', {}, 'Username: ', e('span', {}, data.username))
                    )
                )
            )
        )
    );
    return element;
}

export function createComment(data) {
    const element = e(
        'div',
        {id: 'user-comment'},
        e(
            'div',
            {className: 'topic-name-wrapper'},
            e(
                'div',
                {className: 'topic-name'},
                e(
                    'p',
                    {},
                    e('strong', {}, data.username),
                    ' commented on ',
                    e('time', {}, data.date)
                ),
                e('div', {className: 'post-content'}, e('p', {}, data.content))
            )
        )
    );

    return element;
}

import { getLikes } from "./api/data.js";

const main = document.querySelector('main');

export function showView(section) {
    main.replaceChildren(section);
}

export function createDetails(data) {
    const aboutSection = e(
        'div',
        {className: 'col-md-4 text-center'},
        e('h3', {className: 'my-3'}, 'Movie Description'),
        e('p', {}, data.description)
    );

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData.id == data._ownerId) {
        aboutSection.appendChild(
            e('a', {className: 'btn btn-danger', href: '/delete'}, 'Delete')
        );

        aboutSection.appendChild(
            e('a', {className: 'btn btn-warning', href: '/edit'}, 'Edit')
        );
    } else {
        aboutSection.appendChild(
            e('a', {className: 'btn btn-primary', href: '/like'}, 'Like')
        );
    }

    const view = e(
        'section',
        {id: 'movie-example'},
        e(
            'div',
            {className: 'container'},
            e(
                'div',
                {className: 'row bg-light text-dark'},
                e('h1', {}, `Movie title: ${data.title}`),
                e(
                    'div',
                    {className: 'col-md-8'},
                    e('img', {
                        className: 'img-thumbnail',
                        src: data.img,
                        alt: 'Movie'
                    })
                ),
                aboutSection
            )
        )
    );

    return view;
}

export function createMovieCard(data) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const element = e(
        'div',
        {className: 'card mb-4'},
        e('img', {
            className: 'card-img-top',
            src: data.img,
            alt: 'Card image cap',
            width: '400'
        }),
        e(
            'div',
            {className: 'card-body'},
            e('h4', {className: 'card-title'}, data.title)
        )
    );

    if (userData != null) {
        const details = e(
            'a',
            {href: '/details'},
            e('button', {type: 'button', className: 'btn btn-info'}, 'Details')
        );

        details.setAttribute('data-id', data._id);

        const footer = e('div', {className: 'card-footer'}, details);

        element.appendChild(footer);
    }

    return element;
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

export async function getLikesElement(movieId) {
    const likeCount = await getLikes(movieId);

    return e('span', {className: 'enrolled-span'}, `Liked ${likeCount}`)
}
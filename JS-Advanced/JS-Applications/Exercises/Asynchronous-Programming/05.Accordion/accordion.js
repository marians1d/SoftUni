window.addEventListener('load', solution);

async function solution() {
    const sectionEl = document.getElementById('main');
    sectionEl.addEventListener('click', togleInfo);

    const adress = await getTitles();

    const articles = await Promise.all(adress.map((ar) => getContent(ar._id)));

    articles.forEach((a) => {
        sectionEl.appendChild(createSection(a));
    });

    function togleInfo(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const content = ev.target.parentNode.nextSibling;

            if (ev.target.textContent == 'More') {
                content.style.display = 'inline-block';
                ev.target.textContent = 'Less';
            } else {
                content.style.display = '';
                ev.target.textContent = 'More';
            }
        }
    }

    async function getTitles() {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

        try {
            const res = await fetch(url);

            if (res.status != 200) {
                throw new Error('Error');
            }

            const data = await res.json();
    
            return data;
        } catch(err) {
            alert('Error');
        }
    }

    async function getContent(id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        try {
            const res = await fetch(url);

            if (res.status != 200) {
                throw new Error('Error');
            }
            
            const data = await res.json();
    
            return data;
        } catch(err) {
            alert('Error');
        }
    }

    function createSection(article) {
        const element = el(
            'div',
            {className: 'accordion', style: 'margin:1em'},
            el(
                'div',
                {className: 'head'},
                el('span', {}, article.title),
                el('button', {className: 'button', id: article._id}, 'More')
            ),
            el('div', {className: 'extra'}, el('p', {}, article.content)),
        );

        return element;
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

window.addEventListener('load', solve);

function solve() {
    const titleElement = document.getElementById('post-title');
    const categoryElement = document.getElementById('post-category');
    const contentElement = document.getElementById('post-content');

    const reviewListElement = document.getElementById('review-list');
    const publishedListElement = document.getElementById('published-list');

    const clearButton = document.getElementById('clear-btn');

    document.getElementById('publish-btn').addEventListener('click', () => {

        const titleValue = titleElement.value;
        const categoryValue = categoryElement.value;
        const contentValue = contentElement.value;

        if (titleValue == '' || categoryValue == '' || contentValue == '') {
            return;
        }

        const liElement = document.createElement('li');
        liElement.classList.add('rpost');

        liElement.innerHTML = `<article>
        <h4>${titleValue}</h4>
        <p>Category: ${categoryValue}</p>
        <p>Content: ${contentValue}</p>
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`;

        reviewListElement.appendChild(liElement);

        const editButton = liElement.querySelector('.edit');
        const approveButton = liElement.querySelector('.approve');

        editButton.addEventListener('click', (e) => {
            titleElement.value = titleValue;
            categoryElement.value = categoryValue;
            contentElement.value = contentValue;

            e.target.parentElement.remove();
        });

        approveButton.addEventListener('click', (e) => {
            const liParent = e.target.parentElement;

            liParent.querySelector('.edit').remove();
            liParent.querySelector('.approve').remove();

            publishedListElement.appendChild(liParent);
        });

        clearForm();
    });

    clearButton.addEventListener('click', () => {
        publishedListElement.innerHTML = '';
    });

    function clearForm() {
        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';
    }
}

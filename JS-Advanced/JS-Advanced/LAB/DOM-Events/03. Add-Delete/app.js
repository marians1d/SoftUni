function addItem() {
    const item = document.getElementById('newItemText');
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.textContent = item.value;
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', remove);

    li.appendChild(a);

    document.getElementById('items').appendChild(li);

    item.value = '';

    function remove(e) {
        e.target.parentElement.remove();
    }
}

function addItem() {
    const item = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = item.value;

    document.querySelector('ul').appendChild(li);

    item.value = '';
}
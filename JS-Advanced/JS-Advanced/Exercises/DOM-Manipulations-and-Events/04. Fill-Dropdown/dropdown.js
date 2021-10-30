function addItem() {
    const text = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = itemValue.value;

    document.getElementById('menu').appendChild(option);

    text.value = '';
    itemValue.value = '';
}
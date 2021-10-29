function solve() {
    document.querySelector('#add-new button').addEventListener('click', addMovie);
    document.querySelector('#archive button').addEventListener('click', onClear);

    const [name, hall, price] = document.querySelectorAll('#add-new input');
    
    function addMovie(ev) {
        ev.preventDefault();
        if (name.value != '' && hall.value != '' && price.value != '' && !isNaN(Number(price.value))) {
            const li = document.createElement('li');
            const nameEl = document.createElement('span');
            const hallEl = document.createElement('strong');
            const div = document.createElement('div');
            
            const priceEl = document.createElement('strong');
            const countEl = document.createElement('input');
            const buttonEl = document.createElement('button');
            
            nameEl.textContent = name.value;
            hallEl.textContent = `Hall: ${hall.value}`;
            priceEl.textContent = Number(price.value).toFixed(2);
            countEl.placeholder = 'Tickets Sold';
            buttonEl.textContent = 'Archive';

            buttonEl.addEventListener('click',  onArchive);

            div.appendChild(priceEl);
            div.appendChild(countEl);
            div.appendChild(buttonEl);

            li.appendChild(nameEl);
            li.appendChild(hallEl);
            li.appendChild(div);

            document.querySelector('#movies ul').appendChild(li);

            name.value = '';
            hall.value = '';
            price.value = '';
        }
        
    }
    function onArchive(ev) {
        const currentMovie = ev.target.parentElement.parentElement;
        const soldCount = currentMovie.querySelector('input');
        
        if (soldCount.value != '' && !isNaN(Number(soldCount.value))) {
            const moviePrice = currentMovie.querySelector('div strong');
            const movieTitle = currentMovie.querySelector('span');

            const archivedTitle = document.createElement('li');
            const archivedTotal = document.createElement('strong');
            const archivedDeleteBtn = document.createElement('button');

            const total = (Number(moviePrice.textContent) * Number(soldCount.value));

            archivedTotal.textContent = `Total amount: ${total.toFixed(2)}`;
            archivedDeleteBtn.textContent = 'Delete';
            archivedDeleteBtn.addEventListener('click', onDelete)

            archivedTitle.appendChild(movieTitle);
            archivedTitle.appendChild(archivedTotal);
            archivedTitle.appendChild(archivedDeleteBtn);

            document.querySelector('#archive ul').appendChild(archivedTitle);

            currentMovie.remove();
        }
    }

    function onDelete(ev) {
        ev.target.parentElement.remove()
    }
    
    function onClear(ev) {
        ev.target.previousElementSibling.innerHTML = '';
    }
}
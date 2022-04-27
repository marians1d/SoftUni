window.addEventListener('load', solve);

function solve() {
    const descriptionElement = document.getElementById('description');
    const nameElement = document.getElementById('client-name');
    const phoneElement = document.getElementById('client-phone');
    const typeElement = document.getElementById('type-product');

    const receivedOrdersElement = document.getElementById('received-orders');
    const completedOrdersElement = document.getElementById('completed-orders');

    document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();

        const descriptionValue = descriptionElement.value;
        const nameValue = nameElement.value;
        const phoneValue = phoneElement.value;
        const typeValue = typeElement.value;
    

        if (descriptionValue == '' || phoneValue == '' || nameValue == '') {
            return;
        }

        const divContainerElement = document.createElement('div');
        divContainerElement.classList.add('container');

        divContainerElement.innerHTML = `<h2>Product type for repair: ${typeValue}</h2>
        <h3>Client information: ${nameValue}, ${phoneValue}</h3>
        <h4>Description of the problem: ${descriptionValue}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>`;

        receivedOrdersElement.appendChild(divContainerElement);

        const startBtnElement = divContainerElement.querySelector('.start-btn');
        const finishBtnElement = divContainerElement.querySelector('.finish-btn');

        startBtnElement.addEventListener('click', (e) => {
            startBtnElement.disabled = true;
            finishBtnElement.disabled = false;
        });

        finishBtnElement.addEventListener('click', (e) => {
            e.target.parentElement.remove();

            const completedContainerElement = document.createElement('div');
            completedContainerElement.classList.add('container');

            completedContainerElement.innerHTML = `<h2>Product type for repair: ${typeValue}</h2>
        <h3>Client information: ${nameValue}, ${phoneValue}</h3>
        <h4>Description of the problem: ${descriptionValue}</h4>`;

        completedOrdersElement.appendChild(completedContainerElement);
        });

        document.querySelector('.clear-btn').addEventListener('click', (e) => {
            const containerElements = Array.from(e.target.parentElement.querySelectorAll('.container'));

            containerElements.forEach(e => {
                e.remove();
            });
        });


        clearForm();
    });

    function clearForm() {
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';
    }
}
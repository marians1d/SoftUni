function solve() {
    const recipientInputElement = document.getElementById('recipientName');
    const titleInputElement = document.getElementById('title');
    const messageInputElement = document.getElementById('message');

    const listElement = document.getElementById('list');
    const sentListElement = document.querySelector('.sent-list');
    const deleteListElement = document.querySelector('.delete-list');

    // add button
    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();

        if (recipientInputElement.value == '' || titleInputElement.value == '' || messageInputElement.value == '') {
            return;
        }

        const titleValue = titleInputElement.value;
        const recipientValue = recipientInputElement.value;
        const messageValue = messageInputElement.value;

        const listItemElement = document.createElement('li');
        listItemElement.innerHTML = `<h4>Title: ${titleValue}</h4>
        <h4>Recipient Name: ${recipientValue}</h4>
        <span>${messageValue}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

        resetForm();
        
        listElement.appendChild(listItemElement);


        listItemElement.querySelector('#send').addEventListener('click', (e) => {
            listItemElement.remove();
            
            const sentElement = document.createElement('li');
            sentElement.innerHTML = `<span>To: ${recipientValue}</span>
            <span>Title: ${titleValue}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            

            sentListElement.appendChild(sentElement);

            sentElement.querySelector('.delete').addEventListener('click', (e) => {
                sentElement.remove();

                addToDeleteList(recipientValue, titleValue);
            });
        });

        listItemElement.querySelector('#delete').addEventListener('click', (e) => {
            listItemElement.remove();

            addToDeleteList(recipientValue, titleValue);
        });
    });

    // reset button
    document.getElementById('reset').addEventListener('click', (e) => {
        e.preventDefault();

        resetForm();
    });

    function resetForm() {
        recipientInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }

    function addToDeleteList(to, title) {
        const deleteElement = document.createElement('li');
        deleteElement.innerHTML = `<span>To: ${to}</span>
        <span>Title: ${title}</span>`;

        deleteListElement.appendChild(deleteElement);
    }
}
solve();
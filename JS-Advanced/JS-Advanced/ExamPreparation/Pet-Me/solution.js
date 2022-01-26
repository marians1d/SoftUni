function solve() {
    // # Get referaces to needed inputs
    // refer to input fields and read value
    const fields = Array.from(document.querySelectorAll('#container input'));
    const adoptionList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');
    const add = document.querySelector('#container button');
    add.addEventListener('click', addPet);

    // # Add to adoption list
    // if not every given input is filed do noting
    // on Add button event listener remove defalt behavior
    // create element by given structure
    // add created element by ID adoption
    // clear input fields
    function addPet(ev) {
        ev.preventDefault();

        let [name, age, kind, owner] = fields.map((f) => f.value.trim());

        if (name == '' || age == '' || kind == '' || owner == '' || Number.isNaN(Number(age))) {
            throw new Error('Invalid input');
        }

        let contactBtn = e('button', {}, 'Contact with owner');

        let pet = e('li', {},
            e('p', {}, 
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
        );

        contactBtn.addEventListener('click', confirmAdoption);
        pet.appendChild(contactBtn);

        adoptionList.appendChild(pet);

        for (let field of fields) {
            field.value = '';
        }

        
        // # Contact owner adoption 
        // remove button
        // append <div> whit input and button
        // add new event listener
        function confirmAdoption() {
            contactBtn.remove();

            let contactInput = e('input', { placeholder: 'Enter your names' });
            let confirmBtn = e('button', {}, 'Yes! I take it!');
            confirmBtn.addEventListener('click', adoptPet.bind(null, pet, contactInput))

            let info = e('div', {}, 
                contactInput,
                confirmBtn
            );

            pet.appendChild(info);
        }
    }


    // # Adopt pet
    // change span message
    // remove div and add button
    // appent pet to adopted list
    function adoptPet(pet, newOwner) {
        if (newOwner.value == '') {
            throw new Error('No input');
        }
        pet.querySelector('div').remove();

        let owner = pet.querySelector('span');
        owner.textContent = `New Owner: ${newOwner.value}`

        let checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', checked.bind(null, pet))
        pet.appendChild(checkBtn)

        adoptedList.appendChild(pet);
    }

    function checked(pet) {
        pet.remove()
    }

    function e(type, atributes, ...content) {
        let element = document.createElement(type);

        for (let prop in atributes) {
            element[prop] = atributes[prop];
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
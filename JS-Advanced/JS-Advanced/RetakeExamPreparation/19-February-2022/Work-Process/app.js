function solve() {
    const firstNameInputElement = document.getElementById('fname');
    const lastNameInputElement = document.getElementById('lname');
    const emailInputElement = document.getElementById('email');
    const birthInputElement = document.getElementById('birth');
    const positionInputElement = document.getElementById('position');
    const salaryInputElement = document.getElementById('salary');

    const tableBodyElement = document.getElementById('tbody');
    const sumElement = document.getElementById('sum');

    document.getElementById('add-worker').addEventListener('click', (e) => {
        e.preventDefault();

        const firstNameValue = firstNameInputElement.value;
        const lastNameValue = lastNameInputElement.value;
        const emailValue = emailInputElement.value;
        const birthValue = birthInputElement.value;
        const positionValue = positionInputElement.value;
        const salaryValue = Number(salaryInputElement.value);

        if (firstNameValue == '' || lastNameValue == '' || emailValue == '' || birthValue == '' || positionValue == '' || salaryValue == '') {
            return;
        }

        const rowElement = document.createElement('tr');
        rowElement.innerHTML = `<td>${firstNameValue}</td>
        <td>${lastNameValue}</td>
        <td>${emailValue}</td>
        <td>${birthValue}</td>
        <td>${positionValue}</td>
        <td>${salaryValue}</td>
        <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`;

        sumElement.textContent = (Number(sumElement.textContent) + salaryValue).toFixed(2);

        tableBodyElement.appendChild(rowElement);

        rowElement.querySelector('.edit').addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();

            firstNameInputElement.value = firstNameValue;
            lastNameInputElement.value = lastNameValue;
            emailInputElement.value = emailValue;
            birthInputElement.value = birthValue;
            positionInputElement.value = positionValue;
            salaryInputElement.value = salaryValue;

            sumElement.textContent = (Number(sumElement.textContent) - salaryValue).toFixed(2);
        });

        rowElement.querySelector('.fired').addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();

            sumElement.textContent = (Number(sumElement.textContent) - salaryValue).toFixed(2);
        });

        clearForm();
    });


    function clearForm() {
        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        emailInputElement.value = '';
        birthInputElement.value = '';
        positionInputElement.value = '';
        salaryInputElement.value = '';
    }
}
solve();
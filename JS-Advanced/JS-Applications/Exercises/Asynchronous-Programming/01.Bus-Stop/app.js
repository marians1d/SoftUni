async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const submitBtn = document.getElementById('submit');

    const nameField = document.getElementById('stopName');
    const stopsField = document.getElementById('buses');

    const stops = await getBusId(stopId);

    nameField.textContent = stops.name;

    Object.entries(stops.buses).forEach((s) => {
        const stop = document.createElement('li');
        stop.textContent = `Bus ${s[0]} arrives in ${s[1]} minutes`;
        stopsField.appendChild(stop);
    });

    submitBtn.disabled = false;

    async function getBusId(id) {
        nameField.textContent = 'Loading...';
        stopsField.replaceChildren();
        submitBtn.disabled = true;

        const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;

        try {
            const res = await fetch(url);

            if (res.status != 200 || id == '') {
                throw new Error('Error');
            }

            const data = await res.json();

            return data;
        } catch (err) {
            nameField.textContent = 'Error';
            submitBtn.disabled = false;

            throw new Error('Wrong ID')
        }
    }
}

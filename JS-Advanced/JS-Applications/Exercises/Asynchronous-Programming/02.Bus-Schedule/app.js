function solve() {
    const infoElement = document.querySelector('#info span');

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        departBtn.disabled = true;
        infoElement.textContent = 'Loading...';

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        try {
            const res = await fetch(url);
            if (res.status != 200) {
                throw new Error('error');
            }
            stop = await res.json();
        } catch (err) {
            infoElement.textContent = 'Error';
            arriveBtn.disabled = true;

            return;
        }

        infoElement.textContent = `Next stop ${stop.name}`;

        arriveBtn.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

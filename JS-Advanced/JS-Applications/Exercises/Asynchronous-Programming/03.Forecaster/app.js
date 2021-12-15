function attachEvents() {
    const currentTitle = document.querySelector('#current div');

    let currentInfo = null;
    let forecastInfo = null;

    const symbols = {
        Sunny: '\u2600',
        'Partly sunny': '\u26C5',
        Overcast: '\u2601',
        Rain: '\u2614'
    };
    const degreeSymbol = '\u00B0';

    document.getElementById('submit').addEventListener('click', displayWeather);

    // checking if enter is pressed
    window.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            displayWeather();
        }
    });

    async function displayWeather() {
        const location = document.getElementById('location');
        currentTitle.textContent = 'Loading...';

        if (currentInfo != undefined) {
            currentInfo.remove();
            forecastInfo.remove();
        }

        document.getElementById('forecast').style.display = 'block';

        let currentWether, forecast;

        try {
            const code = await getWetherCode(location.value);

            [currentWether, forecast] = await Promise.all([
                getCurrentConditions(code),
                getForecast(code)
            ]);
        } catch (err) {
            currentTitle.textContent = 'Error';
            return;
        }

        currentTitle.textContent = 'Current conditions';

        location.value = '';

        currentInfo = currentSection(currentWether);
        document.getElementById('current').appendChild(currentInfo);

        forecastInfo = el('div', {className: 'forecast-info'});

        for (const day of forecast) {
            forecastSection(day, symbols, degreeSymbol);
        }

        document.getElementById('upcoming').appendChild(forecastInfo);
    }

    async function getWetherCode(location) {
        try {
            const url = 'http://localhost:3030/jsonstore/forecaster/locations';

            const res = await fetch(url);
            if (res.status != 200) {
                throw new Error('');
            }
            const data = await res.json();

            return data
                .filter((e) => e.name == location)
                .map((el) => el.code)[0];
        } catch (err) {
            throw new Error('');
        }
    }

    async function getCurrentConditions(code) {
        try {
            const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

            const res = await fetch(url);
            if (res.status != 200) {
                throw new Error('');
            }
            const data = await res.json();

            return data;
        } catch (err) {
            throw new Error('');
        }
    }

    async function getForecast(code) {
        try {
            const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

            const res = await fetch(url);
            if (res.status != 200) {
                throw new Error('');
            }
            const data = await res.json();

            return data.forecast;
        } catch (err) {
            throw new Error('');
        }
    }

    function currentSection(currentWether) {
        const info = el(
            'div',
            {className: 'forecasts'},
            el(
                'span',
                {className: 'condition symbol'},
                symbols[currentWether.forecast.condition]
            ),
            el(
                'span',
                {className: 'condition'},
                el('span', {className: 'forecast-data'}, currentWether.name),
                el(
                    'span',
                    {className: 'forecast-data'},
                    `${currentWether.forecast.low}${degreeSymbol}/${currentWether.forecast.high}${degreeSymbol}`
                ),
                el(
                    'span',
                    {className: 'forecast-data'},
                    `${currentWether.forecast.condition}`
                )
            )
        );

        return info;
    }

    function forecastSection(day) {
        const forecastResponce = el(
            'span',
            {className: 'upcoming'},
            el('span', {className: 'symbol'}, symbols[day.condition]),
            el(
                'span',
                {className: 'forecast-data'},
                `${day.low}${degreeSymbol}/${day.high}${degreeSymbol}`
            ),
            el('span', {className: 'forecast-data'}, day.condition)
        );

        forecastInfo.appendChild(forecastResponce);
    }

    function el(type, attr, ...content) {
        const element = document.createElement(type);

        for (const prop in attr) {
            element[prop] = attr[prop];
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

attachEvents();
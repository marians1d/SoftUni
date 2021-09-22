function neighborhoods(input) {
    const neighborhoods = {};

    const names = input.shift().split(', ');

    for (const name of names) {
        neighborhoods[name] = [];
    }

    for (const line of input) {
        const [streetName, person] = line.split(' - ');

        if (neighborhoods[streetName]) {
            neighborhoods[streetName].push(person);
        }
    }

    const sortedNeighborhoods = Object.entries(neighborhoods).sort(
        (a, b) => b[1].length - a[1].length
    );

    for (const line of sortedNeighborhoods) {
        console.log(`${line[0]}: ${line[1].length}`);

        for (const el of line[1]) {
            console.log('--' + el);
        }
    }
}

occurrences([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);

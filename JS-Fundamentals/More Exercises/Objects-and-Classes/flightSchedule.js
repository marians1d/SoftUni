function solve(input) {
    let airport = {};
    for (let i = 0; i < input[0].length; i++) {
        let [key, name] = input[0][i].split(' ');

        airport[key] = {
            destination: name,
            status: 'Ready to fly'
        }
    }

    for (let i = 0; i < input[1].length; i++) {
        let [key, info] = input[1][i].split(' ');

        if (airport[key] !== undefined) {
            airport[key].status = info;
        }
    }

    for (let plane in airport) {
        if (airport[plane].status === input[2][0]) {
            console.log(`{ Destination: '${airport[plane].destination}', Status: '${airport[plane].status}' }`);
        }
    }
}

solve([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
]);

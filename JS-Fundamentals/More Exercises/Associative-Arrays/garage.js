function solve(input) {
    let garage = {};
    for (let line of input) {
        let [num, info] = line.split(' - ');
        if (garage[num] === undefined) {
            garage[num] = [];
        }

        let temp = [];
        info = info.split(', ');
        for (let piece of info) {
            temp.push((piece.split(': ')). join(' - '));
        }
        garage[num].push(temp.join(', '));

    }

    let keys = Object.keys(garage);
    for (let key of keys) {
        console.log(`Garage № ${key}`);
        for(let line of garage[key]) {
            console.log(`--- ${line}`);
        }
    }
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);

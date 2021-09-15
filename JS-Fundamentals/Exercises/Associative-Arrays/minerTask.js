function solve(input) {
    let ores = {};
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let qty = Number(input[i + 1]);

        if (ores[name] === undefined) {
            ores[name] = qty;
        } else {
            ores[name] += qty;
        }
    }

    for (let key of Object.keys(ores)) {
        console.log(key + ' -> ' + ores[key]);
    }
}

solve(['Gold', '155', 'Silver', '10', 'Copper', '17']);

console.log('------');

solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
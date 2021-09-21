function storage(input) {
    let map = new Map();

    for (let line of input) {
        let [item, amount] = line.split(' ');
        amount = Number(amount);

        if (map.has(item)) {
            amount += map.get(item);
        }
        map.set(item, amount);
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
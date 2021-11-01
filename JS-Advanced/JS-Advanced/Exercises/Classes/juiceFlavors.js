function solve(input) {
    const flavors = new Map();
    let resultKeys = [];
    for (const line of input) {
        let [name, quantity] = line.split(' => ');

        if (flavors.has(name)) {
            let current = flavors.get(name);
            flavors.set(name, current + Number(quantity));
        } else {
            flavors.set(name, Number(quantity));
        }

        if (flavors.get(name) >= 1000 && resultKeys.includes(name) == false) {
            resultKeys.push(name);
        }
    }

    for (const key of resultKeys) {
        console.log(`${key} => ${Math.floor(flavors.get(key) / 1000)}`);
    }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

console.log('---');

solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);

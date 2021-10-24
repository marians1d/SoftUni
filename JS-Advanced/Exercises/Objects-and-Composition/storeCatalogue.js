function solve(input) {
    const catalogue = {};
    for (const line of input) {
        let [name, price] = line.split(' : ');
        price = Number(price);

        let initial = name[0];

        if (!catalogue[initial]) {
            catalogue[initial] = {}; 
        }

        catalogue[initial][name] = price;
    }

    const sortedInitials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sortedInitials) {
        const sortedProducts = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);

        for (const product of sortedProducts) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
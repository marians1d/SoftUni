function solve(input) {
    const products = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products[product]) {
            products[product] = {};
        }
        products[product][town] = price;
    }

    for (const key in products) {
        const sorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);




// solve(['Sofia City | Audi | 100000',
// 'Mexico City | Audi | 1000',
// 'Mexico City | Audi | 100000',
// 'Sofia City | BMW | 100000',
// 'Sofia City | Mitsubishi | 10000',
// 'Sofia City | Mercedes | 10000',
// 'Sofia City | NoOffenseToCarLovers | 0',
// 'Mexico City | BMW | 99999',
// 'New York City | Mitsubishi | 10000',
// 'New York City | Mitsubishi | 1000',
// 'Washington City | Mercedes | 1000'])
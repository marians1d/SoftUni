function solve(input) {
    let products = {};
    for (let line of input) {
        let initial = line[0];
        if (!Object.keys(products).includes(initial)) {
            products[initial] = [];
        }
        products[initial].push(line.split(' : ').join(': '));
    }

    // sorting 
    let productsArr = Object.entries(products);
    productsArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let i = 0; i < productsArr.length; i++) {
        productsArr[i][1].sort((a, b) => a.localeCompare(b));
        
        console.log(productsArr[i][0]);

        for (let j = 0; j < productsArr[i][1].length; j++) {
            console.log('  ' + productsArr[i][1][j]);
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
])
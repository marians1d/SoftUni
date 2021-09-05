function solve(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.\d+|\d+)!(?<qty>\d+)/;
    let shopingCart = [];
    let totalCost = 0;
    while (input[0] != 'Purchase') {
        let currentItem = input.shift();

        let currentRegexp = pattern.exec(currentItem);

        if (currentRegexp != null) {
            let {name, price, qty} = currentRegexp.groups;
            Number(price);
            Number(qty);

            shopingCart.push(name);

            totalCost += price * qty;
        }
    }

    console.log('Bought furniture:');
    if (shopingCart.length > 0) {
        for (let item of shopingCart) {
            console.log(item);
        }
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

solve(['>>Sofa<<.23!3', '>>TV<<!5', '>Invalid<<!5', 'Purchase']);
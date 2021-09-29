function solve(input) {
    let value = 0;
    for (let action of input) {
        if (action === 'soap') {
            value += 10;
        } else if (action === 'water') {
            value *= 1.2;
        } else if (action === 'vacuum cleaner') {
            value *= 1.25;
        } else if (action === 'mud') {
            value *= 0.9;
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);

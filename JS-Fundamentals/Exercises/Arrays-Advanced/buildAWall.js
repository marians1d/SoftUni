function solve(input) {
    input = input.map(Number);
    let totalCost = 0;
    let concreteAmount = [];

    while (input.length > 0) {
        input = input.filter(x => x !== 30);
        // 195 per person
        if (input.length == 0) {
            break;
        }
        let currentConcrete = 195 * input.length;
        concreteAmount.push(currentConcrete);
        totalCost += currentConcrete;

        for (let i = 0; i < input.length; i++) {
            input[i]++;
        }
    }

    console.log(concreteAmount.join(', '));
    console.log((totalCost * 1900) + ' pesos');
}

solve([27])
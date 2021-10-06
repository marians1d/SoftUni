function solve(townInfo) {
    const towns = {};

    for (const line of townInfo) {
        let [name, population] = line.split(' <-> ');
        population = Number(population);

        if (towns[name]) {
            population += towns[name];
        }

        towns[name] = population;
    }

    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
console.log('-----');
solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);

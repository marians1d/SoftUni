function record(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        race: {1: 1, 2: 2}
    };

    return city;
}

console.log(record('Tortuga', 7000, 15000));
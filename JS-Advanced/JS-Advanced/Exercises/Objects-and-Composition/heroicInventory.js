function solve(input) {
    let heroes = [];
    input.forEach((element) => {
        let [name, level, items] = element.split(' / ');
        level = Number(level);

        const hero = {
            name,
            level,
            items: items ? items.split(', ') : []
        };

        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

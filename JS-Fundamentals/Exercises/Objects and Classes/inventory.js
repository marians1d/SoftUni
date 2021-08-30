function inventory(heroesInfo) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];
    for (let i = 0; i < heroesInfo.length; i++) {
        let [name, level, items] = heroesInfo[i].split(" / ");
        level = Number(level);
        items = items.split(", ").sort().join(", ");

        let hero = new Hero(name, level, items);

        heroes.push(hero);
    }

    for (let i = 0; i < heroes.length - 1; i++) {
        for (let j = i + 1; j < heroes.length; j++) {
            if (heroes[i].level > heroes[j].level) {
                let temp = heroes[i];
                heroes[i] = heroes[j];
                heroes[j] = temp;
            }

        }
    }

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
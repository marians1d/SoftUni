function solve(input) {
    let catalog = {};
    let actions = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    }
    // get n from input
    let n = Number(input.shift());

    // parse n number of plants discovered
    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');
        rarity = Number(rarity)

        catalog[name] = {
            rarity: Number(rarity),
            ratings: [],
            averageRating: 0,
        }
    }

    // while line isn't Exhibition, parse it
    while (input[0] != "Exhibition") {
        let [action, values] = input.shift().split(': ');
        let tokens = values.split(' - ');

        if (actions[action] != undefined && catalog[tokens[0]] != undefined) {
            actions[action](values);
        } else {
            // if comand is invalid print 'error'
            console.log('error');
        }
    }

    for (let key of Object.keys(catalog)) {
        let plant = catalog[key];
        if (plant.ratings.length != 0) {
            plant.averageRating /= plant.ratings.length;
        }
    }

    // sort plants by rarity and then by average rating
    let exhibitionAsArr = Object.entries(catalog).sort(sortingByRarity);

    function sortingByRarity(a, b) {
        return b[1].rarity - a[1].rarity || b[1].averageRating - a[1].averageRating
    }

    // print a static message 
    console.log('Plants for the exhibition:');
    // print every plant in the object
    for (let plant of exhibitionAsArr) {
        console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${(plant[1].averageRating).toFixed(2)}`);
    }

    // rate 
    function rate(values) {
        // - add rating to the plant's ratings
        let [name, rating] = values.split(' - ');
        let plant = catalog[name];
        rating = Number(rating)

        plant.ratings.push(rating);
        plant.averageRating += rating;

    }

    // update
    function update(values) {
        // - update the rarity whit a given new one
        let [name, newRarity] = values.split(' - ');
        let plant = catalog[name];

        plant.rarity = Number(newRarity);

    }

    // reset
    function reset(name) {
        // - remove all ratings
        let plant = catalog[name];

        plant.ratings = [];
        plant.averageRating = 0;

    }

}

solve([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Abfdr - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "fadf: Woodii - 15",
    "Reset: Arnoldii",
    "Exhibition"
])

solve([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
])


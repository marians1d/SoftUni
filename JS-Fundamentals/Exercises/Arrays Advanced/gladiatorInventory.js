function solve(input) {
    let actions = {
        Buy: buy,
        Trash: trash,
        Repair: repair,
        Upgrade: upgrade
    }

    let inventory = input.shift().split(' ');

    // go through each action
    for (let line of input) {
        let [action, equipment] = line.split(' ');

        actions[action](equipment);
    }

    // print inventory
    console.log(inventory.join(' '));

    // Buy
    function buy(equipment) {
        // if inventory doesn't include equipment
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }
    }

    // Trash
    function trash(equipment) {
        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);
            inventory.splice(index, 1);
        }
    }

    // Repair
    function repair(equipment) {
        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);

            inventory.splice(index, 1);

            inventory.push(equipment);
        }
    }

    // Upgrade
    function upgrade(tokens) {
        tokens = tokens.split('-');
        let equipment = tokens[0];

        if (inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment);

            let upgradeMessage = tokens.join(':');

            inventory.splice(index + 1, 0, upgradeMessage);
        }
    }
}

solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
])

solve([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])
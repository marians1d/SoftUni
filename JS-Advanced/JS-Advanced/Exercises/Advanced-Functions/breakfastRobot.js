function robot() {
    const library = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return controler;

    function restock(microelement, qty) {
        storage[microelement] += qty;
        return 'Success';
    }

    function prepare(recipe, qty) {
        let tempStorage = {
            protein: storage.protein,
            carbohydrate: storage.carbohydrate,
            fat: storage.fat,
            flavour: storage.flavour
        };
        
        const products = library[recipe];
        for (const ingredient in products) {
            tempStorage[ingredient] -= products[ingredient] * qty;

            if (tempStorage[ingredient] < 0) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        storage = tempStorage;

        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    function controler(str) {
        let [action, type, value] = str.split(' ');

        if (action == 'restock') {
            return restock(type, Number(value));
        } else if (action == 'prepare') {
            return prepare(type, Number(value));
        } else if (action == 'report') {
            return report();
        }
    }
}

let manager = robot();
console.log(manager('restock flavour 50')); // Success
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));

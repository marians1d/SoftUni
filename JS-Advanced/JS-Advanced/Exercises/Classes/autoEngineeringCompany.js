function solve(input) {
    let register = new Map();
    for (let line of input) {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (register.has(brand)) {
            if (register.get(brand)[model] != undefined) {
                register.get(brand)[model] += quantity; 
                continue;
            }
        } else {
            register.set(brand, {});
        }
        register.get(brand)[model] = quantity; 
    }

    for (let [key, value] of register) {
        console.log(key);

         for (let model in value) {
             console.log(`###${model} -> ${value[model]}`);
         }
    }
}

solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);

function storeProvision(stock, delivery) {
    let result = {};
    for (let i = 0; i < stock.length; i += 2) {
        result[stock[i]] = Number(stock[i + 1]);
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let isInside = false;
        for (let key of Object.keys(result)) {
            if (key === delivery[i]) {
                result[key] += Number(delivery[i + 1]);
                isInside = true;
            }
        }
        if (!isInside) {
            result[delivery[i]] = Number(delivery[i + 1]);
        }
    }

    for (let key of Object.keys(result)) {
        console.log(`${key} -> ${result[key]}`);
    }
}
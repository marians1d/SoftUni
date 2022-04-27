class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        const types = new Set();
        vegetables.forEach(v => {
            let [type, qty, price] = v.split(' ');
            qty = Number(qty);
            price = Number(price);

            types.add(type);

            const currentType = this.availableProducts.find(v => v.type == type);

            if (currentType) {
                currentType.qty += qty;

                if (currentType.price < price) {
                    currentType.price = price;
                }
            } else {
                this.availableProducts.push({ type, qty, price });
            }

        });

        return `Successfully added ${[...types.values()].join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(p => {
            let [type, qty] = p.split(' ');
            qty = Number(qty);

            const currentProduct = this.availableProducts.find(p => p.type == type);

            if (!currentProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                if (currentProduct.qty < qty) {
                    throw new Error(`The quantity ${qty} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                } else {
                    const currentPrice = currentProduct.price * qty;

                    currentProduct.qty -= qty;

                    totalPrice += currentPrice;
                }
            }
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        const currentType = this.availableProducts.find(v => v.type == type);

        if (!currentType) {
            throw new Error(`${type} is not available in the store.`);
        } else {
            if (currentType.qty < quantity) {
                currentType.qty = 0;

                return `The entire quantity of the ${type} has been removed.`;
            } else {
                currentType.qty -= quantity;

                return `Some quantity of the ${type} has been removed.`;
            }
        }

    }

    revision() {
        let message = [];

        message.push('Available vegetables:');

        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(p => {
                message.push(`${p.type}-${p.qty}-$${p.price}`);
        });

        message.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return message.join('\n');
    }
}

let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
console.log(vegStore.loadingVegetables(['Okra 2.5 3.5', 'Beans 10 2.8', 'Celery 5.5 2.2', 'Celery 0.5 2.5']));
console.log(vegStore.rottingVegetable('Okra', 1));
console.log(vegStore.rottingVegetable('Okra', 2.5));
console.log(vegStore.buyingVegetables(['Beans 8', 'Celery 1.5']));
console.log(vegStore.revision());

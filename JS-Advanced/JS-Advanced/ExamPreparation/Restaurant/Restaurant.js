class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        const actions = [];
        products.forEach((product) => {
            let [name, qty, totalPrice] = product.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);


            if (this.budgetMoney >= totalPrice) {
                this.budgetMoney -= totalPrice;
                if (this.stockProducts[name] != undefined) {
                    this.stockProducts[name] += qty;
                } else {
                    this.stockProducts[name] = qty;
                }
                this.history.push(`Successfully loaded ${qty} ${name}`);
                actions.push(`Successfully loaded ${qty} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${qty} ${name}`);
                actions.push(`There was not enough money to load ${qty} ${name}`);
            }
        });

        return actions.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] == undefined) {
            this.menu[meal] = {products: {}, price};

            neededProducts.forEach((product) => {
                let [name, qty] = product.split(' ');
                qty = Number(qty);

                this.menu[meal].products[name] = qty;
            });

            const mealsCount = Object.keys(this.menu).length;
            if (mealsCount == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        const meals = [];

        if (Object.values(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        for (let meal in this.menu) {
            const {price} = this.menu[meal];
            meals.push(`${meal} - $ ${price}`);
        }

        return meals.join('\n');
    }

    makeTheOrder(meal) {
        if (this.menu[meal] == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let isInStock = true;
        for (let product in this.menu[meal].products) {
            if (this.stockProducts[product] < this.menu[meal].products[product]) {
                isInStock = false;
                break;
            }
        }

        if (isInStock) {
            this.budgetMoney += this.menu[meal].price;
            for (let product in this.menu[meal].products) {
                this.stockProducts[product] -= this.menu[meal].products[product];
            }
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
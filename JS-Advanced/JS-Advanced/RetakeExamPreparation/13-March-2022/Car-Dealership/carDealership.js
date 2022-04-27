class CarDealership {
    availableCars = [];
    soldCars = [];
    totalIncome = 0;

    constructor(name) {
        this.name = name;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == '' || horsepower < 0 || price < 0 || mileage < 0 || horsepower % 1 != 0) {
            throw new Error('Invalid input!');
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileagee) {
        let startIndex;
        this.availableCars.forEach((v, index) => {
            if (v.model == model) {
                startIndex = index;

                return;
            }
        });
        
        if (startIndex == undefined) {
            throw new Error(`${model} was not found!`);
        }

        const [compatableCar] = this.availableCars.splice(startIndex, 1);


        if (compatableCar.mileage > desiredMileagee) {
            if (compatableCar.mileage - desiredMileagee <= 40000) {
                compatableCar.price = compatableCar.price * 0.95;
            } else {
                compatableCar.price = compatableCar.price * 0.90;
            }
        }

        this.soldCars.push({
            model: compatableCar.model,
            horsepower: compatableCar.horsepower,
            soldPrice: compatableCar.price
        });

        this.totalIncome += compatableCar.price;


        return `${compatableCar.model} was sold for ${compatableCar.price.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length > 0) {
            let message = [];

            message.push('-Available cars:');

            this.availableCars.forEach(c => {
                message.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
            });

            return message.join('\n');
        } else {
            return 'There are no available cars';
        }
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }

        let sortedSoldCars = [];

        if (criteria == 'horsepower'){
            sortedSoldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower); 
        } else {
            sortedSoldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        const message = [];

        message.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        message.push(`-${this.soldCars.length} cars sold:`);

        sortedSoldCars.forEach(c => {
            message.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
        });

        return message.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Tesla model 3', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
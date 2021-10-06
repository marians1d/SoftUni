function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    };

    function collectTaxes() {
        this.treasury += this.population * this.taxRate;
    }

    function applyGrowth(percentage) {
        this.population *= 1 + percentage / 100;
    }

    function applyRecession(percentage) {
        this.treasury *= 1 - percentage / 100;
    }
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);

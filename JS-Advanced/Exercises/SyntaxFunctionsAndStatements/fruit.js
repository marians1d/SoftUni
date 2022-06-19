function fruit(type, weight, price) {
    weight = weight / 1000;
    console.log(`I need $${(price * weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
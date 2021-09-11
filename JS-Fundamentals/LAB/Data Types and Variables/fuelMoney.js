function fuelMoney(distance, passengers, price) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let totalPrice = neededFuel * price;

    console.log(`Needed money for that trip is ${totalPrice}lv.`);
}
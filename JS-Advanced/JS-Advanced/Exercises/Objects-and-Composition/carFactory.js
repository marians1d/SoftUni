function solve(order) {
    return {
        model: order.model,
        engine: getEngine(order.power),
        carriage: {type: order.carriage, color: order.color},
        wheels: getWeels(order.wheelsize)
    };

    function getEngine(power) {
        let result;
        if (power <= 90) {
            result = {power: 90, volume: 1800};
        } else if (power <= 120) {
            result = {power: 120, volume: 2400};
        } else if (power <= 200) {
            result = {power: 200, volume: 3500};
        }

        return result;
    }

    function getWeels(size) {
        if (size % 2 !== 1) {
            size--;
        }

        return new Array(4).fill(size);
    }
}

console.log(
    solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    })
);

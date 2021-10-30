function circleArea(r) {
    let type = typeof(r);
    if (type === 'number') {
        console.log((r ** 2 * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);
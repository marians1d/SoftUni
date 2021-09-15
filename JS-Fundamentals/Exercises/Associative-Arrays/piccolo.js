function piccolo(input) {
    let garage = {};
    let isEmpty = true;

    for (let line of input) {
        let [action, plate] = line.split(', ');

        garage[plate] = action;
    }

    let sortedKeys = Object.keys(garage).sort((a, b) => a.localeCompare(b));
    for (const key of sortedKeys) {
        if (garage[key] === 'IN') {
            isEmpty = false;
            console.log(key);
        }
    }

    if (isEmpty) {
        console.log('Parking Lot is Empty');
    }
}
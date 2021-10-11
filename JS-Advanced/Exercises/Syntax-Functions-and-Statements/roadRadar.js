function radar(speed, area) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (limits[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else {
        const difference = speed - limits[area];

        let status;
        if (difference  <= 20) {
            status = 'speeding'
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${speed - limits[area]} km/h faster than the allowed speed of ${limits[area]} - ${status}`);
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');
function solve(steps, stepLength, speed) {
    const distance = steps * stepLength;
    const breakTime = Math.floor(distance / 500) * 60;
    const speedInMetersPerSecond = (speed * 1000) / 3600;
    const timeInSeconds = Math.round(distance / speedInMetersPerSecond + breakTime);

    const seconds = timeInSeconds % 60;
    const minutes = Math.floor((timeInSeconds / 60) % 60);
    const hours = Math.floor(timeInSeconds / 3600);

    let one = '';
    let two = '';
    let three = '';

    if (hours < 10) {
        one = '0';
    }
    if (minutes < 10) {
        two = '0';
    }
    if (seconds < 10) {
        three = '0';
    }
    
    console.log(`${one}${hours}:${two}${minutes}:${three}${seconds}`);
}

solve(4000, 0.6, 5);
solve(2564, 0.7, 5.5);
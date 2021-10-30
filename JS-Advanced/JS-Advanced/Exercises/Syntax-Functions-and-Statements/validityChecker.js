function validity(x1, y1, x2, y2) {
    let distanceX = Math.pow(Math.max(x1, x2) - Math.min(x1, x2), 2);
    let distanceY = Math.pow(Math.max(y1, y2) - Math.min(y1, y2), 2);

    
    let result1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let result2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let result3 = Math.sqrt(distanceX + distanceY);

    if (result1 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (result2 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (result3 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validity(3, 0, 0, 4);
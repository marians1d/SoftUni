function solve(num) {
    let numString = num.toString();
    let average = 0;

    for (let i = 0; i < numString.length; i++) {
        average += Number(numString[i]);
    }
    average /= numString.length;

    while (average <= 5) {
        numString += '9';
        average = 0;
        for (let i = 0; i < numString.length; i++) {
            average += Number(numString[i]);
        }
        average /= numString.length;
    }

    console.log(numString);
}

solve(101);
solve(5835);

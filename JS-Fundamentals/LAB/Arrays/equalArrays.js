function equalArrays(firstArr, secondArr) {
    let isIdentical = true;
    let indexDifference = 0;
    let identicalSum = 0;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            isIdentical = false;
            break;
        }
        identicalSum += Number(firstArr[i]);
        indexDifference++;
    }

    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${identicalSum}`);
    } else {
        console.log(
            `Arrays are not identical. Found difference at ${indexDifference} index`
        );
    }
}
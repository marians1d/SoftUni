function rounding(num, precision) {
    if (precision > 15) {
        precision = 15
    }
    let roundedNum = num.toFixed(precision);
    let zeroRemover = parseFloat(roundedNum);

    console.log(zeroRemover);
}
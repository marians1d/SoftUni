function binaryToDecimal(binary) {
    let binaryInString = binary.toString();
    let sum = 0;
    let currentNum = 1;

    for (let i = binaryInString.length - 1; i >= 0; i--) {
        if (binaryInString[i] === '1') {
            sum += currentNum;
        }
        currentNum *= 2;
    }

    console.log(sum);
}
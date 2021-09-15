function sumDigits(num) {
    let digits = num.toString();
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    console.log(sum);
}
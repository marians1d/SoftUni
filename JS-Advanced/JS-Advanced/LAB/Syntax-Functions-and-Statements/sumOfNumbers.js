function sumOfNumbers(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let total = 0;

    for (let i = num1; i <= num2; i++) {
        total += i;
    }

    console.log(total);
}

sumOfNumbers('1', '5');
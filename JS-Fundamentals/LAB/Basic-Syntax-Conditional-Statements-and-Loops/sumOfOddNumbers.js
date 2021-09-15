function sumOfOddNumbers(n) {
    let sum = 0;
    let currentNum = 1;
    for (let i = 1; i <= n; i++) {
        sum += currentNum;
        console.log(currentNum);
        currentNum += 2;
    }
    console.log('Sum: ' + sum);
}
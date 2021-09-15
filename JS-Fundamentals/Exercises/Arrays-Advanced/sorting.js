function sorting(numbers) {
    let sorted = numbers.sort((firstNum, secondNum) => firstNum - secondNum);
    let result = [];
    for (let i = 0; i < numbers.length / 2; i++) {
        result.push(sorted[sorted.length - i - 1]);
        if (i === sorted.length - i - 1) {
            break;
        }
        result.push(sorted[i]);
    }

    console.log(result.join(" "));
}
function sameNum(num) {
    let sum = 0;
    const value = num % 10;
    let isSame = true;

    let numbers = String(num);
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = parseInt(numbers[i]);
        sum += parseInt(currentNum);

        if (currentNum != value) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNum(2222222);
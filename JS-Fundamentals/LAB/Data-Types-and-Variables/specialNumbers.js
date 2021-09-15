function specialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let currentNum = i;
        while (currentNum != 0) {
            sum += currentNum % 10;
            currentNum = parseInt(currentNum / 10);
        }

        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
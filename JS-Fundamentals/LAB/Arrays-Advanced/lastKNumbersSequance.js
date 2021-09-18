function lastKNumbersSequence(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let currentSum = 0;
        for (let j = i - k; j < i; j++) {
            if (arr[j] === undefined) {
                continue;
            }
            currentSum += arr[j];
        }

        arr.push(currentSum);
    }

    console.log(arr.join(' '));
}
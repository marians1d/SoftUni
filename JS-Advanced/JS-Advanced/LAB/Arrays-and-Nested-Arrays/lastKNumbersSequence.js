function solve(n, k) {
    let result = [1];
    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let j = i - k + 1; j <= i; j++) {
            if (j >= 0) {
                sum += result[j];
            }
        }
        result.push(sum);
    }

    return result;
}

solve(6, 3);
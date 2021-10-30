function solve(matrix) {
    let result = [];
    for (let row = 0; row < matrix.length; row++) {
        result = result.concat(matrix[row]);
    }

    return Math.max(...result);
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);

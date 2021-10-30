function solve(matrix) {
    let diagonalTwo = matrix.length - 1;

    let sumOne = 0;
    let sumTwo = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumOne += matrix[i][i];
        sumTwo += matrix[i][diagonalTwo];
        diagonalTwo--;
    }

    console.log(sumOne + ' ' + sumTwo);
}

solve([
    [20, 40],
    [10, 60]
]);

function solve(matrix) {
    let count = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (validate(row + 1, col)) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    count++;
                }
            }

            if (validate(row, col + 1)) {
                if (matrix[row][col] === matrix[row][col + 1]) {
                    count++;
                }
            }

            if (validate(row - 1, col)) {
                if (matrix[row][col] === matrix[row - 1][col]) {
                    count++;
                }
            }

            if (validate(row, col - 1)) {
                if (matrix[row][col] === matrix[row][col - 1]) {
                    count++;
                }
            }
        }
    }

    console.log(count / 2);

    function validate(row, col) {
        return (
            row >= 0 &&
            row < matrix.length &&
            col >= 0 &&
            col < matrix[row].length
        );
    }
}

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

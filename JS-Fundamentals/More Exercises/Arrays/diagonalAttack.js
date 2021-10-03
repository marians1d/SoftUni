function solve(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = false;
        }
    }

    let sumOne = diagnalSumOne();
    let sumTwo = diagnalSumTwo();

    if (sumOne === sumTwo) {
        fillMatrix(sumOne);
        printResult('result');
    } else {
        printResult('matrix');
    }

    function diagnalSumOne() {
        let sum = 0;

        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][i];
            result[i][i] = matrix[i][i];
        }

        return sum;
    }

    function diagnalSumTwo() {
        let sum = 0;

        for (let row = 0, col = matrix.length - 1; col >= 0; col--, row++) {
            sum += matrix[row][col];
            result[row][col] = matrix[row][col];
        }

        return sum;
    }

    function fillMatrix(filling) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (result[row][col] === false) {
                    result[row][col] = filling;
                }
            }
        }
    }

    function printResult(str) {
        for (let i = 0; i < matrix.length; i++) {
            if (str == 'matrix') {
                console.log(matrix[i].join(' '));
            } else {
                console.log(result[i].join(' '));
            }
        }
    }
}

solve([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

console.log('-----');

solve([
    '1 1 1',
    '1 0 1',
    '1 1 1'
]);

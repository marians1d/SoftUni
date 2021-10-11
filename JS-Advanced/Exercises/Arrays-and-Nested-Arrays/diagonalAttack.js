function solve(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = false;
        }
    }

    let diagonalInfo = diagonalSum()
    if (diagonalInfo[0]) {
        fillMatrix(diagonalInfo[1]);
        printResult('result');
    } else {
        printResult('matrix');
    }

    function diagonalSum() {
        let sumOne = 0;
        let sumTwo = 0;

        let secondIndex = matrix.length - 1;
        for (let i = 0; i < matrix.length; i++) {
            sumOne += matrix[i][i];
            sumTwo += matrix[i][secondIndex];
            result[i][i] = matrix[i][i];
            result[i][secondIndex] = matrix[i][secondIndex];
            secondIndex--;
        }

        return [sumOne == sumTwo, sumOne];
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
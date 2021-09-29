function solve(matrix) {
    let n = Number(matrix.shift());

    let teplete = [];
    for (let row = 0; row < n; row++) {
        teplete[row] = [];
        teplete[row] = matrix.shift().split(' ').map(Number);
    }

    for (let row = 0; row < matrix.length; row++) {
        matrix[row] = matrix[row].split(' ').map(Number);
    }

    for (let row = 0; row < matrix.length; row += n) {
        for (let col = 0; col < matrix[row].length; col += teplete[0].length) {
            addTemplete(row, col);
        }
    }

    let result = '';
    for (let row = 0; row < matrix.length; row++) {
        result += matrix[row].join('');
    }
    console.log(result);

    function addTemplete(row, col) {
        for (let i = 0; i < n && row + i < matrix.length; i++) {
            for (
                let j = 0;
                j < teplete[0].length && col + j < matrix[row].length;
                j++
            ) {
                matrix[row + i][col + j] =
                    (matrix[row + i][col + j] + teplete[i][j]) % 27;

                if (matrix[row + i][col + j] !== 0) {
                    matrix[row + i][col + j] = String.fromCharCode(
                        matrix[row + i][col + j] + 64
                    );
                } else {
                    matrix[row + i][col + j] = ' ';
                }
            }
        }
    }
}

solve([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);

solve([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'
]);
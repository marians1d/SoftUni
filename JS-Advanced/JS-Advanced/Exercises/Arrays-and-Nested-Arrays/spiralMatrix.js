function solve(x, z) {
    let matrix = [];

    for (let i = 0; i < x; i++) {
        matrix[i] = [];
        for (let j = 0; j < z; j++) {
            matrix[i][j] = 0;
        }
    }

    let count = 1;
    let row = 0;
    let col = 0;

    let isCol = true;
    let isRow = false;

    let action = true;

    while (true) {
        if (count > x * z) {
            break;
        }
        matrix[row][col] = count;
        count++;

        if (isCol && action) {
            if (col < z - 1 && matrix[row][col + 1] === 0) {
                col++;
            } else {
                row++;
                isCol = false;
                isRow = true;
            }
        } else if (isRow && action) {
            if (row < x - 1 && matrix[row + 1][col] === 0) {
                row++;
            } else {
                col--;
                isCol = true;
                isRow = false;

                action = false;
            }
        } else if (isCol && !action) {
            if (col >= 0 && matrix[row][col - 1] === 0) {
                col--;
            } else {
                row--;
                isCol = false;
                isRow = true;
            }
        } else if (isRow && !action) {
            if (row >= 0 && matrix[row - 1][col] === 0) {
                row--;
            } else {
                col++;
                isCol = true;
                isRow = false;

                action = true;
            }
        }
    }

    //print

    for (let i = 0; i < x; i++) {
        console.log(matrix[i].join(' '));
    }
}

// solve(5, 5);
console.log('------');
solve(4, 3);

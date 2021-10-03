function solve(matrix) {
    let goal = 0;
    let isMagical = true;
    for (let i = 0; i < matrix[0].length; i++) {
        goal += matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentRow += matrix[i][j];
        }

        if (currentRow !== goal) {
            isMagical = false;
            break;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentCol += matrix[j][i];
        }

        if (currentCol !== goal) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);
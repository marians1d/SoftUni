function solve(matrix) {
    let goal = 0;
    let isMagical = true;
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    for (let i = 0; i < matrix[0].length; i++) {
        goal += matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i].reduce(reducer);

        metGoal(currentRow);
    }z

    for (let i = 0; i < matrix[0].length; i++) {
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentCol += matrix[j][i];
        }

        metGoal(currentCol);
    }

    console.log(isMagical);

    function metGoal(current) {
        if (current !== goal) {
            isMagical = false;
        }
    }
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
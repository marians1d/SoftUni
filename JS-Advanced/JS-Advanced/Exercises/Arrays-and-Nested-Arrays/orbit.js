function solve(input) {
    let [width, height, x, y] = input;
    let matrix = [];

    for (let row = 0; row < height; row++) {
        matrix[row] = [];
        for (let col = 0; col < width; col++) {
            matrix[row][col] =
                Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    for (let i = 0; i < height; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve([4, 4, 0, 0]);
console.log('-----');
solve([5, 5, 1, 2]);
console.log('-----');
solve([3, 3, 2, 2]);

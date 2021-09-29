function solve(matrix, input) {
    let actions = {
        breeze,
        gale,
        smog
    };

    for (let row = 0; row < 5; row++) {
        matrix[row] = matrix[row].split(' ').map(Number);
    }

    for (let i = 0; i < input.length; i++) {
        let [action, num] = input[i].split(' ');
        num = Number(num);

        actions[action](num);
    }

    printResult();

    function breeze(index) {
        for (let col = 0; col < 5; col++) {
            if (matrix[index][col] - 15 < 0) {
                matrix[index][col] = 0;
            } else {
                matrix[index][col] -= 15;
            }
        }
    }

    function gale(index) {
        for (let row = 0; row < 5; row++) {
            if (matrix[row][index] - 20 < 0) {
                matrix[row][index] = 0;
            } else {
                matrix[row][index] -= 20;
            }
        }
    }

    function smog(value) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                matrix[row][col] += value;
            }
        }
    }

    function printResult() {
        let result = [];
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (matrix[row][col] >= 50) {
                    result.push(`[${row}-${col}]`);
                }
            }
        }

        if (result.length !== 0) {
            console.log(`Polluted areas: ${result.join(', ')}`);
        } else {
            console.log('No polluted areas');
        }
    }
}

solve(
    [
        '5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'
    ],
    ['breeze 1', 'gale 2', 'smog 25']
);

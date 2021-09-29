function solve(matrix) {
    let totalDamage = 0;
    let totalKills = 0;
    let bombBunnys = parseCoordinates(matrix.pop());

    parseMatrix(matrix);

    for (let i = 0; i < bombBunnys.length; i++) {
        let [row, col] = bombBunnys[i];
        let currentDamage = matrix[row][col];
        explode(row, col, currentDamage);
    }

    finishThem();

    console.log(totalDamage);
    console.log(totalKills);

    function parseMatrix(input) {
        for (let row = 0; row < input.length; row++) {
            input[row] = input[row].split(' ').map(Number);
        }
    }

    function parseCoordinates(string) {
        string = string.split(' ');

        for (let i = 0; i < string.length; i++) {
            string[i] = string[i].split(',').map(Number);
        }

        return string;
    }

    function explode(row, col, damage) {
        if (matrix[row][col] !== 0) {
            totalDamage += damage;
            totalKills++;

            kill(row - 1, col - 1, damage);
            kill(row - 1, col, damage);
            kill(row - 1, col + 1, damage);
            kill(row, col + 1, damage);
            kill(row, col - 1, damage);
            kill(row + 1, col + 1, damage);
            kill(row + 1, col, damage);
            kill(row + 1, col - 1, damage);
            
            matrix[row][col] = 0;
        }
    }

    function validate(row, col) {
        return (
            row >= 0 &&
            row < matrix.length &&
            col >= 0 &&
            col < matrix[row].length
        );
    }

    function kill(row, col, damage) {
        if (validate(row, col)) {
            if (matrix[row][col] - damage <= 0) {
                matrix[row][col] = 0;
            } else {
                matrix[row][col] -= damage;
            }
        }
    }

    function finishThem() {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] !== 0) {
                    totalDamage += matrix[row][col];
                    totalKills++;
                }
            }
        }
    }
}

solve(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);

console.log('-----');

solve(['20 20 100', '20 80 20', '20 20 20', '1,1 2,0 0,2']);
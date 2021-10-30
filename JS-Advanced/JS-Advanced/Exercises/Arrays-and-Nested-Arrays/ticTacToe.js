function solve(marcks) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let winnerType;
    let isWon = false;
    let filledBoard = 0;
    let currentType = 'X';

    for (let i = 0; i < marcks.length; i++) {
        let [row, col] = marcks[i].split(' ').map(Number);
        
        if (board[row][col] == false) {
            board[row][col] = currentType;
            filledBoard++;
            winnerType = winnerSearch(currentType);
            
            if (isWon || filledBoard == 9) {
                break;
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if (currentType == 'X') {
            currentType = 'O';
        } else {
            currentType = 'X'
        }
    }

    if (isWon) {
        console.log(`Player ${winnerType} wins!`);

    } else {
        console.log('The game ended! Nobody wins :(');
    }
    for (let line of board) {
        console.log(line.join('\t'));
    }
    
    function winnerSearch(playerType) {
        for (let row = 0; row < 3; row++) {
            let resultRow = 0;
            let resultCol = 0;
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === playerType) {
                    resultRow++;
                }

                if (board[col][row] == playerType) {
                    resultCol++;
                }
            }

            if (resultRow == 3 || resultCol == 3) {
                isWon = true;
                return playerType;
            }
        }

        let indicator = 3;
        let diagonalOne = 0;
        let diagonalTwo = 0;
        for (let i = 0; i < 3; i++) {
            if (board[i][i] === playerType) {
                diagonalOne++;
            }

            if (board[i][--indicator] == playerType) {
                diagonalTwo++;
            }

            if (diagonalOne == 3 || diagonalTwo == 3) {
                isWon = true;
                return playerType;
            }
        }
    }
}

solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
console.log('-----');
solve(['0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1']);
console.log('-----');
solve(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0']);

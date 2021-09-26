function chessBoard(num) {
    let isBlack = true;
    console.log('<div class="chessboard">');

    for (let i = 0; i < num; i++) {
        console.log('  <div>');

        for (let j = 0; j < num; j++) {
            if (isBlack) {
                console.log('    <span class="black"></span>');
                isBlack = false;
            } else {
                console.log('    <span class="white"></span>');
                isBlack = true;
            }
        }
        console.log('  </div>');

        if (i % 2 === 0) {
            isBlack = false;
        } else {
            isBlack = true;
        }
    }

    console.log('</div>');
}
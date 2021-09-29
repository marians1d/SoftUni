function solve(n) {
    let sequence = 'ATCGTTAGGG';

    for (let sI = 0, i = 0; i < n; i++, sI += 2) {
        if (sI > sequence.length - 1) {
            sI = 0;
        }

        if (i % 4 === 0) {
            console.log(`**${sequence[sI]}${sequence[sI + 1]}**`);
        } else if (i % 2 === 1) {
            console.log(`*${sequence[sI]}--${sequence[sI + 1]}*`);
        } else {
            console.log(`${sequence[sI]}----${sequence[sI + 1]}`);
        }
    }
}

solve(10);
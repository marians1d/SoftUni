function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let sortedArr = JSON.stringify(
            JSON.parse(input[i]).sort((a, b) => b - a)
        );
        if (!result.includes(sortedArr)) {
            result.push(sortedArr);
        }
    }

    result = result.map((x) => JSON.parse(x));
    result.sort((a, b) => a.length - b.length)

    for (let line of result) {
        console.log('[' + line.join(', ') + ']');
    }
}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);

solve([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);

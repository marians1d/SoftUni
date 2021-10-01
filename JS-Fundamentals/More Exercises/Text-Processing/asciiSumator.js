function solve(input) {
    let firstChar = input[0].charCodeAt(0);
    let secondChar = input[1].charCodeAt(0);
    let total = 0;

    for (let i = 0; i < input[2].length; i++) {
        let currentCode = input[2].charCodeAt(i);

        if (firstChar < secondChar) {
            if (currentCode > firstChar && currentCode < secondChar) {
                total += currentCode;
            }
        } else {
            if (currentCode < firstChar && currentCode > secondChar) {
                total += currentCode;
            }
        }
    }

    console.log(total);
}

solve(['.', '@', 'dsg12gr5653feee5']);
solve(['?', 'E', '@ABCEF']);
solve(['a', '1', 'jfe392$#@j24ui9ne#@$']);

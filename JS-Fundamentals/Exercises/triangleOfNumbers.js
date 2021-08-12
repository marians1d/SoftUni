function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let numRow = "";
        for (let j = 1; j <= i; j++) {
            numRow += i + " ";
        }
        console.log(numRow);
    }
}
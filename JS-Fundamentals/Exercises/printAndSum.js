function printAndSum(start, end) {
    let sum = 0;
    let numRow = "";

    for(let i = start; i <= end; i++) {
        numRow += i + " ";
        sum += i;
    }

    console.log(numRow);
    console.log("Sum: " + sum);
}
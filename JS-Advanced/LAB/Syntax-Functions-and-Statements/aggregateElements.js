function solve(input) {
    let sumOne = 0;
    let sumTwo = 0;
    let concat = '';
    for (let i = 0; i < input.length; i++) {
        sumOne += input[i];
        sumTwo += 1 / input[i];
        concat += input[i];
    }

    console.log(sumOne);
    console.log(sumTwo);
    console.log(concat);
}

solve([1, 2, 3]);

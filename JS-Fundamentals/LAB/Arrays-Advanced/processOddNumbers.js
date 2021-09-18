function processOddNumbers(arr) {
    let result = arr
        .filter((num, i) => i % 2 === 1)
        .map((k) => k * 2)
        .reverse();

    console.log(result.join(' '));
}
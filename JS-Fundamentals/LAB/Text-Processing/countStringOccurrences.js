function occurrences(str, word) {
    let arr = str.split(' ');

    let result = arr.filter((x) => x === word);

    console.log(result.length);
}
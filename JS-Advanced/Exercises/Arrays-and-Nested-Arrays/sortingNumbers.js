function solve(arr) {
    arr = arr.sort((a, b) => a - b);
    let result = [];

    while (arr.length - 1 != 0) {
        result.push(arr.shift(), arr.pop());
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 63, 31, -3, 18, 56]));
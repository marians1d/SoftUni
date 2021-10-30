function solve(arr) {
    let total = 0;
    total += Number(arr[0]);
    total += Number(arr[arr.length - 1]);

    return total;
}

console.log(solve(['20', '30', '40']));
function solve(arr, order) {
    let result = order == 'asc' ? (a, b) => a - b : (a, b) => b - a;
    
    return arr.sort(result)
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))
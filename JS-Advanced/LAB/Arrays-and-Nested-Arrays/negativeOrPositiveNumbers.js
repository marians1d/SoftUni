function solve(arr) {
    let result = [];
    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result);
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
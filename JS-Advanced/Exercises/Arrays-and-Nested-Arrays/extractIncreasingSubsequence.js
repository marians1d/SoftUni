function solve(arr) {
    let result = [];
    arr.reduce((reducer, currentEl) => {
        if (currentEl >= reducer) {
            result.push(currentEl);
            return currentEl;
        }
        return reducer;
    }, result)

    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

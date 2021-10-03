function solve(arr) {
    let currentTop = 0;
    let result = arr.filter(fiterArr);

    console.log(result.join(' '));

    function fiterArr(x) {
        if (currentTop <= x) {
            currentTop = x;
            return true;
        } else {
            return false;
        }
    }
}

solve([1, 3, 3, 8, 4, 10, 12, 3, 2, 24]);

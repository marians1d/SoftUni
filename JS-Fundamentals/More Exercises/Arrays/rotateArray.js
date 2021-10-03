function solve(arr) {
    let n = Number(arr.pop());

    for (let i = 0; i < n; i++) {
        let lastElement = arr.pop();

        arr.unshift(lastElement);
    }

    console.log(arr.join(' '));
}

solve(['1', '2', '3', '4', '2'])
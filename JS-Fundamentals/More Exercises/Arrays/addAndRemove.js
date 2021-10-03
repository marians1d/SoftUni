function solve(arr) {
    let count = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] == 'add') {
            result.push(count);
        } else if (arr[i] == 'remove') {
            result.pop();
        }
    }

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
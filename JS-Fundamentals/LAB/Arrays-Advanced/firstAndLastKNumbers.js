function firstAndLastKNumbers(arr) {
    let k = arr[0];

    let forwardResult = [];
    for (let i = 1; i <= k; i++) {
        forwardResult.push(arr[i]);
    }
    console.log(forwardResult.join(' '));

    let backwardResult = [];
    for (let i = arr.length - k; i < arr.length; i++) {
        backwardResult.push(arr[i]);
    }
    console.log(backwardResult.join(' '));
}
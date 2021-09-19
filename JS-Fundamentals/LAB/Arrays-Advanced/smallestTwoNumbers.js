function smallestTwoNumbers(arr) {
    let result = arr.sort((a, b) => a - b);

    console.log(arr[0] + ' ' + arr[1]);
}
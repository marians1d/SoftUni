function reverseAnArrayOfNumbers(n, array) {
    let reversedArr = '';
    for (let i = n - 1; i >= 0; i--) {
        reversedArr += array[i] + ' ';
    }

    console.log(reversedArr);
}
function condenseArray(arr) {
    while (arr.length > 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] += arr[i + 1];
        }
        arr.length--;
    }

    console.log(arr[0]);
}
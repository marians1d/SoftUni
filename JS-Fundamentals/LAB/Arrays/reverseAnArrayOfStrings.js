function reverseArray(arr) {
    let endIndex = arr.length - 1;
    for (let startIndex = 0; startIndex < arr.length / 2; startIndex++) {
        let tempVar = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = tempVar;

        endIndex--;
    }

    console.log(arr.join(' '));
}
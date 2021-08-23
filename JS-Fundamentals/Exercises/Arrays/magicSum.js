function magicSum(arr, magicNum) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == magicNum) {
                console.log(arr[i] + " " + arr[j]);
            }
        }
    }
}
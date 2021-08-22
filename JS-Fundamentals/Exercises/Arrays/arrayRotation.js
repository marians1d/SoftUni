function arrayRotation(arr, rotations) {
    for (let r = 1; r <= rotations; r++) {
        let currFirst = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];


        }
        arr[arr.length - 1] = currFirst;
    }
    console.log(arr.join(" "));
}
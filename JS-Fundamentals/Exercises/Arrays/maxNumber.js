function maxNumber(arr) {
    let message = "";
    let isTop = true;
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            message += arr[i] + " ";
        }
        isTop = true;
    }
    message += arr[arr.length - 1];

    console.log(message);
}
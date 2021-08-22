function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isNone = true;

    for (let i = 0; i < arr.length; i++) {
        let leftIndex = i - 1;
        let rightIndex = i + 1;

        leftSum = 0;
        rightSum = 0;

        while (leftIndex >= 0 || rightIndex < arr.length) {
            if (leftIndex >= 0) {
                leftSum += arr[leftIndex];
                leftIndex--;
            }

            if (rightIndex < arr.length) {
                rightSum += arr[rightIndex];
                rightIndex++;
            }
        }

        if (leftSum == rightSum) {
            console.log(i);
            isNone = false;
        }
    }

    if (isNone) {
        console.log("no");
    }
}
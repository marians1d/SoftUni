function maxOfEqualElements(arr) {
    let currentNum = arr[0];
    let bestNum = 0;

    let currentAmount = 0;
    let bestAmount = 0;

    let printingMessage = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == currentNum) {
            currentAmount++;
        } else {
            if (currentAmount > bestAmount) {
                bestAmount = currentAmount;
                bestNum = currentNum;
            }
            currentAmount = 1;

            currentNum = arr[i];
        }
    }

    if (currentAmount != 0 && bestAmount == 0) {
        bestAmount = currentAmount;
        bestNum = currentNum;
    }

    for (let i = 0; i < bestAmount; i++) {
        printingMessage += bestNum + " ";
    }

    console.log(printingMessage);
}
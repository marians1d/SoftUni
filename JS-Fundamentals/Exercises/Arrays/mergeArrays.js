function mergeArr(firstArr, secondArr) {
    let finalArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 == 0) {
            firstArr[i] = Number(firstArr[i]);
            secondArr[i] = Number(secondArr[i]);

            finalArr[i] = firstArr[i] + secondArr[i];
        } else {
            finalArr[i] = firstArr[i] + secondArr[i];
        }
    }

    console.log(finalArr.join(" - "));
}
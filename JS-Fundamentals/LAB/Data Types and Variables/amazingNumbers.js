function amazingNum(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let isAmazing = false;
    sum = sum.toString();
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === '9') {
            isAmazing = true;
        }
    }

    console.log(`${num} Amazing? ${isAmazing ? 'True' : 'False'}`);
}
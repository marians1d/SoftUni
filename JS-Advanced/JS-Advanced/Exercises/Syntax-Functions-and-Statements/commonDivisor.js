function commonDivisor(num1, num2) {
    let dividor;
    if (num1 > num2) {
        dividor = num2;
    } else {
        dividor = num1
    }

    while (num1 % dividor !== 0 || num2 % dividor !== 0) {
        dividor--;
    }

    console.log(dividor);
}

commonDivisor(15, 5);
commonDivisor(2154, 458);
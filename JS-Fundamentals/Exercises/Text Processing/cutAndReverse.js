function cutAndReverse(string) {
    let firstStr = string.slice(0, string.length / 2);
    let secondStr = string.slice(string.length / 2);
    let firstStrReversed = '';
    let secondStrReversed = '';

    for (let i = firstStr.length - 1; i >= 0; i--) {
        firstStrReversed += firstStr[i];
        secondStrReversed += secondStr[i];
    }

    console.log(firstStrReversed);
    console.log(secondStrReversed);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
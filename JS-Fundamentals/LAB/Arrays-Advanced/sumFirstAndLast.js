function sumFirstAndLast(arr) {
    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.pop());

    return firstNum + secondNum;
}
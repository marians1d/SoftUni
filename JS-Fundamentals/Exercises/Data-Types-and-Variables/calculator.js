function calculator(firstNum, operator, secondNum) {
    let sum = 0;
    switch (operator) {
        case "+":
            sum = firstNum + secondNum;
            break;
        case "-":
            sum = firstNum - secondNum;
            break;
        case "*":
            sum = firstNum * secondNum;
            break;
        case "/":
            sum = firstNum / secondNum;
            break;
    }

    console.log(sum.toFixed(2));
}
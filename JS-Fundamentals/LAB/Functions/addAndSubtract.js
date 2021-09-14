function addAndSubtract(firstNum, secondNum, thirdNum) {
    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    function subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    }

    let total = sum(firstNum, secondNum);
    let difference = subtract(total, thirdNum);

    console.log(difference);
}
function biggestOf3Numbers(firstNum, secondNum, thirdNum) {
    if (firstNum > secondNum && firstNum > thirdNum) {
        console.log(firstNum);
    } else if (secondNum > thirdNum && secondNum > firstNum) {
        console.log(secondNum);
    } else {
        console.log(thirdNum);
    }
}
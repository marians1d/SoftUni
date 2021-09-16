function factorialDivision(firstNum, secondNum) {
    let firstFactorial = factorial(firstNum);
    let secondFactorial = factorial(secondNum);

    console.log((firstFactorial / secondFactorial).toFixed(2));
    function factorial(n) {
        let sum = 1;
        for (let i = n; i > 0; i--) {
            sum *= i;
        }

        return sum;
    }
}
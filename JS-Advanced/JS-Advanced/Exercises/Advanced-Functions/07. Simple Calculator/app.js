function calculator() {
    let num1;
    let num2;
    let result;

    function init(firstNum, secondNum, resultId) {
        num1 = document.querySelector(firstNum);
        num2 = document.querySelector(secondNum);
        result = document.querySelector(resultId);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);
    }

    return {
        init,
        add,
        subtract
    }
}
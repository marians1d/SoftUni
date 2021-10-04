function operations(num1, num2, operator) {
    let actions = {
        '+': add,
        '-': subtract,
        '*': times,
        '/': divide,
        '%': procent,
        '**': pow
    };

    actions[operator]();



    function add() {
        console.log(num1 + num2);
    }

    function subtract() {
        console.log(num1 - num2);
    }

    function times() {
        console.log(num1 * num2);
    }

    function divide() {
        console.log(num1 / num2);
    }

    function procent() {
        console.log(num1 % num2);
    }

    function pow() {
        console.log(num1 ** num2);
    }
}

operations(5, 6, '+');
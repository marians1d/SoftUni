function solve(input) {
    let actions = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': devide
    };
    let numbers = [];
    let indexs = [];
    let symbols = ['+', '-', '*', '/'];
    for (let i = 0; i < input.length; i++) {
        if (symbols.includes(input[i])) {
            indexs.push(i);
        } else {
            numbers.push(input[i]);
        }
    }

    if (indexs.length + 1 < numbers.length) {
        console.log('Error: too many operands!');
    } else if (indexs.length >= numbers.length) {
        console.log('Error: not enough operands!');
    } else {
        for (let i = 0; i < indexs.length; i++) {
            let index = indexs[i] - i * 2;
            actions[input[index]](index);
        }
        console.log(input[0]);
    }


    function add(index) {
        let a = input[index - 2];
        let b = input[index - 1];
        input.splice(index - 2, 3, a + b);
    }

    function subtract(index) {
        let a = input[index - 2];
        let b = input[index - 1];
        input.splice(index - 2, 3, a - b);
    }

    function multiply(index) {
        let a = input[index - 2];
        let b = input[index - 1];
        input.splice(index - 2, 3, a * b);
    }

    function devide(index) {
        let a = input[index - 2];
        let b = input[index - 1];
        input.splice(index - 2, 3, a / b);
    }
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, '-']);
solve([15, '/', '+']);
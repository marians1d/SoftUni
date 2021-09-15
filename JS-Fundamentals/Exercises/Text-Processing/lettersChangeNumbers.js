function solve(string) {
    let numbers = [];
    let actions = format(string.split(' '));

    for (let i = 0; i < actions.length; i++) {
        let currentNumber = 0;
        if (validation(i, 0)) {
            currentNumber = startUpper(actions[i]);
        } else {
            currentNumber = startLower(actions[i]);
        }

        if (validation(i, actions[i].length - 1)) {
            endUpper(actions[i], currentNumber);
        } else {
            endLower(actions[i], currentNumber);
        }
    }

    let result = 0;
    for (let number of numbers) {
        result += number;
    }

    console.log(result.toFixed(2));

    function format(actions) {
        for (let i = 0; i < actions.length; i++) {
            actions[i].trim();
        }

        actions = actions.filter((x) => x !== '');

        return actions;
    }

    function startUpper(action) {
        let n = action.substring(1, action.length - 1);
        n = Number(n);
        let letter = action[0].charCodeAt() - 64;

        return n / letter;
    }

    function endUpper(action, n) {
        let letter = action[action.length - 1].charCodeAt() - 64;

        numbers.push(n - letter);
    }

    function startLower(action) {
        let n = action.substring(1, action.length - 1);
        n = Number(n);
        let letter = action[0].charCodeAt() - 96;

        return n * letter;
    }

    function endLower(action, n) {
        let letter = action[action.length - 1].charCodeAt() - 96;

        numbers.push(n + letter);
    }

    function validation(i, position) {
        return (
            actions[i][position].charCodeAt() >= 65 &&
            actions[i][position].charCodeAt() <= 90
        );
    }
}

solve('A12b   s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');
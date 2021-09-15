function solve(arr, lines) {
    let actions = {
        add,
        addMany,
        contains,
        remove,
        shift,
        sumPairs
    }

    while (lines[0] !== "print") {
        let tokens = lines.shift().split(' ');
        let action = tokens.shift();

        actions[action]([...tokens]);
    }

    console.log(`[ ${arr.join(', ')} ]`);

    // Add
    function add(tokens) {
        let index = Number(tokens[0]);
        let element = Number(tokens[1]);

        arr.splice(index, 0, element);
    }

    // Add Many
    function addMany(tokens) {
        tokens = tokens.map(Number)

        let index = tokens.shift();

        arr.splice(index, 0, ...tokens);
    }

    // Contains
    function contains(tokens) {
        let element = Number(tokens[0]);

        console.log(arr.indexOf(element));
    }

    // Remove
    function remove(tokens) {
        let index = Number(tokens[0]);

        arr.splice(index, 1);
    }

    // Shift 
    function shift(tokens) {
        let positions = Number(tokens[0])
        for (let i = 0; i < positions; i++) {
            let currentElement = arr.shift();
            arr.push(currentElement);
        }
    }

    // Sum Pairs
    function sumPairs() {
        let tempArr = [];
        let isEven = true;
        let lastNum = 0;
        if (arr.length % 2 === 1) {
            lastNum = arr.pop();
            isEven = false;
        }
        for (let i = 0; i < arr.length; i += 2) {
            let a = arr[i];
            let b = arr[i + 1];
            tempArr.push(a + b);
        }

        if (!isEven) {
            tempArr.push(lastNum);
        }
        arr = tempArr;
    }

}

solve(
    [1, 2, 3, 4, 5, 6],
    ["add 1 4", "sumPairs", "print"]
);
function solve(input) {
    let actions = {
        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': swap,
    }

    let result = input.shift();

    while (input[0] !== "Travel") {
        let [action, paramOne, paramTwo] = input.shift().split(':');

        actions[action](paramOne, paramTwo);

        console.log(result);
    }
    console.log(`Ready for world tour! Planned stops: ${result}`);

    function add(index, string) {
        index = Number(index);
        if (index >= 0 && index < result.length) {
            let left = result.substring(0, index);
            let right = result.substring(index);

            result = left + string + right;
        }
    }

    function remove(start, end) {
        start = Number(start);
        end = Number(end);
        if ((start >= 0) && (start < result.length) && (end >= 0) && (end < result.length)) {
            let left = result.substring(0, start);
            let right =  result.substring(end + 1);

            result = left + right;
        }
    }

    function swap(initialString, finalString) {
        if (result.includes(initialString)) {
            let pattern = new RegExp(initialString, 'g')
            result = result.replace(pattern, finalString);
        }
    }
}

solve([
    "Hawai::Cyprys-GreeceHawai",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
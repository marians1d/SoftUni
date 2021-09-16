function arrayManipulations(arr) {
    let numbers = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {
        let currentAction = arr[i].split(' ');

        switch (currentAction[0]) {
            case 'Add':
                add(currentAction[1]);
                break;
            case 'Remove':
                remove(currentAction[1]);
                break;
            case 'RemoveAt':
                removeAt(currentAction[1]);
                break;
            case 'Insert':
                insert(currentAction[1], currentAction[2]);
                break;
        }
    }

    console.log(numbers.join(' '));

    function add(el) {
        numbers.push(Number(el));
    }

    function remove(num) {
        numbers = numbers.filter((el) => el !== Number(num));
    }

    function removeAt(index) {
        numbers.splice(index, 1);
    }

    function insert(num, index) {
        numbers.splice(index, 0, num);
    }
}

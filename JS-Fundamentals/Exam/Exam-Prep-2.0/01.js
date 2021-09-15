function solve(input) {
    // parse the encrypted message
    let message = input.shift();

    let actions = {
        'Move': move,
        'Insert': insert,
        'ChangeAll': changeAll
    }

    // until you get the command "Decode"
    while (input[0] != 'Decode') {
        // - parse each line
        let line = input.shift().split('|');
        let action = line.shift();
        // - call given action
        actions[action](line);
    }

    // print the decrypted message
    console.log('The decrypted message is: ' + message);

    // Move
    function move(n) {
        // - make substrings based on the index
        let left = message.substring(0, n[0]);
        let right = message.substring(n[0]);

        message = right + left;
    }

    // Insert
    function insert(tokens) {
        let [index, value] = tokens;
        index = Number(index);
        // - make substrings based on the index and put the value between them
        let left = message.substring(0, index);
        let right = message.substring(index);

        message = left + value + right;
    }

    // Change All
    function changeAll(tokens) {
        let [substring, replacement] = tokens;
        // - replace all the occurrances of the given string whit RegExp
        while (message.includes(substring)) {
            message = message.replace(substring, replacement);
        }
    }
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])
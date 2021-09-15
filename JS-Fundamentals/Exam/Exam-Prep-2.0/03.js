function solve(input) {
    let actions = {
        Add: add, 
        Remove: remove,
        ChangeKey: changeKey
    }
    let collection = {};

    // shift n from the input
    let n = Number(input.shift());

    // for the next n lines
    for (let i = 0; i < n; i++) {
        // - split each line by |
        let [piece, composer, key] = input.shift().split('|');
        // - set collection by the piece and value
        // -- value will be an array whit composer and key in that positions 
        collection[piece] = [composer, key];
    }

    // till you reseve command Stop
    while (input[0] !== "Stop") {
        // - parse each line splitting them by |
        let [action, piece, tokenOne, tokenTwo] = input.shift().split('|');
        // - call given action and pass parameters
        actions[action](piece, tokenOne, tokenTwo);
    }

    let sortedCollection = Object.entries(collection).sort(sortByName);
    // sort by name of the piece and then by the name of the composer
    function sortByName(a, b) {
        // - use that 0 is a falsy value
        return a[0].localeCompare(b[0]) || a[1][0].localeCompare(b[1][0])
    }

    // print all sorted pieses in given format
    for (let piece of sortedCollection) {
        console.log(`${piece[0]} -> Composer: ${piece[1][0]}, Key: ${piece[1][1]}`);
    }


    // Add 
    function add(piece, composer, key) {
        // - if piece already exsists print given message
        if (collection[piece] === undefined) {
            // - init a new value whit the given piece as a key
            collection[piece] = [composer, key];
            
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            // - else print other message
            console.log(`${piece} is already in the collection!`);
        }
    }

    // Remove
    function remove(piece) {
        // - if piece is in the collection print message and remove it
        if (collection[piece] !== undefined) {
            // -- use delete to remove the piece
            delete collection[piece];

            console.log(`Successfully removed ${piece}!`);
        } else {
            // - else print other message
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    // Change Key 
    function changeKey(piece, newKey) {
        // - if piece is in the colection print message and change it's key whit a given one
        if (collection[piece] !== undefined) {
            collection[piece][1] = newKey;

            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            // - else print message 
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Hoonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
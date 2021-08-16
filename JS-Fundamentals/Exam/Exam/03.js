function solve(input) {
    let dictunary = {};
    let actions = {
        'Hand Over': handOver,
        'Test': test,
    }
    // shift first element 
    let lines = input.shift().split(' | ');
    for (let line of lines) {
        let [word, definition] = line.split(': ')
        if (dictunary[word] === undefined) {
            dictunary[word] = [definition];
        } else {
            dictunary[word].push(definition);
        }
    }

    let testingWords = input.shift().split(' | ');

    actions[input[0]](testingWords)
    // Test
    function test(testingWords) {
        let keys = Object.keys(dictunary);
        for (let word of testingWords) {
            if (keys.includes(word)) {
                // print it
                let sortedDic = dictunary[word].sort((a, b) => b.length - a.length);

                console.log(word + ':');
                for (let dic of sortedDic) {
                    console.log(' -' + dic);
                }
            }
        }
    }
    // parameters will be words you'll be tested whit
    // - print each word and it's definitions sorted by length

    // Hand Over
    function handOver() {
        let sortedKeys = Object.keys(dictunary).sort((a, b) => a.localeCompare(b));
        console.log(sortedKeys.join(' '));
    }
}

// solve(["programmer: an animal, which turns coffee into code | developer: a magician | programmer: a lazy, fat man",
//     "fish | domino",
//     "Hand Over"]);

solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])
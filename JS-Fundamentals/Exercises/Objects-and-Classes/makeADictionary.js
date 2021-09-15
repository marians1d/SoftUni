function dictionary(arr) {
    let dictionary = {};
    for (let i = 0; i < arr.length; i++) {
        let currentDictionary = JSON.parse(arr[i]);
        let [term] = Object.keys(currentDictionary);
        let isIncluded = false;

        for (let key of Object.keys(dictionary)) {
            if (key === term) {
                isIncluded = true;
                break;
            }
        }

        if (isIncluded) {
            dictionary[term].definition = currentDictionary[term];
        } else {
            dictionary[term] = {
                name: term,
                definition: currentDictionary[term]
            };
        }
    }
    let keys = Object.keys(dictionary);
    keys.sort();
    for (let element of keys) {
        console.log(
            `Term: ${element} => Definition: ${dictionary[element].definition}`
        );
    }
}
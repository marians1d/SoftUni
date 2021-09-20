function convert(objectAsString) {
    let result = JSON.parse(objectAsString);
    let keys = Object.keys(result);

    for (let key of keys) {
        console.log(`${key}: ${result[key]}`);
    }
}
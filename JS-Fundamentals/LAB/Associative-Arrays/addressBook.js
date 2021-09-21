function addressBook(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');

        addressBook[name] = address;
    }

    let keys = Object.keys(addressBook).sort();

    for (let key of keys) {
        console.log(`${key} -> ${addressBook[key]}`);
    }
}
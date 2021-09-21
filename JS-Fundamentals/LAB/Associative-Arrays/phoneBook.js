function phoneBook(info) {
    let phones = {};

    for (let i = 0; i < info.length; i++) {
        let currentPhone = info[i].split(' ');

        phones[currentPhone[0]] = currentPhone[1];
    }

    for (let key in phones) {
        console.log(`${key} -> ${phones[key]}`);
    }
}
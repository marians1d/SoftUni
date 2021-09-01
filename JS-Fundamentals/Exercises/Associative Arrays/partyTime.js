function partyTime(info) {
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let vips = [];
    let regulars = [];

    while (info[0] !== 'PARTY') {
        let currentGuest = info.shift();

        if (digits.includes(currentGuest[0])) {
            vips.push(currentGuest);
        } else {
            regulars.push(currentGuest);
        }
    }
    info.shift();

    for (let el of info) {
        if (vips.includes(el)) {
            vips.splice(vips.indexOf(el), 1);
        } else if (regulars.includes(el)) {
            regulars.splice(regulars.indexOf(el), 1);
        }
    }

    console.log(vips.length + regulars.length);
    console.log(vips.join('\n'));
    console.log(regulars.join('\n'));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
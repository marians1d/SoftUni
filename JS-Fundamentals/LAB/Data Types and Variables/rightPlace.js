function rightPlace(strOne, char, strTwo) {
    let replace = '';

    for (let i = 0; i < strOne.length; i++) {
        if (strOne[i] === '_') {
            replace += char;
        } else {
            replace += strOne[i];
        }
    }

    console.log(replace === strTwo ? 'Matched' : 'Not Matched');
}
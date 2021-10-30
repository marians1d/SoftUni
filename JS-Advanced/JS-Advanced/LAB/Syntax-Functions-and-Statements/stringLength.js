function length(stringOne, stringTwo, stringThree) {
    let total = stringOne.length + stringTwo.length + stringThree.length;
    let avr = Math.floor(total / 3);
    console.log(total);
    console.log(avr);
}

length('chocolate', 'ice cream', 'cake');
length('pasta', '5', '22.3');
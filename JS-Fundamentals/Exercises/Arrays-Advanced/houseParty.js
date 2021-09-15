function houseParty(goingOrNotList) {
    // {name} is going!
    // {name} is not going!

    let guestList = [];

    for (let action of goingOrNotList) {
        let currentAction = action.split(' ');
        let currentName = currentAction.shift();

        if (currentAction.length === 2) {
            if (guestList.includes(currentName)) {
                console.log(`${currentName} is already in the list!`);
            } else {
                guestList.push(currentName);
            }
        } else {
            if (guestList.includes(currentName)) {
                let nameIndex = guestList.indexOf(currentName);
                guestList.splice(nameIndex, 1);
            } else {
                console.log(`${currentName} is not in the list!`);
            }
        }
    }

    console.log(guestList.join("\n"));
}
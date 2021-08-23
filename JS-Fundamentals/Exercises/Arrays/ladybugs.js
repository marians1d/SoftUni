function ladybugs(fieldInfo) {
    let fieldSize = fieldInfo.shift();
    let field = [];
    let startPositions = fieldInfo.shift().split(" ");

    for (let i = 0; i < fieldSize; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < startPositions.length; i++) {
        let currentBugIndex = Number(startPositions[i]);
        if (currentBugIndex >= 0 && currentBugIndex < field.length) {
            field[currentBugIndex] = 1;
        }
    }

    for (let i = 0; i < fieldInfo.length; i++) {
        let [currentIndex, direction, flyLength] = fieldInfo[i].split(" ");
        currentIndex = Number(currentIndex);
        flyLength = Number(flyLength);

        if (validation(currentIndex)) {
            move(currentIndex, direction, flyLength);
        }
    }

    console.log(field.join(" "));


    function move(currentIndex, direction, flyLength) {
        if (direction == "right") {
            right(currentIndex, flyLength)
        } else if (direction == "left") {
            left(currentIndex, flyLength)
        }
    }

    function left(currentIndex, flyLength) {
        if (field[currentIndex] === 0) {
            return;
        }

        field[currentIndex] = 0;

        if (field[currentIndex - flyLength] == 0) {
            field[currentIndex - flyLength] = 1;

        } else if (field[currentIndex - flyLength] == 1) {

            while (field[currentIndex - flyLength] == 1) {
                currentIndex -= flyLength;
            }

            if (currentIndex - flyLength >= 0) {
                field[currentIndex - flyLength] = 1;
            }
        }
    }

    function right(currentIndex, flyLength) {
        if (field[currentIndex] === 0) {
            return;
        }

        field[currentIndex] = 0;

        if (field[currentIndex + flyLength] == 0) {
            field[currentIndex + flyLength] = 1;

        } else if (field[currentIndex + flyLength] == 1) {

            while (field[currentIndex + flyLength] == 1) {
                currentIndex += flyLength;
            }

            if (currentIndex + flyLength < field.length) {
                field[currentIndex + flyLength] = 1;
            }
        }
    }

    function validation(index) {
        return (index >= 0) && (index < field.length);
    }
}

ladybugs([
    10,
    '13',
    '0 right 1',
    '6 right -7'
]);

ladybugs([
    5,
    '3',
    '6 left 2',
    '1 left -2'
]);
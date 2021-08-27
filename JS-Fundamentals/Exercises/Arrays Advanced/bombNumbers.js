function bombNumbers(numbers, bomb) {
    let destroyedPositions = [];
    let bombFace = bomb[0];
    let bombRadius = bomb[1];

    while (numbers.includes(bombFace)) {
        let currentBombPosition = numbers.indexOf(bombFace);
        numbers.splice(currentBombPosition, 1);
        let tempArr = currentExplosion(numbers, currentBombPosition, bombRadius, bombFace);

        for (let index of tempArr) {
            if (!destroyedPositions.includes(index)) {
                destroyedPositions.push(index);
            }
        }
    }

    removeIndexes(numbers, destroyedPositions);

    let sum = survivedSpotSum(numbers);

    console.log(sum);

    function survivedSpotSum(numbers) {
        let sum = 0;
        numbers.forEach((element) => {
            sum += element;
        });

        return sum;
    }

    function currentExplosion(numbers, bomb, radius, bombFace) {
        let indexExplosion = [];

        for (let i = bomb - radius; i < bomb + radius; i++) {
            if (numbers[i] === bombFace) {
                numbers.splice(i, 1);
                continue;
            }
            if (i >= 0 && i < numbers.length) {
                indexExplosion.push(i);
            }
        }
        return indexExplosion;
    }

    function removeIndexes(numbers, indexes) {
        for (let i = indexes.length - 1; i >= 0; i--) {
            numbers.splice(indexes[i], 1);
        }
    }
}
function towns(townInfo) {
    let result = [];
    for (let i = 0; i < townInfo.length; i++) {
        currentInfo = townInfo[i].split(" | ");
        currentInfo[1] = Number(currentInfo[1]);
        currentInfo[2] = Number(currentInfo[2]);

        let currentTown = {
            town: currentInfo[0],
            latitude: currentInfo[1].toFixed(2),
            longitude: currentInfo[2].toFixed(2)
        };

        result.push(currentTown);
    }

    for (let town of result) {
        console.log(town);
    }
}
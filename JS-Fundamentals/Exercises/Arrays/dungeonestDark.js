function dungeonestDark(gameStory) {
    gameStoryString = gameStory[0];

    let rooms = gameStoryString.split("|");

    let health = 100;
    let coins = 0;
    let isWon = true;
    let roomCount = 0;
    for (let i = 0; i < rooms.length; i++) {
        let roomStats = rooms[i].split(" ");
        roomCount++;

        if (roomStats[0] == "potion") {
            if (health + Number(roomStats[1]) > 100) {
                roomStats[1] = 100 - health;
                health = 100;
            } else {
                health += Number(roomStats[1]);
            }

            console.log(`You healed for ${roomStats[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (roomStats[0] == "chest") {
            coins += Number(roomStats[1]);

            console.log(`You found ${roomStats[1]} coins.`);
        } else {
            health -= Number(roomStats[1]);

            if (health > 0) {
                console.log(`You slayed ${roomStats[0]}.`);
            } else {
                console.log(`You died! Killed by ${roomStats[0]}.`);
                console.log(`Best room: ${roomCount}`);

                isWon = false;
                break;
            }
        }
    }

    if (isWon) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
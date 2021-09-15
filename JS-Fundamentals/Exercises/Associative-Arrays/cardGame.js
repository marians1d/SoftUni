function cardGame(info) {
    let players = {};

    for (let player of info) {
        let [name, hand] = player.split(': ');
        hand = hand.split(', ');

        if (Object.keys(players).includes(name)) {
            for (let card of hand) {
                players[name].push(card);
            }
        } else {
            players[name] = hand;
        }
    }

    for (let player of Object.keys(players)) {
        let clearHand = [];
        for (let card of players[player]) {
            if (!clearHand.includes(card)) {
                clearHand.push(card);
            }
        }

        players[player] = clearHand;

        let handPoints = handScore(players[player]);
        players[player] = handPoints;
    }

    // printing output
    for (let key of Object.keys(players)) {
        console.log(`${key}: ${players[key]}`);
    }

    function handScore(hand) {
        let powerOfHand = 0;
        for (let card of hand) {
            let power = card[0];
            let type = card[card.length - 1];

            if (card.length > 2) {
                power += card[1];
            }

            let cardScore = 0;

            switch (power) {
                case 'J':
                    cardScore = 11;
                    break;
                case 'Q':
                    cardScore = 12;
                    break;
                case 'K':
                    cardScore = 13;
                    break;
                case 'A':
                    cardScore = 14;
                    break;
                default:
                    cardScore = Number(power);
            }

            switch (type) {
                case 'S':
                    cardScore *= 4;
                    break;
                case 'H':
                    cardScore *= 3;
                    break;
                case 'D':
                    cardScore *= 2;
                    break;
                case 'C':
                    cardScore *= 1;
                    break;
            }
            powerOfHand += cardScore;
        }
        return powerOfHand;
    }
}

cardGame(['Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Tomas: 6H, 7S, KC, KD, 5S, 10C']);
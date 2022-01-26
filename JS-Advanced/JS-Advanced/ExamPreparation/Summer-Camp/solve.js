class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {'child': 150, 'student': 300, 'collegian': 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (Object.keys(this.priceForTheCamp).includes(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        const participant = {name, condition, power: 100, wins: 0}

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (this.listOfParticipants.some(p => p.name == name) == false) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        const index = this.listOfParticipants.map(p => p.name).indexOf(name);
        
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        const names = this.listOfParticipants.map(p => p.name);
        
        
        if (typeOfGame == 'WaterBalloonFights') {
            if (names.includes(participant1) == false || names.includes(participant2) == false) {
                throw new Error(`Invalid entered name/s.`);
            }

            const playerOne = this.listOfParticipants[names.indexOf(participant1)];
            const playerTwo = this.listOfParticipants[names.indexOf(participant2)];

            if (playerOne.condition != playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (playerOne.power > playerTwo.power) {
                playerOne.wins++;

                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (playerOne.power < playerTwo.power) {
                playerTwo.wins++;

                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            } else {
                return 'There is no winner.'
            }
        } else if (typeOfGame == 'Battleship') {
            if (names.includes(participant1) == false) {
                throw new Error(`Invalid entered name/s.`);
            }

            this.listOfParticipants[names.indexOf(participant1)].power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        const sortedPartisipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let prat of sortedPartisipants) {
            result.push(`${prat.name} - ${prat.condition} - ${prat.power} - ${prat.wins}`)
        }

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
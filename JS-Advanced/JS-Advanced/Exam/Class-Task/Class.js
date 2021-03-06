class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable - spaceRequired < 0) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.plants.find(p => p.plantName == plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        } else if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        } else {
            plant.ripe = true;

            plant.quantity = quantity;       
            
            if (quantity == 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            } else {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(p => p.plantName == plantName);
        if (plantIndex == -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (this.plants[plantIndex].ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else {
            
            this.storage.push({
                plantName,
                quantity: this.plants[plantIndex].quantity
            });
            
            this.spaceAvailable += this.plants[plantIndex].spaceRequired;
            
            this.plants.splice(plantIndex, 1);
            
            return `The ${plantName} has been successfully harvested.`;
        }
    }

    generateReport() {
        const message = [];
        message.push(`The garden has ${ this.spaceAvailable } free space left.`);

        const sortedNames = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName)).map(p => p.plantName);
        message.push(`Plants in the garden: ${sortedNames.join(', ')}`);

        if(this.storage.length == 0) {
            message.push('Plants in storage: The storage is empty.');
        } else {
            const storageMessage = [];

            this.storage.forEach(p => {
                storageMessage.push(`${p.plantName} (${p.quantity})`);


            });

            message.push(`Plants in storage: ${storageMessage.join(', ')}`);
        }

        return message.join('\n');
    }
}

const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
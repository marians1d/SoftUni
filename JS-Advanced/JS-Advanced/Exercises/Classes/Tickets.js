function solve(input, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];

    for (let line of input) {
        const [name, price, status] = line.split('|');

        result.push(new Ticket(name, Number(price), status));
    }

    if (criterion == 'price') {
        return result.sort((a, b) => a[criterion] - b[criterion]); 
    }
    
    return result.sort((a, b) => a[criterion].localeCompare(b[criterion]));
}

console.log(
    solve(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ],
        'price'
    )
);

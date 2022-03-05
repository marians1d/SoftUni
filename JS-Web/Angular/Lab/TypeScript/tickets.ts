class Ticket {
    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) { }
}

function tickets(ticketDescription: string[], sortingCriteria: string): Ticket[] {
    const tickets: Ticket[] = [];

    ticketDescription.forEach(t => {
        const [destination, price, status]: string[] = t.split('|');

        tickets.push(new Ticket(destination, Number(price), status));
    });

    if (sortingCriteria == 'price') {
        return tickets.sort((a, b) => a.price - b.price);
    } else {
        return tickets.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    }
}

const sorter: string = 'status';

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], sorter));
class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    get emptySlots () {
        return this.capacity - this.books.length;
    }

    addBook(bookName, bookAuthor) {
        if (this.emptySlots <= 0) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false});

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(b => b.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const index = this.books.findIndex(b => b.bookName == bookName);

        if (index == -1) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (this.books[index].payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            const mesage = [];
            mesage.push(`The book collection has ${ this.emptySlots } empty spots left.`);

            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(b => {
                    mesage.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`);
            });

            return mesage.join('\n');
        } else {
            const book = this.books.find(b => b.bookAuthor == bookAuthor);

            if (book) {
                return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }


    }
}

const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics('Miguel'));
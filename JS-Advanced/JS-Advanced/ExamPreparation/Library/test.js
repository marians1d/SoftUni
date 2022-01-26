const library = require('./library.js');
const {expect} = require('chai');

describe('tests', () => {
    describe('Happy path', () => {
        describe('calcPriceOfBook', () => {
            it('Standard price', () => {
                expect(library.calcPriceOfBook('a', 1981)).to.equal(`Price of a is 20.00`);
            });

            it('Discout price', () => {
                expect(library.calcPriceOfBook('a', 1980)).to.equal(`Price of a is 10.00`);
                expect(library.calcPriceOfBook('a', 1910)).to.equal(`Price of a is 10.00`);
            });
        });
    });

    describe('Whrong input', () => {
        it('Wrong input type nameOfBook', () => {
            expect(() => library.calcPriceOfBook(1, 1981)).to.throw();
            expect(() => library.calcPriceOfBook([], 1981)).to.throw();
            expect(() => library.calcPriceOfBook({}, 1981)).to.throw();
        });
        it('Wrong input type year', () => {
            expect(() => library.calcPriceOfBook('a', '1')).to.throw();
            expect(() => library.calcPriceOfBook('a', 1.11)).to.throw();
            expect(() => library.calcPriceOfBook('a', [])).to.throw();
        });
    });


    describe('findBook', () => {
        describe('Happy path', () => {
            it('Book is found', () => {
                expect(library.findBook(['a', 'b', 'c'], 'a')).to.equal(
                    'We found the book you want.'
                );
            });
            it('Book is NOT found', () => {
                expect(library.findBook(['a', 'b', 'c'], 'missing')).to.equal(
                    'The book you are looking for is not here!'
                );
            });
        });

        describe('Whrong input', () => {
            it('Empty array', () => {
                expect(() => library.findBook([], 'a')).to.throw();
            });
        });
    });


    describe('arrangeTheBooks', () => {
        describe('Happy path', () => {
            it('Enough space', () => {
                expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
                expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            });
            it('NOT Enough space', () => {
                expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
                expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
            });
        });

        describe('Whrong input', () => {
            it('CountBooks is not a integer', () => {
                expect(() => library.arrangeTheBooks(1.111)).to.throw();
                expect(() => library.arrangeTheBooks('1')).to.throw();
                expect(() => library.arrangeTheBooks([])).to.throw();
            });
            it('CountBooks is negative', () => {
                expect(() => library.arrangeTheBooks(-1)).to.throw();
                expect(() => library.arrangeTheBooks(-100)).to.throw();
            });
        });
    });
});

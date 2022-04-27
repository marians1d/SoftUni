// TODO: require js file
const { expect } = require('chai');
const bookSelection = require('./bookSelection');

describe('Book Section Tests', () => {
    describe('Genre Suitable ', () => {
        it('Should return warning if Thrillerr and age is less than 13', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 6)).to.equal('Books with Thriller genre are not suitable for kids at 6 age');
        });

        it('Should return warning if Horror and age is less than 13', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 6)).to.equal('Books with Horror genre are not suitable for kids at 6 age');
        });

        it('Should return suitable if genre is not Thrillerr or Horror', () => {
            expect(bookSelection.isGenreSuitable('string', 6)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('string', 13)).to.equal('Those books are suitable');
        });

        it('Should return suitable if age is above 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
        });

    });

    describe('Is It Affordable', () => {
        describe('Valid Path', () => {
            it('Have needed budget', () => {
                expect(bookSelection.isItAffordable(10, 10)).to.equal('Book bought. You have 0$ left');
                expect(bookSelection.isItAffordable(10, 10.5)).to.equal('Book bought. You have 0.5$ left');
                expect(bookSelection.isItAffordable(20, 30)).to.equal('Book bought. You have 10$ left');
            });

            it('Not enough money', () => {
                expect(bookSelection.isItAffordable(10.5, 10)).to.equal('You don\'t have enough money');
                expect(bookSelection.isItAffordable(11, 10)).to.equal('You don\'t have enough money');
                expect(bookSelection.isItAffordable(20, 10)).to.equal('You don\'t have enough money');
            });
        });

        describe('Invalid input', () => {
            it('Price is invalid', () => {
                expect(() => bookSelection.isItAffordable('string', 10)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(null, 10)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(undefined, 10)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable([], 10)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable({}, 10)).to.throw(Error, 'Invalid input');
            });

            it('Budget is invalid', () => {
                expect(() => bookSelection.isItAffordable(10, null)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(10, undefined)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(10, [])).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(10, {})).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.isItAffordable(10, 'string')).to.throw(Error, 'Invalid input');
            });
        });
    });

    describe('Suitable Titles ', () => {
        const booksArray = [{ title: 'The Da Vinci Code', genre: 'Thriller' }, { title: 'string', genre: 'Horror' }];
        describe('Valid Path', () => {
            it('Should remove Thriller', () => {
                expect(bookSelection.suitableTitles(booksArray, 'Horror')).to.deep.equal(['string']);
            });
            it('Should remove Horror', () => {
                expect(bookSelection.suitableTitles(booksArray, 'Thriller')).to.deep.equal(['The Da Vinci Code']);
            });
            it('Should remove all', () => {
                expect(bookSelection.suitableTitles(booksArray, 'string')).to.deep.equal([]);
            });
        });

        describe('Invalid input', () => {
            it('Should throw with non array', () => {
                expect(() => bookSelection.suitableTitles(null, 'string')).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles(0, 'string')).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles({}, 'string')).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles('string', 'string')).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles(undefined, 'string')).to.throw(Error, 'Invalid input');
            });

            it('Should throw with non string wantedGenre', () => {
                expect(() => bookSelection.suitableTitles([], 0)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles([], null)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles([], undefined)).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles([], [])).to.throw(Error, 'Invalid input');
                expect(() => bookSelection.suitableTitles([], {})).to.throw(Error, 'Invalid input');
            });
        });

    });
});
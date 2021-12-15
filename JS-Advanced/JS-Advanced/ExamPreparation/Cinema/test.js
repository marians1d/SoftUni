const cinema = require('./cinema.js');
const {expect} = require('chai');

describe('cinema tests', () => {
    describe('showMovies', () => {
        describe('Happy path', () => {
            it('No movies', () => {
                expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
            });
            it('Print movies', () => {
                expect(cinema.showMovies(['a', 'b', 'c'])).to.equal('a, b, c');
            });
        });
    });

    describe('ticketPrice', () => {
        describe('Happy path', () => {
            it('Correct price', () => {
                expect(cinema.ticketPrice('Premiere')).to.equal(12.0);
                expect(cinema.ticketPrice('Normal')).to.equal(7.5);
                expect(cinema.ticketPrice('Discount')).to.equal(5.5);
            });
        });
        describe('Wrong input', () => {
            it('Wrong type', () => {
                expect(() => cinema.ticketPrice('a')).to.throw();
            });
        });
    });

    describe('swapSeatsInHall', () => {
        describe('Happy path', () => {
            it('Correct swap', () => {
                expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.')
                expect(cinema.swapSeatsInHall(2, 1)).to.equal('Successful change of seats in the hall.')
                expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.')
                expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.')
            });
        });
        describe('Wrong input', () => {
            it('Whit one input', () => {
                expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            })
            it('Whit same seats', () => {
                expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            });

            it('Numbers are more than 20', () => {
                expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(21, 21)).to.equal('Unsuccessful change of seats in the hall.');
            });

            it('Less than or equal to 0', () => {
                expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(1, -2)).to.equal('Unsuccessful change of seats in the hall.');
            });

            it('Wrong type', () => {
                expect(cinema.swapSeatsInHall('a', 1)).to.equal('Unsuccessful change of seats in the hall.');
                expect(cinema.swapSeatsInHall(2, 'a')).to.equal('Unsuccessful change of seats in the hall.');
            
            })
        });
    });
});

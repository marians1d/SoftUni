const rentCar = require('./rentCar');
const { expect } = require('chai');

describe('Tests', () => {
    describe('Search car', () => {
        it('Happy path', () => {
            expect(rentCar.searchCar(['BMW', 'Audi'], 'BMW')).to.equal(`There is ${1} car of model ${'BMW'} in the catalog!`);
            expect(rentCar.searchCar(['BMW'], 'BMW')).to.equal(`There is ${1} car of model ${'BMW'} in the catalog!`);
        });
        it('It should throw error when model isn\'t a string', () => {
            expect(() => rentCar.searchCar(['BMW', 'Audi'], 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW', 'Audi'], true)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW', 'Audi'], [])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW', 'Audi'], {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW', 'Audi'], null)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(['BMW', 'Audi'], undefined)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw error when shop isn\'t an array', () => {
            expect(() => rentCar.searchCar({}, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(true, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(0, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar('abc', 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(null, 'BMW')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.searchCar(undefined, 'BMW')).to.throw(Error, 'Invalid input!');
        });
        it('It should throw error when there are no matches', () => {
            expect(() => rentCar.searchCar(['BMW', 'Audi'], 'Benz')).to.throw(Error, 'There are no such models in the catalog!');
        });
    });
    describe('Calculate Price Of Car', () => {
        it('Happy path', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal(`You choose ${'BMW'} and it will cost $${90}!`);
        });
        it('It should throw a error when model isn\'t a string', () => {
            expect(() => rentCar.calculatePriceOfCar(0, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 2)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(true, 2)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw a error when days isn\'t a number', () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', 2.5)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', 'abc')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', [])).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', {})).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', null)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', undefined)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', true)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw a error when model is not matching', () => {
            expect(() => rentCar.calculatePriceOfCar('abc', 2)).to.throw(Error, 'No such model in the catalog!');
        });
    });

    describe('Check Budget', () => {
        it('Happy Path', () => {
            expect(rentCar.checkBudget(10, 2, 30)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 3, 30)).to.equal('You rent a car!');
        });
        it('It should throw an error when costPerDay is invalid', () => {
            expect(() => rentCar.checkBudget('abc', 1, 30)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(10.5, 1, 30)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw an error when days are invalid', () => {
            expect(() => rentCar.checkBudget(10, 'abc', 30)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(10, 1.5, 30)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw an error when budget are invalid', () => {
            expect(() => rentCar.checkBudget(10, 3, 'abc')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.checkBudget(10, 3, 30.5)).to.throw(Error, 'Invalid input!');
        });
        it('It should throw an error when budget is less than cost', () => {
            expect(rentCar.checkBudget(11, 3, 30)).to.equal('You need a bigger budget!');
        });
    });

});
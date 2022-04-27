const { expect } = require('chai');
const flowerShop = require('./flowerShop');

describe('Tests …', () => {
    const gardenArr = ['Rose', 'Lily', 'Orchid'];

    describe('Calculate Price of Flowers', () => {
        it('Should return message with valid input', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 2, 2)).to.equal('You need $4.00 to buy Rose!');
        });

        it('Should throw an Error with invalid flower type', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers({}, 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(null, 2, 2)).to.throw(Error, 'Invalid input!');
        });

        it('Should throw an Error with non-integer price', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2.5, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', undefined, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', null, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', {}, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', [], 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'abc', 2)).to.throw(Error, 'Invalid input!');
        });

        it('Should throw an Error with non-integer quantity', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, 2.5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, undefined)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, null)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, {})).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, [])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 2, 'abc')).to.throw(Error, 'Invalid input!');
        });
    });

    describe('Check Flowers Available', () => {
        it('Should return that the flower is available', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', gardenArr)).to.equal('The Rose are available!');
            // mith have more than one flower type
        });

        it('Should return a message to restock if flower is not present', () => {
            expect(flowerShop.checkFlowersAvailable('Lavandula', gardenArr)).to.equal('The Lavandula are sold! You need to purchase more!');
        });
    });

    describe('Sell Flowers', () => {
        it('Should retun garden message', () => {
            expect(flowerShop.sellFlowers(gardenArr, 2)).to.equal('Rose / Lily');
        });

        it('Should throw an Error with invalid array', () => {
            expect(() => flowerShop.sellFlowers({}, 2)).to.throw(Error, 'Invalid input!');
        });
    });
});

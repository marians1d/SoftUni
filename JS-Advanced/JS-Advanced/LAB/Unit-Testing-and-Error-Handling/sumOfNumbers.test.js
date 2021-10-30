const {sum} = require('./sumOfNumbers');
const { expect } = require('chai');

describe('Test sumOfNumbers', () => {
    it('Correct behavior', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
        expect(sum([4])).to.be.equal(4);
    })
    
    it('Empty array', () => {
        expect(sum([])).to.be.equal(0);
    })
})
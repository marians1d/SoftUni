const {isOddOrEven} = require('./evenOrOdd');
const { expect } = require('chai');

describe('Test evenOrOdd', () => {
    it('Testing a even string', () => {
        expect(isOddOrEven('abdf')).to.be.equal('even');
    })

    it('Testing a odd string', () => {
        expect(isOddOrEven('abd')).to.be.equal('odd');
    })

    it('Testing a empty string', () => {
        expect(isOddOrEven('')).to.be.equal('even');
    })

    it('Testing wrong input', () => {
        expect(isOddOrEven([1,3,4])).to.be.undefined;
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(false)).to.be.undefined;
    })
})
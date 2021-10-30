const { lookupChar } = require('./charLookup');
const { expect } = require('chai');

describe('Test charLookup', () => {
    it('Get character at given index', () => {
        expect(lookupChar('abc', 1)).to.be.equal('b');
        expect(lookupChar('a', 0)).to.be.equal('a');
    })

    it('Out of range index', () => {
        expect(lookupChar('abc', 6)).to.be.equal('Incorrect index');
        expect(lookupChar('abc', 3)).to.be.equal('Incorrect index');
        expect(lookupChar('abc', -3)).to.be.equal('Incorrect index');
    })

    it('Wrong type of the first parameter', () => {
        expect(lookupChar(5, 6)).to.be.undefined;
        expect(lookupChar([], 3)).to.be.undefined;
        expect(lookupChar({}, 3)).to.be.undefined;
    })

    it('Wrong type of the second parameter', () => {
        expect(lookupChar('abc', '1')).to.be.undefined;
        expect(lookupChar('abc', [])).to.be.undefined;
        expect(lookupChar('abc', {})).to.be.undefined;
        expect(lookupChar('abc', 1.5)).to.be.undefined;
    })
})
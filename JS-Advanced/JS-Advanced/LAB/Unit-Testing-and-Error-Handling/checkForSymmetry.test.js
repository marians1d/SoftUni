const {isSymmetric} = require('./checkForSymmetry');
const {expect} = require('chai');

describe("Test checkForrSymmetry", () => {
    it("Symmetrycal odd Numbers", () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })
    
    it("Symmetrycal odd Strings", () => {
        expect(isSymmetric(['a', 'n', 'a'])).to.be.true;
    })

    it("Non-Symmetrycal Strings", () => {
        expect(isSymmetric(['a', 'n', 'c'])).to.be.false;
    })

    it("Non-Symmetrycal Numbers", () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })

    it("Non-Symmetrycal Strings", () => {
        expect(isSymmetric(['a', 'n', 'a'])).to.be.true;
    })

    it("Symmetrycal even Numbers", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    })

    it("Non-Symmetrycal Types of the same value", () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    })

    it("Incorrect input Type", () => {
        expect(isSymmetric('a')).to.be.false;
    })
})
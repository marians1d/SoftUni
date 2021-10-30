const { mathEnforcer } = require('./mathEnforcer');
const { expect } = require('chai');

describe('Test mathEnforcer', () => {
    it('Testing addFive whith correct parameters', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        expect(mathEnforcer.addFive(3.5)).to.be.closeTo(8.5, 0.01);
    })

    it('Testing addFive whith incorrect parameters', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
    })

    it('Testing subtractTen whith correct parameters', () => {
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        expect(mathEnforcer.subtractTen(3.5)).to.be.closeTo(-6.5, 0.01);
    })

    it('Testing subtractTen whith incorrect parameters', () => {
        expect(mathEnforcer.subtractTen('20')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(false)).to.be.undefined;
    })

    it('Testing subtractTen whith correct parameters', () => {
        expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        expect(mathEnforcer.sum(-10, 2)).to.be.equal(-8);
        expect(mathEnforcer.sum(0, 3)).to.be.equal(3);
        expect(mathEnforcer.sum(3.5, 4)).to.be.closeTo(7.5, 0.01);
        expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        expect(mathEnforcer.sum(10, -2)).to.be.equal(8);
        expect(mathEnforcer.sum(5, 0)).to.be.equal(5);
        expect(mathEnforcer.sum(3, 5.5)).to.be.closeTo(8.5, 0.01);
    })

    it('Testing subtractTen whith incorrect parameters', () => {
        expect(mathEnforcer.sum('2', '1')).to.be.undefined;
        expect(mathEnforcer.sum('2', 1)).to.be.undefined;
        expect(mathEnforcer.sum([], 1)).to.be.undefined;
        expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        expect(mathEnforcer.sum(false, 1)).to.be.undefined;
        expect(mathEnforcer.sum(1, '2')).to.be.undefined;
        expect(mathEnforcer.sum(1, [])).to.be.undefined;
        expect(mathEnforcer.sum(1, {})).to.be.undefined;
        expect(mathEnforcer.sum(1, false)).to.be.undefined;
    })
})
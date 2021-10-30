const {rgbToHexColor} = require('./rgbToHex.js');
const {expect} = require('chai');

describe('Test rgbToHex', () => {
    it('Test black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });

    it('Test white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });

    it('Out of range', () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('Incorrect Type', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'a', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 'a')).to.be.undefined;
    });

    it('Missing parameters', () => {
        expect(rgbToHexColor(255, 255)).to.be.undefined;
        expect(rgbToHexColor(255)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
});
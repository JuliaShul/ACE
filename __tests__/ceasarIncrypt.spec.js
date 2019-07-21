const { decode, encode } = require('../src/ceasarIncrypt');

describe('Ceasar Incrypt', () => {
    describe('decode', () => {
        const decodeString = decode();
        expect(decodeString).toBe('HELLOGUYSHOWAREYOU');
    });

    describe('encode', () => {
        encode('HELLOGUYSHOWAREYOU').toBe();
    });
})
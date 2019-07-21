const { decode, encode } = require('../src/ceasarIncrypt');

describe('Ceasar Incrypt', () => {
    it('', () => {
        const encoded = encode('HELLOWORLD');
        const decodeString = decode('JHOSPATWMF', '2337145512');
        expect(decodeString).toBe('HELLOWORLD');
    });
})
const { decode, encode } = require('../src/ceasarIncrypt');

describe('Ceasar Incrypt', () => {
    it('Если результат шифровки encode передать в decode, получим исходное значие', () => {
        const inputStr = 'HELLOWORLD';
        const actual = decode(encode(inputStr));
        expect(actual).toBe(inputStr);
    });

    it('Если передаем пустую строку в encode, результат расшифровки decode равен пустой строке', () => {
        const inputStr = '';
        const actual = decode(encode(inputStr));
        expect(actual).toBe(inputStr);
    });

    it('Крайние буквы шифруются в буквы, а не в спец символы', () => {
        expect(decode({ cypher: 'A', key: '9' })).toBe('R');
        expect(decode({ cypher: 'A', key: '1' })).toBe('Z');
        expect(decode({ cypher: 'a', key: '3' })).toBe('X');
        expect(decode({ cypher: 'B', key: '8' })).toBe('T');
        expect(decode({ cypher: 'C', key: '7' })).toBe('V');
    });

    it('Если строку зашифровать дважды, результат будет разный', () => {
        const inputStr = 'HELLOWORLD';
        const result1 = encode(inputStr);
        const result2 = encode(inputStr);
        expect(result1.cypher !== result2.cypher).toBe(true);
    });

    it('Исходная строка не равна зашифрованной', () => {
        const inputStr = 'HELLOWORLD';
        const result1 = encode(inputStr);
        const result2 = encode(inputStr);
        expect(inputStr !== result1.cypher).toBe(true);
        expect(inputStr !== result2.cypher).toBe(true);
    });

    it('Если длина шифра меньше длины ключа, получим ошибку', () => {
        const inputCypher = { key: '3763515583', cypher: 'KLROT' };
        expect(decode(inputCypher)).toBe(undefined);
    })

    it('Если длина ключа меньше длины шифра, получим ошибку', () => {
        const inputCypher = { key: '37635', cypher: 'KLROTXTWTG' };
        expect(decode(inputCypher)).toBe(undefined);
    })

    it('При передачи шифра и ключа, получаем расшифрованное значение', () => {
        const expected = 'HELLOWORLD';
        const inputCypher = { key: '3763515583', cypher: 'KLROTXTWTG' };
        const actual = decode(inputCypher);
        expect(actual).toBe(expected);
    })
    
    it('При передачи пустого шифра и ключа, получаем пустое значение', () => {
        const emptyCypher = { key: '', cypher: '' };
        const expempty = decode(emptyCypher);
        expect(expempty).toBe('');
    })
    it('encode шифрует правильно. Совпадает длина In и Out', () => {
        const lengthIn = 'HELLOGUYSHOWAREYOU';
        const lengthOut = encode(lengthIn);
        expect(lengthIn.length === lengthOut.cypher.length).toBe(true);
        expect(lengthIn.length === lengthOut.key.length).toBe(true);
    })

    it.each([
        ['ZoRRo', 'success'],
        ['pRoJecT ZeTa', 'success'],
        ['<<UGeR NaGiBaToR xxx>>', 'failed'],
        ['8 913 453 2239', 'failed']
    ])('Если передали %s, то на выходе %s', (input, expected) => {
        if (expected === 'success') {
            expect(encode(input).cypher.length == input.replace(/\s/g, '').length).toBe(true);
            expect(encode(input).cypher !== input.toUpperCase()).toBe(true);
        } 
        if (expected === 'failed') {
            expect(encode(input)).toBe(undefined);
        }
    })
    it.each([
        [{ key: '3763515583', cypher: 'KLrOtXTWTG' }, 'success'],
        [{ key: '3763515583', cypher: 'kLROTxtwTG' }, 'success'],
        [{ key: '3763515583', cypher: '<<RO XTW>>' }, 'failed'],
        [{ key: '3763515583', cypher: '3763515583' }, 'failed'],
    ])('Если передали %o, то на выходе %s', (input, expected) => {      
        if (expected === 'success') {
            expect(decode(input) !== input.cypher.toUpperCase()).toBe(true);
        }
        if (expected === 'failed') {
            expect(decode(input)).toBe(undefined);
        }
    })
})

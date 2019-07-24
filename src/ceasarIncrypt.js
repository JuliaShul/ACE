/**
 * Расшифровывает значения в объекте.
 * @param { key, cypher } 
 * key (string) - ключ для расшифровки содержит числа.
 * cypher (string) - зашифрованное предложение, содержит буквы.
 */
function decode({ key, cypher }) {
    key.split('');
    return cypher
        .split('')
        .reduce((acc, item, i) => {
            acc.push(String.fromCharCode(item.charCodeAt() - key[i]));
            return acc;
        }, [])
        .join('');
}

/**
 * Шифрует строку.
 * Возвращает объект со свойством(зашифрованная строка),значением свойства(массив-ключ для расшифровки)
 * @param {string} words
 */
function encode(words) {
    const numbers = randomNumberArray(words.length);
    const arrayWords = words
        .split('')
        .reduce((acc, item, i) => {
            acc.push(String.fromCharCode(item.charCodeAt() + numbers[i]));
            return acc;
        }, [])
        .join('')
    return {
        key: numbers.join(''),
        cypher: arrayWords,
    };
}

/**
 * Cоздает рандомные значения от 1 до 9.
 * @param {number} min - минимальное значение.
 * @param {number} max - максимальное значение.
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * Принимает длину массива, которую необходимо создать.
 * Возвращает новый массив с рандомными числами
 * @param {number} length 
 */
function randomNumberArray(length) {
    const randomNumbersPool = [];
    for (let i = 0; i < length; i++) {
        randomNumbersPool.push(random(1, 9));
    }
    return randomNumbersPool;
}

module.exports = {
    decode,
    encode,
}

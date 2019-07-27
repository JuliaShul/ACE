const ABC_LETTERS_COUNT = 25;
const ABC_A_CHARCODE = 65;
const ABC_Z_CHARCODE = ABC_A_CHARCODE + ABC_LETTERS_COUNT;
/**
 * Расшифровывает значения в объекте.
 * @param { key, cypher }
 * key (string) - ключ для расшифровки содержит числа.
 * cypher (string) - зашифрованное предложение, содержит буквы.
 */
function decode({ key, cypher }) {
  if (key.length !== cypher.length || /[\W0-9]/g.test(cypher)) {
    return undefined;
  }
  const keyArray = key.split('');
  return cypher
    .toUpperCase()
    .split('')
    .reduce((acc, item, i) => {
      const encodedLetter = item.charCodeAt() - keyArray[i];
      const letterCode =
        encodedLetter < ABC_A_CHARCODE
          ? encodedLetter + ABC_LETTERS_COUNT + 1
          : encodedLetter;
      acc.push(String.fromCharCode(letterCode));
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
  // Удаляем пробелы через регулярное выражение.
  const newWords = words.replace(/\s+/g, '');
  if (/[\W0-9]/g.test(newWords)) {
    return undefined;
  }
  const numbers = randomNumberArray(newWords.length);
  const arrayWords = newWords
    .toUpperCase()
    .split('')
    .reduce((acc, item, i) => {
      const decodedLetter = item.charCodeAt() + numbers[i];
      const letter =
        decodedLetter > ABC_Z_CHARCODE
          ? decodedLetter - ABC_LETTERS_COUNT - 1
          : decodedLetter;

      acc.push(String.fromCharCode(letter));
      return acc;
    }, [])
    .join('');

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
};

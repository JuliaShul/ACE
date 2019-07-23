// @TODO Напиши, что делает функция и аргументы.
// Напиши какой тип данных должен быть у аргументов для этого почитай
// https://ru.wikipedia.org/wiki/JSDoc
// заодно почтай про https://learn.javascript.ru/destructuring
/*
decode расшифровывает значения в объекте.
@param(object) key - зашифрованное предложение(string), cypher[key] - массив-ключ для расшифровки
*/
function decode(cypher) {
    for (var key in cypher) {
        var arrayWords = key.split('').map((item) => item.charCodeAt());
        var keyAll = cypher[key];
    }
    // @TODO Перепиши на Reduce. Не знаю как переписать.
    for (var i = 0; i < arrayWords.length; i++) {
        arrayWords[i] -= keyAll[i];
    }
    arrayWords.reduce((a, b) => b + Number(a), key)
    var readyWord = '';
    readyWord = arrayWords.reduce((a, b) => a += String.fromCharCode(b), readyWord);
    return readyWord;
}

/*
encode зашифровывает строку, 
возвращает объект со свойством(зашифрованная строка), значением свойства(массив-ключ для расшифровки)
@param(string)
*/
function encode(words) {
    /*
    random создает рандомные значения от 1 до 9.
    @param(number) min - минимальное значение, max - максимальное значение.
    */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /*
    randomNumberArray возвращает новый массив с рандомными числами.
    @param(number) length - длина массива.
    */
    function randomNumberArray(length) {
        var randomNumbersPool = [];
        for (let i = 0; i < length; i++) {
            randomNumbersPool.push(random(1, 9));
        }
        return randomNumbersPool;
    }
    var arrayWords = words.split('').map((item) => item.charCodeAt());
    var numbers = randomNumberArray(words.length);
    // @TODO Перепиши на Reduce.
    for (let i = 0; i < arrayWords.length; i++) {
        arrayWords[i] += numbers[i];
    }
    var readyWord = '';
    readyWord = arrayWords.reduce((a, b) => a += String.fromCharCode(b), readyWord);
    var newArrayWords = {};
    newArrayWords[readyWord] = numbers;
    return newArrayWords;
}
console.log(decode(encode('HELLOGYSHOWAREYOU')))

module.exports = {
    decode,
    decode,
}

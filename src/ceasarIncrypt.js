// @TODO Напиши, что делает функция и аргументы.
// Напиши какой тип данных должен быть у аргументов для этого почитай
// https://ru.wikipedia.org/wiki/JSDoc
// Переделай аргументы на объект, пусть нужные значени будут свойствами объекта:
// например: params = { arg1: bla, arg2: bla }
// заодно почтай про https://learn.javascript.ru/destructuring
function decode(cypher, key) {
    var arrayWords = cypher.split('').map((item) => item.charCodeAt());
    key.split('');

    // @TODO Перепиши на Reduce.
    for (var i = 0; i < arrayWords.length; i++) {
        arrayWords[i] += Number(key[i]);
        if (arrayWords[i] > 90) {
            arrayWords[i] -= 26;
        }
    }
    // @TODO Перепиши на Reduce.
    var readyWord = '';
    for (var i = 0; i < arrayWords.length; i++) {
        readyWord += String.fromCharCode(arrayWords[i]);
    }
    
    // Не хочу не буду!
    return readyWord;
}

// @TODO Напиши, что делает функция и аргументы.
// Напиши какой тип данных должен быть у аргументов для этого почитай
// https://ru.wikipedia.org/wiki/JSDoc
// Передалый возвращаемое значние на объект
// например: answer = { key1: bla, key2: bla }
function encode(words) {
    words.split('').map((item) => item.charCodeAt());
    
    var numbers = randomNumberString();

    // @TODO Перепиши на Reduce.
    for (let i = 0; i < arrayWords.length; i++) {
        arrayWords[i] += numbers[i];
        if (arrayWords[i] > 90) {
            arrayWords[i] -= 26;
        }
    }
    // @TODO Перепиши на Reduce.
    var readyWord = '';
    for (var i = 0; i < arrayWords.length; i++) {
        readyWord += String.fromCharCode(arrayWords[i]);
    }

    return readyWord;
}

// @TODO Напиши, что делает функция и аргументы.
// Напиши какой тип данных должен быть у аргументов для этого почитай
// https://ru.wikipedia.org/wiki/JSDoc
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// @TODO Напиши, что делает функция и аргументы.
// Напиши какой тип данных должен быть у аргументов для этого почитай
// https://ru.wikipedia.org/wiki/JSDoc
function randomNumberString(length) {
    const randomNumbersPool = [];
    for (let i = 0; i < length; i++) {
        randomNumbersPool.push(random(1, 9));
    }
    return randomNumbersPool
}

module.exports = {
    decode,
    decode,
}

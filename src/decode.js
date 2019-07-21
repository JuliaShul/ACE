function decode(words, numbers) {
    var map = Array.prototype.map;
    var arrayWords = map.call(words, function (x) { return x.charCodeAt(0); });
    numbers.split('');
    for (var i = 0; i < arrayWords.length; i++) {
        arrayWords[i] += Number(numbers[i]);
        if (arrayWords[i] > 90) {
            arrayWords[i] -= 26;
        }
    }
    var readyWord = '';
    for (var i = 0; i < arrayWords.length; i++) {
        readyWord += String.fromCharCode(arrayWords[i]);
    }
    return readyWord
}
// console.log(deCode('ADHKHAQYSYMSVPAWIS', '714176400924524262'));

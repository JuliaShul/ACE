function encode(words, numbers) {
	var map = Array.prototype.map;
	var arrayWords = map.call(words, function (x) { return x.charCodeAt(0); });
	for (let i = 0; i < arrayWords.length; i++) {
		arrayWords[i] += numbers[i];
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

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomNumberString(length) {
	const randomNumbersPool = [];
	for (let i = 0; i < length; i++) {
		randomNumbersPool.push(random(1, 9));
	}
	return randomNumbersPool
}


// console.log(encode('HELLOGUYSHOWAREYOU', randomNumberString('HELLOGUYSHOWAREYOU'.length)));
const { decode, encode } = require('./src/ceasarIncrypt');

const initString = 'HELLOWORLD';

const encoded = encode('HELLOWORLD');
console.log('encoded', encoded);

console.log('encoded', encode('ZoRrO'));
console.log('encoded', encode('ASDF'));
console.log('encoded', encode('123ADSAD'));
console.log('encoded', encode('123asdasd'));

const decoded = decode(encoded);
console.log('decoded', decoded, decoded === initString);

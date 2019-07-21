const { decode, encode } = require('./src/ceasarIncrypt');

const encoded = encode('HELLOWORLD');
console.log('encoded', encoded);

const decoded = decode('', '');
console.log('decoded', decoded);

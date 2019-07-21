const { decode, encode } = require('./src/ceasarIncrypt');

const initString = 'HELLOWORLD';

const encoded = encode('HELLOWORLD');
console.log('encoded', encoded);

const decoded = decode(encoded.cypher, encoded.key);
console.log('decoded', decoded, decoded === initString);

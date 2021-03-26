require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note office comfort install kitten outer sword'; 
let testAccounts = [
"0x292eaee3a9febb5d88d9ce6ac5c2d5eb848fa5088ac31ad8e4bcf6662e3cb36f",
"0x1faec225e76b18b50c287f1a18316f820dd237e97bb5f0a70af8c8639df8fd21",
"0x23016ebeb3f4de3346afd9466098b00f069ad020371116ad5b65402bc46a6525",
"0x66b0fa15204c96c395143d20aa14245de38fb40324083c0f394cf3fd73a916a6",
"0x3101907fafe091947bf3bc2dce6123355d199410a41b47ef9dd8511f8cfaa61c",
"0x84282b2a0abe65d2df88d9842994610ba42fff10612145568bbf55466ecce7c9",
"0x9d957190a09045a925b478436f02562e3ea7aa1d8d69bff0cd37fd02414795ef",
"0x8bf19e95656c740eed2dbdc93469ada148663e58dc5df8e7b292dc418157876b",
"0xb9d0f476683b42a5f8bd9102ee2a577c82da2d12473a0eef2f48063cb8160f53",
"0xd64543af43d9e99d360b3d1b2c7389864065765c884e3ad5acba415342365f3d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

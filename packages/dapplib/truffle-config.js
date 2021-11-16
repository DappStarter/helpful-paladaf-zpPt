require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth screen collect gesture cart flower giggle'; 
let testAccounts = [
"0x33f7f9c5b9bfeab91fcce0911fcf9ebcf47f67b768ae13b80fe96c810b195fe9",
"0x2a06d1b16723f45dd92bccdf873bbc82e0aff0d91f1bbca4aec48686ce4d022f",
"0xa77acab48644563845f4d40aa5350de53ec5f15534b2375c15b90a2b3cf39ac6",
"0x199e757d835d9dd2258e893ef3bfe7b880dc8ed6c3183bddb7c0972f5126ca1c",
"0x13f09be9e4b8eb4b61070b759147a518dbafed9c7468b5205faf2ff20537e41d",
"0xed64bb9353971e8ed1b45aa1a4e0d50bbf23313cdccb7c6702660645d12584f0",
"0x2ae101ab42760979cb696adadc749796e89d596d51bdb805ddc38962248523c6",
"0x1a53f2d4f365854352f928c074ad22292f42b06c231e21adb1b7db6d781efc09",
"0xf23e9d90522ba1ee69803967c092a3e59af3e425808d18e2be78df721d0df968",
"0xa3ad5c55e2c69c4ec5da0642cd8a375744df244c2b30258b8c53be41ea0d2dbc"
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
            version: '^0.8.0'
        }
    }
};


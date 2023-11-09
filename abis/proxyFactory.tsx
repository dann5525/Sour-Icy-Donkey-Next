export const proxyFactoryABI = [{ "type": "event", "name": "ProxyCreation", "inputs": [{ "type": "address", "name": "proxy", "internalType": "contract GnosisSafeProxy", "indexed": false }, { "type": "address", "name": "singleton", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "address", "name": "proxy", "internalType": "contract GnosisSafeProxy" }], "name": "calculateCreateProxyWithNonceAddress", "inputs": [{ "type": "address", "name": "_singleton", "internalType": "address" }, { "type": "bytes", "name": "initializer", "internalType": "bytes" }, { "type": "uint256", "name": "saltNonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "address", "name": "proxy", "internalType": "contract GnosisSafeProxy" }], "name": "createProxy", "inputs": [{ "type": "address", "name": "singleton", "internalType": "address" }, { "type": "bytes", "name": "data", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "address", "name": "proxy", "internalType": "contract GnosisSafeProxy" }], "name": "createProxyWithCallback", "inputs": [{ "type": "address", "name": "_singleton", "internalType": "address" }, { "type": "bytes", "name": "initializer", "internalType": "bytes" }, { "type": "uint256", "name": "saltNonce", "internalType": "uint256" }, { "type": "address", "name": "callback", "internalType": "contract IProxyCreationCallback" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "address", "name": "proxy", "internalType": "contract GnosisSafeProxy" }], "name": "createProxyWithNonce", "inputs": [{ "type": "address", "name": "_singleton", "internalType": "address" }, { "type": "bytes", "name": "initializer", "internalType": "bytes" }, { "type": "uint256", "name": "saltNonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "bytes", "name": "", "internalType": "bytes" }], "name": "proxyCreationCode", "inputs": [] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "bytes", "name": "", "internalType": "bytes" }], "name": "proxyRuntimeCode", "inputs": [] }];
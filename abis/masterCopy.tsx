export const masterCopyABI =
    [{ "type": "event", "name": "AddedOwner", "inputs": [{ "type": "address", "name": "owner", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "ApproveHash", "inputs": [{ "type": "bytes32", "name": "approvedHash", "internalType": "bytes32", "indexed": true }, { "type": "address", "name": "owner", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "ChangedFallbackHandler", "inputs": [{ "type": "address", "name": "handler", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "ChangedGuard", "inputs": [{ "type": "address", "name": "guard", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "ChangedThreshold", "inputs": [{ "type": "uint256", "name": "threshold", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "DisabledModule", "inputs": [{ "type": "address", "name": "module", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "EnabledModule", "inputs": [{ "type": "address", "name": "module", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "ExecutionFailure", "inputs": [{ "type": "bytes32", "name": "txHash", "internalType": "bytes32", "indexed": false }, { "type": "uint256", "name": "payment", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "ExecutionFromModuleFailure", "inputs": [{ "type": "address", "name": "module", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "ExecutionFromModuleSuccess", "inputs": [{ "type": "address", "name": "module", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "ExecutionSuccess", "inputs": [{ "type": "bytes32", "name": "txHash", "internalType": "bytes32", "indexed": false }, { "type": "uint256", "name": "payment", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "RemovedOwner", "inputs": [{ "type": "address", "name": "owner", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "SafeModuleTransaction", "inputs": [{ "type": "address", "name": "module", "internalType": "address", "indexed": false }, { "type": "address", "name": "to", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }, { "type": "bytes", "name": "data", "internalType": "bytes", "indexed": false }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation", "indexed": false }], "anonymous": false }, { "type": "event", "name": "SafeMultiSigTransaction", "inputs": [{ "type": "address", "name": "to", "internalType": "address", "indexed": false }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }, { "type": "bytes", "name": "data", "internalType": "bytes", "indexed": false }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation", "indexed": false }, { "type": "uint256", "name": "safeTxGas", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "baseGas", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "gasPrice", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "gasToken", "internalType": "address", "indexed": false }, { "type": "address", "name": "refundReceiver", "internalType": "address payable", "indexed": false }, { "type": "bytes", "name": "signatures", "internalType": "bytes", "indexed": false }, { "type": "bytes", "name": "additionalInfo", "internalType": "bytes", "indexed": false }], "anonymous": false }, { "type": "event", "name": "SafeReceived", "inputs": [{ "type": "address", "name": "sender", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "value", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "SafeSetup", "inputs": [{ "type": "address", "name": "initiator", "internalType": "address", "indexed": true }, { "type": "address[]", "name": "owners", "internalType": "address[]", "indexed": false }, { "type": "uint256", "name": "threshold", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "initializer", "internalType": "address", "indexed": false }, { "type": "address", "name": "fallbackHandler", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "SignMsg", "inputs": [{ "type": "bytes32", "name": "msgHash", "internalType": "bytes32", "indexed": true }], "anonymous": false }, { "type": "fallback", "stateMutability": "nonpayable" }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "string", "name": "", "internalType": "string" }], "name": "VERSION", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "addOwnerWithThreshold", "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }, { "type": "uint256", "name": "_threshold", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "approveHash", "inputs": [{ "type": "bytes32", "name": "hashToApprove", "internalType": "bytes32" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "approvedHashes", "inputs": [{ "type": "address", "name": "", "internalType": "address" }, { "type": "bytes32", "name": "", "internalType": "bytes32" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "changeThreshold", "inputs": [{ "type": "uint256", "name": "_threshold", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [], "name": "checkNSignatures", "inputs": [{ "type": "bytes32", "name": "dataHash", "internalType": "bytes32" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "bytes", "name": "signatures", "internalType": "bytes" }, { "type": "uint256", "name": "requiredSignatures", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [], "name": "checkSignatures", "inputs": [{ "type": "bytes32", "name": "dataHash", "internalType": "bytes32" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "bytes", "name": "signatures", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "disableModule", "inputs": [{ "type": "address", "name": "prevModule", "internalType": "address" }, { "type": "address", "name": "module", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }], "name": "domainSeparator", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "enableModule", "inputs": [{ "type": "address", "name": "module", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes", "name": "", "internalType": "bytes" }], "name": "encodeTransactionData", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }, { "type": "uint256", "name": "safeTxGas", "internalType": "uint256" }, { "type": "uint256", "name": "baseGas", "internalType": "uint256" }, { "type": "uint256", "name": "gasPrice", "internalType": "uint256" }, { "type": "address", "name": "gasToken", "internalType": "address" }, { "type": "address", "name": "refundReceiver", "internalType": "address" }, { "type": "uint256", "name": "_nonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "payable", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "execTransaction", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }, { "type": "uint256", "name": "safeTxGas", "internalType": "uint256" }, { "type": "uint256", "name": "baseGas", "internalType": "uint256" }, { "type": "uint256", "name": "gasPrice", "internalType": "uint256" }, { "type": "address", "name": "gasToken", "internalType": "address" }, { "type": "address", "name": "refundReceiver", "internalType": "address payable" }, { "type": "bytes", "name": "signatures", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "success", "internalType": "bool" }], "name": "execTransactionFromModule", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "bool", "name": "success", "internalType": "bool" }, { "type": "bytes", "name": "returnData", "internalType": "bytes" }], "name": "execTransactionFromModuleReturnData", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "getChainId", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address[]", "name": "array", "internalType": "address[]" }, { "type": "address", "name": "next", "internalType": "address" }], "name": "getModulesPaginated", "inputs": [{ "type": "address", "name": "start", "internalType": "address" }, { "type": "uint256", "name": "pageSize", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address[]", "name": "", "internalType": "address[]" }], "name": "getOwners", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes", "name": "", "internalType": "bytes" }], "name": "getStorageAt", "inputs": [{ "type": "uint256", "name": "offset", "internalType": "uint256" }, { "type": "uint256", "name": "length", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "getThreshold", "inputs": [] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }], "name": "getTransactionHash", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }, { "type": "uint256", "name": "safeTxGas", "internalType": "uint256" }, { "type": "uint256", "name": "baseGas", "internalType": "uint256" }, { "type": "uint256", "name": "gasPrice", "internalType": "uint256" }, { "type": "address", "name": "gasToken", "internalType": "address" }, { "type": "address", "name": "refundReceiver", "internalType": "address" }, { "type": "uint256", "name": "_nonce", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "isModuleEnabled", "inputs": [{ "type": "address", "name": "module", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "bool", "name": "", "internalType": "bool" }], "name": "isOwner", "inputs": [{ "type": "address", "name": "owner", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "nonce", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "removeOwner", "inputs": [{ "type": "address", "name": "prevOwner", "internalType": "address" }, { "type": "address", "name": "owner", "internalType": "address" }, { "type": "uint256", "name": "_threshold", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "requiredTxGas", "inputs": [{ "type": "address", "name": "to", "internalType": "address" }, { "type": "uint256", "name": "value", "internalType": "uint256" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "uint8", "name": "operation", "internalType": "enum Enum.Operation" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "setFallbackHandler", "inputs": [{ "type": "address", "name": "handler", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "setGuard", "inputs": [{ "type": "address", "name": "guard", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "setup", "inputs": [{ "type": "address[]", "name": "_owners", "internalType": "address[]" }, { "type": "uint256", "name": "_threshold", "internalType": "uint256" }, { "type": "address", "name": "to", "internalType": "address" }, { "type": "bytes", "name": "data", "internalType": "bytes" }, { "type": "address", "name": "fallbackHandler", "internalType": "address" }, { "type": "address", "name": "paymentToken", "internalType": "address" }, { "type": "uint256", "name": "payment", "internalType": "uint256" }, { "type": "address", "name": "paymentReceiver", "internalType": "address payable" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }], "name": "signedMessages", "inputs": [{ "type": "bytes32", "name": "", "internalType": "bytes32" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "simulateAndRevert", "inputs": [{ "type": "address", "name": "targetContract", "internalType": "address" }, { "type": "bytes", "name": "calldataPayload", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "swapOwner", "inputs": [{ "type": "address", "name": "prevOwner", "internalType": "address" }, { "type": "address", "name": "oldOwner", "internalType": "address" }, { "type": "address", "name": "newOwner", "internalType": "address" }] }, { "type": "receive", "stateMutability": "payable" }];
    
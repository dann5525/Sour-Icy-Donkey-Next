import { Web3Auth } from "@web3auth/modal";
import { ethers } from 'ethers';

import { contractAddresses, pairs } from "./constants";
import { proxyFactoryABI } from "../abis/proxyFactory";
import { masterCopyABI } from "../abis/masterCopy";
import { uupsDEXModuleFactoryABI } from "../abis/uupsDexFactory";
import { erc20ABI } from "../abis/erc20";

import RPC from "../pages/api/web3RPC"; // for using web3.js

export const deploySafeContract = async (web3auth: Web3Auth): Promise<string | null> => {
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        // Contract instances
        const proxyFactory = new ethers.Contract(contractAddresses.proxyFactoryAddress, JSON.parse(JSON.stringify(proxyFactoryABI)), signer);
        const safeMasterCopy = new ethers.Contract(contractAddresses.safeMasterCopyAddress, JSON.parse(JSON.stringify(masterCopyABI)), signer);

        // Setup data
        const owners = [account];  // List of owners
        const threshold = 1;  // Number of required confirmations
        const to = ethers.ZeroAddress;  // Address to call
        const data = '0x';  // Data to send
        const fallbackHandler = ethers.ZeroAddress;  // Fallback handler address
        const paymentToken = ethers.ZeroAddress;  // Payment token address
        const payment = 0;  // Payment amount
        const paymentReceiver = ethers.ZeroAddress;  // Payment receiver address
        const nonce = await signer.getNonce();
        // Generate setup data for Gnosis Safe
        const setupData = safeMasterCopy.interface.encodeFunctionData('setup', [
            owners, threshold, to, data, fallbackHandler, paymentToken, payment, paymentReceiver
        ]);

        // Create Gnosis Safe Proxy and setup
        const createSafeTx = await proxyFactory.createProxyWithNonce(contractAddresses.safeMasterCopyAddress, setupData, Number(nonce));

        // Wait for the transaction to be mined
        const receipt = await createSafeTx.wait();

        const deployed_address = receipt.logs[0]["address"];

        return deployed_address;
    }
    return null;
}

export const createModule = async (web3auth: Web3Auth, gnosisAddress: string, instance_public_key: string, dexAddress: string): Promise<string | null> => {
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();

        // Contract instances
        const uupsDexFactory = new ethers.Contract(contractAddresses.uupsDEXModuleFactory, JSON.parse(JSON.stringify(uupsDEXModuleFactoryABI)), signer);
        const createModuleTx = await uupsDexFactory.createModule(gnosisAddress, instance_public_key, dexAddress);

        // Wait for the transaction
        const receipt = await createModuleTx.wait();

        const created_module = receipt.logs[0]["address"];

        return created_module;
    } else {
        return null;
    }
}

export const allowPair = async (web3auth: Web3Auth, safe_address: string, module_address: string, pair: string): Promise<boolean> => {
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();

        const pair_item = pairs.filter(item => {
            return item.value === pair;
        });

        const addresses = pair_item[0]["addresses"];

        // Contract instances
        const safeContract = new ethers.Contract(safe_address, JSON.parse(JSON.stringify(masterCopyABI)), signer);
        const tokenAContract = new ethers.Contract(addresses[0], JSON.parse(JSON.stringify(erc20ABI)), signer);
        const tokenBContract = new ethers.Contract(addresses[1], JSON.parse(JSON.stringify(erc20ABI)), signer);
        const uupsDexFactoryContract = new ethers.Contract(contractAddresses.uupsDEXModuleFactory, JSON.parse(JSON.stringify(uupsDEXModuleFactoryABI)), signer);

        // Amount to approve (in wei)
        const amountToApprove = ethers.parseUnits("100000", 18);  // Replace 18 with the token's decimals if needed

        // Prepare function call data
        const enableModuleData = safeContract.interface.encodeFunctionData('enableModule', [module_address]);
        const dataA = tokenAContract.interface.encodeFunctionData('approve', [account, amountToApprove]);
        const dataB = tokenBContract.interface.encodeFunctionData('approve', [account, amountToApprove]);

        // Execute Transaction details
        const toEnable = safe_address;
        const toA = addresses[0];
        const toB = addresses[1];
        const value = 0;
        const operation = 0;  // 0 for call, 1 for delegatecall
        const safeTxGas = 0;  // Estimate appropriately
        const baseGas = 0;
        const gasPrice = 0;
        const gasToken = ethers.ZeroAddress;
        const refundReceiver = ethers.ZeroAddress;

        // generating signature
        const types = ['address', 'uint256'];
        let signature = ethers.AbiCoder.defaultAbiCoder().encode(types, [account, 0]);
        signature = signature + "01";
        // console.log(enableModuleData);
        const sendExcuteTx0 = await safeContract.execTransaction(toEnable, value, enableModuleData, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, signature);
        // Wait for the transaction
        await sendExcuteTx0.wait();
        const sendExcuteTx1 = await safeContract.execTransaction(
            toA, value, dataA, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, signature
        );
        // Wait for the transaction
        await sendExcuteTx1.wait();
        const sendExcuteTx2 = await safeContract.execTransaction(
            toB, value, dataB, operation, safeTxGas, baseGas, gasPrice, gasToken, refundReceiver, signature
        );
        // Wait for the transaction
        await sendExcuteTx2.wait();
        const allowTradeTx = await uupsDexFactoryContract.allowTradeOf(addresses);
        // Wait for the transaction
        
        const receipt = await allowTradeTx.wait();

        // console.log(receipt);
        return true;
    } else {
        return false;
    }
}

export const tokenBalance = async (web3auth: Web3Auth, token_address: string, safe_address: string): Promise<number> => {
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();
        const tokenContract = new ethers.Contract(token_address, JSON.parse(JSON.stringify(erc20ABI)), signer);
        const balance = await tokenContract.balanceOf(safe_address);
        const decimal = await tokenContract.decimals();
        return Number(balance) / 10 ** Number(decimal);
    }
    return 0;
}

export const transferToken = async (web3auth: Web3Auth, tokenAddr: string, toAddr: string, amount: number, flag: boolean): Promise<void> => {
    const web3authProvider = await web3auth.connect();
    if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        const tokenContract = new ethers.Contract(tokenAddr, JSON.parse(JSON.stringify(erc20ABI)), signer);
        const decimal = await tokenContract.decimals();
        const tAmount = ethers.parseUnits(amount.toString(), Number(decimal));
        if (flag) {
            const transferTx = await tokenContract.transferFrom(account, toAddr, tAmount);
            await transferTx.wait();
        }
        else {
            const transferTx = await tokenContract.transferFrom(toAddr, account, tAmount);
            await transferTx.wait();
        }
    }
}
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Web3Auth } from "@web3auth/modal";
import PropTypes from 'prop-types'

import { pairs } from "../config/constants";
import { erc20ABI } from '../abis/erc20';
import { tokenBalance } from '../config/web3';

interface TransferFundsProps {
  rootClassName?: string;
  account?: string;
  setProfileStatus?: React.Dispatch<React.SetStateAction<number>>;
  web3auth?: Web3Auth | null;
}

interface TokenPair {
  index: number;
  name: string;
  value: string;
  symbols: Array<string>;
  addresses: Array<string>;
  logoURLs: Array<string>;
}

const TransferFunds: React.FC<TransferFundsProps> = (props) => {
  const [tokenPair, setTokenPair] = useState<TokenPair | null>(null);
  const [amountA, setAmountA] = useState(0);
  const [amountB, setAmountB] = useState(0);
  const [balanceA, setBalanceA] = useState(0);
  const [balanceB, setBalanceB] = useState(0);

  const handleAmountA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountA(Number(event.target.value));
  }

  const handleAmountB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountB(Number(event.target.value));
  }

  const transferToken = async (flag: number) => {
    const gnosis_addr = localStorage.getItem("gnosis_addr");
    if (props.web3auth) {
      const web3authProvider = await props.web3auth.connect();
      if (web3authProvider) {
        const provider = new ethers.BrowserProvider(web3authProvider);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        if (gnosis_addr) {
          if (flag === 0) {
            if (balanceA > 0 && amountA <= balanceA && tokenPair) {
              const tokenAContract = new ethers.Contract(tokenPair["addresses"][0], JSON.parse(JSON.stringify(erc20ABI)), signer);
              const amount = ethers.parseUnits(amountA.toString(), 18);
              await tokenAContract.transfer(gnosis_addr, amount);
              const balA = await tokenAContract.balanceOf(account);
              setBalanceA(Number(balA) / 10 ** 18);
            }
          } else if (flag === 1) {
            if (balanceB > 0 && amountB <= balanceB && tokenPair) {
              const tokenBContract = new ethers.Contract(tokenPair["addresses"][1], JSON.parse(JSON.stringify(erc20ABI)), signer);
              const amount = ethers.parseUnits(amountB.toString(), 18);
              await tokenBContract.transfer(gnosis_addr, amount);
              const balB = await tokenBContract.balanceOf(account);
              setBalanceB(Number(balB) / 10 ** 18);
            }
          }
        }
      }
    }
  }

  const handleNext = () => {
    if (props.setProfileStatus)
      props.setProfileStatus(4);
  }

  useEffect(() => {
    const init = async () => {
      const pair = localStorage.getItem("pair");
      const pair_item = pairs.filter(item => {
        return item.value === pair;
      });
      setTokenPair(pair_item[0]);
      if (props.web3auth && props.account) {
        const balA = await tokenBalance(props.web3auth, pair_item[0]["addresses"][0], props.account);
        const balB = await tokenBalance(props.web3auth, pair_item[0]["addresses"][1], props.account);
        setBalanceA(Number(balA) / 10 ** 18);
        setBalanceB(Number(balB) / 10 ** 18);
      }
    }

    init();
  }, [props.web3auth]);


  return (
    <>
      <div className={`transfer-funds-container ${props.rootClassName} `}>
        <h1 className="transfer-funds-text">Transfer Funds</h1>
        <div className="transfer-funds-container-userprofile">
          <div className="transfer-funds-container-transfer-token-a">
            <span className="transfer-funds-text1">{tokenPair ? tokenPair.symbols[0] : "Token A:"}</span>
            <div className="transfer-funds-container1">
              <input
                type="number"
                className="transfer-funds-textinput input"
                value={amountA}
                onChange={handleAmountA}
              />
              <span>Balance: {balanceA}</span>
            </div>
            <button type="button" className="transfer-funds-button button" onClick={() => transferToken(0)}>
              Send
            </button>
          </div>
          <div className="transfer-funds-container-transfer-token-b">
            <span className="transfer-funds-text1">{tokenPair ? tokenPair.symbols[1] : "Token B:"}</span>
            <div className="transfer-funds-container2">
              <input
                type="number"
                className="transfer-funds-textinput1 input"
                value={amountB}
                onChange={handleAmountB}
              />
              <span>Balance: {balanceB}</span>
            </div>
            <button type="button" className="transfer-funds-button1 button" onClick={() => transferToken(1)}>
              Send
            </button>
          </div>
          <div className="transfer-funds-container-next">
            <button type="button" className="transfer-funds-button2 button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .transfer-funds-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .transfer-funds-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .transfer-funds-container-userprofile {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-primary-100);
            border-width: 2px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .transfer-funds-container-transfer-token-a {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .transfer-funds-text1 {
            font-size: 32px;
            padding-right: 0px;
            min-width: 110px;
          }
          .transfer-funds-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .transfer-funds-textinput {
            color: black;
            width: var(--dl-size-size-xxlarge);
            background-color: var(--dl-color-gray-900);
          }
          .transfer-funds-button {
            width: var(--dl-size-size-large);
            height: 36px;
            font-size: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .transfer-funds-container-transfer-token-b {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 18px;
            justify-content: space-between;
          }
          .transfer-funds-text3 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .transfer-funds-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .transfer-funds-textinput1 {
            color: black;
            width: var(--dl-size-size-xxlarge);
            background-color: var(--dl-color-gray-900);
          }
          .transfer-funds-button1 {
            width: var(--dl-size-size-large);
            height: 36px;
            font-size: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .transfer-funds-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .transfer-funds-button2 {
            color: #ffffff;
            width: 400px;
            font-size: 32px;
            padding-top: 4px;
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            background-color: var(--dl-color-primary-100);
          }
        `}
      </style>
    </>
  )
}

TransferFunds.defaultProps = {
  rootClassName: '',
  account: ''
}

TransferFunds.propTypes = {
  rootClassName: PropTypes.string,
  account: PropTypes.string
}

export default TransferFunds

import React, { useEffect, useState } from 'react';
import { Web3Auth } from "@web3auth/modal";
import PropTypes from 'prop-types'

import { pairs } from "../config/constants";
import { tokenBalance, transferToken } from '../config/web3';
import { editSafeInstance, createDockerContainer, getInstanceId, getSafeInstance } from '../config/apis';
import { Alert, Snackbar } from '@mui/material';

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
  const [isDeposited, setIsDeposited] = useState(false);
  const [sopen, setSopen] = useState(false);
  const [snackbarTxt, setSnackbarTxt] = useState("");

  const handleSClose = () => {
    setSopen(false);
  }

  const handleAmountA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountA(Number(event.target.value));
  }

  const handleAmountB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountB(Number(event.target.value));
  }

  const transferTokenInit = async (flag: number) => {
    const signature = localStorage.getItem("signature");
    const gnosis_addr = localStorage.getItem("gnosis_addr");
    if (props.web3auth && props.account && signature && gnosis_addr) {
      if (flag === 0) {
        if (balanceA > 0 && amountA > 0 && amountA <= balanceA && tokenPair) {
          await transferToken(props.web3auth, tokenPair["addresses"][0], gnosis_addr, amountA, true);
          const balA = await tokenBalance(props.web3auth, tokenPair["addresses"][0], props.account);
          setAmountA(0);
          setBalanceA(Number(balA));
          if (!isDeposited) {
            setIsDeposited(true);
          }
        } else {
          setSnackbarTxt("Fill the amount, please.");
          setSopen(true);
        }
      } else if (flag === 1) {
        if (balanceB > 0 && amountB > 0 && amountB <= balanceB && tokenPair) {
          await transferToken(props.web3auth, tokenPair["addresses"][1], gnosis_addr, amountB, true);
          const balB = await tokenBalance(props.web3auth, tokenPair["addresses"][1], props.account);
          setAmountB(0);
          setBalanceB(Number(balB));
          if (!isDeposited) {
            setIsDeposited(true);
          }
        } else {
          setSnackbarTxt("Fill the amount, please.");
          setSopen(true);
        }
      }
    }
  }

  const handleNext = async () => {
    const signature = localStorage.getItem("signature");
    const module_address = localStorage.getItem("gnosis_module");
    if (props.account && signature && module_address) {
      const instance_id = await getInstanceId(props.account);
      const created_msg = await createDockerContainer(props?.account, signature, instance_id);
      setSnackbarTxt(created_msg);
      setSopen(true);
      if (created_msg !== "Start delayed, please contact customer support") {
        const instance_id = await getInstanceId(props.account);
        const instance = await getSafeInstance(props?.account, instance_id, signature);
        await editSafeInstance(props?.account, instance_id, signature, module_address,
          instance?.result?.strategy, instance?.result?.setting_1, instance?.result?.setting_2,
          instance?.result?.setting_3, instance?.result?.setting_4, instance?.result?.setting_5, true, true);
        localStorage.setItem("deposited", "1");
        setTimeout(function () {
          if (props.setProfileStatus)
            props.setProfileStatus(4);
        }, 3000);
      }
    }
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
        setBalanceA(Number(balA));
        setBalanceB(Number(balB));
        const gnosis_addr = localStorage.getItem("gnosis_addr");
        if (gnosis_addr) {
          const holdingBalA = await tokenBalance(props.web3auth, pair_item[0]["addresses"][0], gnosis_addr);
          const holdingBalB = await tokenBalance(props.web3auth, pair_item[0]["addresses"][1], gnosis_addr);
          if (Number(holdingBalA) > 0 || Number(holdingBalB) > 0)
            setIsDeposited(true);
        }
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
            <button type="button" className="transfer-funds-button button" onClick={() => transferTokenInit(0)}>
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
            <button type="button" className="transfer-funds-button1 button" onClick={() => transferTokenInit(1)}>
              Send
            </button>
          </div>
          <div className="transfer-funds-container-next">
            {isDeposited &&
              <button type="button" className="transfer-funds-button2 button" onClick={handleNext}>
                Next
              </button>
            }
          </div>
        </div>
        <Snackbar open={sopen} autoHideDuration={3000} onClose={handleSClose}>
          <Alert onClose={handleSClose} severity="success" sx={{ width: '100%' }}>
            {snackbarTxt}
          </Alert>
        </Snackbar>
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

import { Web3Auth } from '@web3auth/modal';
import { ethers } from "ethers";
import React, { useEffect, useState } from 'react'
import { getInstanceId, getSafePublicKey } from '../config/apis';
import { tokenBalance } from '../config/web3';
import { Alert, Snackbar } from '@mui/material';

interface BotInstanceGasTokenProps {
  account?: string;
  web3auth?: Web3Auth | null;
}

const BotInstanceGasToken: React.FC<BotInstanceGasTokenProps> = (props) => {
  const [amount, setAmount] = useState(0);
  const [availableAmount, setAvailableAmount] = useState(0);
  const [userTokenAmount, setUserTokenAmount] = useState(0);
  const [traderAddress, setTraderAddress] = useState("");
  const [sopen, setSopen] = useState(false);
  const [snackbarTxt, setSnackbarTxt] = useState("");

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }

  const handleSClose = () => {
    setSopen(false);
  }

  const transferKava = async () => {
    if(amount === 0) {
      setSnackbarTxt("Please fill the amount you want to transfer.");
      setSopen(true);
    } else if(amount > userTokenAmount) {
      setSnackbarTxt("You can't transfer token more than you are holding.");
      setSopen(true);
    } else {
      if (props.web3auth && props.account) {
        const web3authProvider = await props.web3auth.connect();
        if(web3authProvider) {
          const provider = new ethers.BrowserProvider(web3authProvider);
          const signer = await provider.getSigner();
          const tAmount = ethers.parseUnits(amount.toString(), 18);
          try {
            const tx = await signer.sendTransaction({
              to: traderAddress,
              value: tAmount,
            });
            await tx.wait();
            setSnackbarTxt("Successfully transferred!");
            setSopen(true);
            setAmount(0);
            setAvailableAmount(availableAmount+amount);
            setUserTokenAmount(userTokenAmount-amount);
          } catch(e) {
            setSnackbarTxt("Transfer failed!");
            setSopen(true);
          }
        }
      }
    }
  }

  useEffect(() => {
    const initApp = async () => {
      if (props.web3auth && props.account) {
        const signature = localStorage.getItem("signature");
        const instance_id = await getInstanceId(props.account);
        if (signature && instance_id) {
          const public_key = await getSafePublicKey(props.account, instance_id, signature);
          const pubKeyAddr = public_key?.result?.instance_public_key;
          setTraderAddress(pubKeyAddr);
          const web3authProvider = await props.web3auth.connect();
          if(web3authProvider) {
            const provider = new ethers.BrowserProvider(web3authProvider);
            const availableAmnt = await provider.getBalance(pubKeyAddr);
            const formattedBalance1 = ethers.formatUnits(availableAmnt, 18);
            setAvailableAmount(Number(formattedBalance1));
            const userTokenAmnt = await provider.getBalance(props?.account);
            const formattedBalance2 = ethers.formatUnits(userTokenAmnt, 18);
            setUserTokenAmount(Number(formattedBalance2));
          }
        }
      }
    }
    initApp();
  }, []);

  return (
    <>
      <div className="app-component-container">
        <div className="app-component-container1">
          <span className="app-component-text">Trading Bot</span>
          <div className="app-component-container2">
            <div className="app-component-container3">
              <span className="app-component-text1">Available</span>
              <span className="app-component-text2">**KAVA</span>
              <span className="app-component-text3">for transaction fees:</span>
              <span className="app-component-text4">
                {availableAmount}
              </span>
            </div>
            <div className="app-component-container4">
              <div className="app-component-container5">
                <div className="app-component-container6">
                  <input
                    type="number"
                    placeholder="Fill Amount"
                    className="app-component-textinput input"
                    value={amount}
                    onChange={handleAmount}
                  />
                  <button type="button" className="app-component-button button" onClick={transferKava}>
                    Top Up
                  </button>
                </div>
                <div className="app-component-container7">
                  <span>**KAVA</span>
                  <span className="app-component-text6">
                    Balance:
                  </span>
                  <span className="app-component-text7">
                    {userTokenAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Snackbar open={sopen} autoHideDuration={3000} onClose={handleSClose}>
          <Alert onClose={handleSClose} severity="info" sx={{ width: '100%' }}>
            {snackbarTxt}
          </Alert>
        </Snackbar>
      </div>
      <style jsx>
        {`
          .app-component-container {
            width: 1000px;
            height: 192px;
            display: flex;
            position: relative;
            align-self: center;
            border-color: var(--dl-color-primary-100);
            border-width: 10px;
            justify-content: flex-start;
          }
          .app-component-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-self: flex-start;
            margin-top: 0px;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-text {
            font-size: 32px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .app-component-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            justify-content: space-between;
          }
          .app-component-text1 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-text2 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-text3 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-text4 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-container5 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10px;
          }
          .app-component-textinput {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .app-component-button {
            margin-left: var(--dl-space-space-unit);
          }
          .app-component-container7 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .app-component-text6 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .app-component-text7 {
            margin-left: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

export default BotInstanceGasToken

import React, { useEffect, useState } from 'react'
import { Web3Auth } from '@web3auth/modal';
import { Box, Typography, Button, Modal, TextField, Snackbar, Alert } from '@mui/material';
import PropTypes from 'prop-types'
import { pairs } from '../config/constants';
import { tokenBalance, transferToken } from '../config/web3';

interface BotInstanceDataProps {
  rootClassName?: string;
  account?: string;
  web3auth?: Web3Auth | null;
  setProfileStatus?: React.Dispatch<React.SetStateAction<number>>;
  setPairName?: React.Dispatch<React.SetStateAction<string>>;
}

interface TokenPair {
  index: number;
  name: string;
  value: string;
  symbols: Array<string>;
  addresses: Array<string>;
  logoURLs: Array<string>;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BotInstanceData: React.FC<BotInstanceDataProps> = (props) => {
  const [tokenPair, setTokenPair] = useState<TokenPair | null>(null);
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [sopen, setSopen] = useState(false);
  const [mflag, setMflag] = useState(1);
  const [snackbarTxt, setSnackbarTxt] = useState("");
  const [balanceA, setBalanceA] = useState(0);
  const [balanceB, setBalanceB] = useState(0);
  const [holdingBalanceA, setHoldingBalanceA] = useState(0);
  const [holdingBalanceB, setHoldingBalanceB] = useState(0);

  const handleDeposit1 = () => {
    if (balanceA > 0) {
      setMflag(1);
      setOpen(true);
    } else {
      setSnackbarTxt("No enough token in your wallet.");
      setSopen(true);
    }
  }

  const handleWithdraw1 = () => {
    if (holdingBalanceA > 0) {
      setMflag(2);
      setOpen(true);
    } else {
      setSnackbarTxt("No holding token.");
      setSopen(true);
    }
  }

  const handleDeposit2 = () => {
    if (balanceB > 0) {
      setMflag(3);
      setOpen(true);
    } else {
      setSnackbarTxt("No enough token in your wallet.");
      setSopen(true);
    }
  }

  const handleWithdraw2 = () => {
    if (holdingBalanceB > 0) {
      setMflag(4);
      setOpen(true);
    } else {
      setSnackbarTxt("No holding token.");
      setSopen(true);
    }
  }

  const handleClose = () => {
    setAmount(0);
    setOpen(false);
  }

  const handleSClose = () => {
    setSopen(false);
  }

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  }

  const confirmTransfer = async () => {
    if (mflag === 1 && amount <= balanceA) {
      const safe_address = localStorage.getItem("gnosis_addr");
      if (props.web3auth && safe_address && tokenPair)
        await transferToken(props.web3auth, tokenPair["addresses"][0], safe_address, amount, true);
      setOpen(false);
      if (props.web3auth && props.account && safe_address && tokenPair) {
        const balA = await tokenBalance(props.web3auth, tokenPair["addresses"][0], props.account);
        const holdingBalA = await tokenBalance(props.web3auth, tokenPair["addresses"][0], safe_address);
        setBalanceA(balA);
        setHoldingBalanceA(holdingBalA);
      }
    } else if (mflag === 2 && amount <= holdingBalanceA) {
      const safe_address = localStorage.getItem("gnosis_addr");
      if (props.web3auth && safe_address && tokenPair)
        await transferToken(props.web3auth, tokenPair["addresses"][0], safe_address, amount, false);
      setOpen(false);
      if (props.web3auth && props.account && safe_address && tokenPair) {
        const balA = await tokenBalance(props.web3auth, tokenPair["addresses"][0], props.account);
        const holdingBalA = await tokenBalance(props.web3auth, tokenPair["addresses"][0], safe_address);
        setBalanceA(balA);
        setHoldingBalanceA(holdingBalA);
      }
    } else if (mflag === 3 && amount <= balanceB) {
      const safe_address = localStorage.getItem("gnosis_addr");
      if (props.web3auth && safe_address && tokenPair)
        await transferToken(props.web3auth, tokenPair["addresses"][1], safe_address, amount, true);
      setOpen(false);
      if (props.web3auth && props.account && safe_address && tokenPair) {
        const balB = await tokenBalance(props.web3auth, tokenPair["addresses"][1], props.account);
        const holdingBalB = await tokenBalance(props.web3auth, tokenPair["addresses"][1], safe_address);
        setBalanceB(balB);
        setHoldingBalanceB(holdingBalB);
      }
    } else if (mflag === 4 && amount <= holdingBalanceB) {
      const safe_address = localStorage.getItem("gnosis_addr");
      if (props.web3auth && safe_address && tokenPair)
        await transferToken(props.web3auth, tokenPair["addresses"][1], safe_address, amount, false);
      setOpen(false);
      if (props.web3auth && props.account && safe_address && tokenPair) {
        const balB = await tokenBalance(props.web3auth, tokenPair["addresses"][1], props.account);
        const holdingBalB = await tokenBalance(props.web3auth, tokenPair["addresses"][1], safe_address);
        setBalanceB(balB);
        setHoldingBalanceB(holdingBalB);
      }
    } else {
      setSnackbarTxt("Invalid amount.");
      setSopen(true);
    }
    setAmount(0);
  }

  useEffect(() => {
    const init = async () => {
      const pair = localStorage.getItem("pair");
      const safe_address = localStorage.getItem("gnosis_addr");
      const pair_item = pairs.filter(item => {
        return item.value === pair;
      });
      setTokenPair(pair_item[0]);
      if (props.setPairName && pair_item[0])
        props.setPairName(pair_item[0]["name"]);
      if (props.web3auth && props.account && safe_address) {
        const balA = await tokenBalance(props.web3auth, pair_item[0]["addresses"][0], props.account);
        const balB = await tokenBalance(props.web3auth, pair_item[0]["addresses"][1], props.account);
        const holdbalA = await tokenBalance(props.web3auth, pair_item[0]["addresses"][0], safe_address);
        const holdbalB = await tokenBalance(props.web3auth, pair_item[0]["addresses"][1], safe_address);
        setBalanceA(balA);
        setBalanceB(balB);
        setHoldingBalanceA(holdbalA);
        setHoldingBalanceB(holdbalB);
      }
    }
    init();
  }, [props.setPairName]);

  return (
    <>
      <div className={`bot-instance-data-container ${props.rootClassName} `}>
        <div className="bot-instance-data-container1">
          <div className="bot-instance-data-container2">
            <div className="bot-instance-data-container3">
              <span className="bot-instance-data-text">
                {tokenPair?.symbols[0]} Balance:
              </span>
              <span className="bot-instance-data-text1">
                {holdingBalanceA}
              </span>
            </div>
            <div className="bot-instance-data-container4">
              <button type="button" className="bot-instance-data-button button" onClick={handleDeposit1}>
                Deposit
              </button>
              <button
                type="button"
                className="bot-instance-data-button1 button"
                onClick={handleWithdraw1}
              >
                Withdraw
              </button>
            </div>
          </div>
          <div className="bot-instance-data-container5">
            <div className="bot-instance-data-container6">
              <span className="bot-instance-data-text3">
                {tokenPair?.symbols[1]} Balance:
              </span>
              <span className="bot-instance-data-text4">
                {holdingBalanceB}
              </span>
            </div>
            <div className="bot-instance-data-container7">
              <button
                type="button"
                className="bot-instance-data-button2 button"
                onClick={handleDeposit2}
              >
                Deposit
              </button>
              <button
                type="button"
                className="bot-instance-data-button3 button"
                onClick={handleWithdraw2}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
        <img
          alt="img"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="bot-instance-data-image"
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal-dialog modal-lg"

        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              {mflag === 1 && "Deposit " + tokenPair?.symbols[0]}
              {mflag === 2 && "Withdraw " + tokenPair?.symbols[0]}
              {mflag === 3 && "Deposit " + tokenPair?.symbols[1]}
              {mflag === 4 && "Withdraw " + tokenPair?.symbols[1]}
            </Typography>
            <TextField
              placeholder='Fill the Amount!'
              type='number'
              inputProps={{ min: "0" }}
              sx={{ width: "100%", mt: 2 }}
              value={amount}
              onChange={handleAmount}
            >

            </TextField>
            <Typography id="modal-modal-title" variant="body1" component="h2" >
              {(mflag === 1) && "Wallet Balance: " + balanceA}
              {(mflag === 2) && "Holding Balance: " + holdingBalanceA}
              {(mflag === 3) && "Wallet Balance: " + balanceB}
              {(mflag === 4) && "Holding Balance: " + holdingBalanceB}
            </Typography>
            <Box sx={{ mt: 2, float: "right" }}>
              <Button variant='contained' color='primary' onClick={confirmTransfer}>Confirm</Button>
              <Button variant='contained' color='error' sx={{ ml: 1 }} onClick={handleClose}>Cancel</Button>
            </Box>
          </Box>
        </Modal>
        <Snackbar open={sopen} autoHideDuration={3000} onClose={handleSClose}>
          <Alert onClose={handleSClose} severity="warning" sx={{ width: '100%' }}>
            {snackbarTxt}
          </Alert>
        </Snackbar>
      </div>
      <style jsx>
        {`
          .bot-instance-data-container {
            width: 456px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .bot-instance-data-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .bot-instance-data-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .bot-instance-data-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bot-instance-data-text {
            font-size: 32px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .bot-instance-data-text1 {
            font-size: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .bot-instance-data-text2 {
            font-size: 32px;
          }
          .bot-instance-data-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .bot-instance-data-button {
            width: var(--dl-size-size-large);
            margin-right: var(--dl-space-space-twounits);
          }
          .bot-instance-data-button1 {
            width: var(--dl-size-size-large);
          }
          .bot-instance-data-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .bot-instance-data-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bot-instance-data-text3 {
            font-size: 32px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .bot-instance-data-text4 {
            font-size: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .bot-instance-data-text5 {
            font-size: 32px;
          }
          .bot-instance-data-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .bot-instance-data-button2 {
            width: var(--dl-size-size-large);
            margin-right: var(--dl-space-space-twounits);
          }
          .bot-instance-data-button3 {
            width: var(--dl-size-size-large);
          }
          .bot-instance-data-image {
            width: 311px;
            height: 151px;
            object-fit: cover;
            margin-left: var(--dl-space-space-twounits);
            margin-right: 13px;
          }
        `}
      </style>
    </>
  )
}

BotInstanceData.defaultProps = {
  rootClassName: '',
}

BotInstanceData.propTypes = {
  rootClassName: PropTypes.string,
}

export default BotInstanceData

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { deploySafeContract, createModule, allowPair } from '../config/web3';
import { Web3Auth } from '@web3auth/modal';

import { createSafeInstance, editSafeInstance, getSafePublicKey, getInstanceId, getSafeInstance, createDockerContainer } from '../config/apis';
import { Alert, Snackbar } from '@mui/material';

interface DeployContractsProps {
  rootClassName?: string;
  account?: string;
  setProfileStatus?: React.Dispatch<React.SetStateAction<number>>;
  web3auth?: Web3Auth | null;
}

const DeployContracts: React.FC<DeployContractsProps> = (props) => {
  const [flag, setFlag] = useState(0);

  const deployGnosis = async () => {
    if (props.web3auth) {
      const gnosis_addr = await deploySafeContract(props.web3auth);
      if (gnosis_addr !== null && typeof gnosis_addr === "string") {
        localStorage.setItem("gnosis_addr", gnosis_addr);
        const signature = localStorage.getItem("signature");
        const pair = localStorage.getItem("pair");
        const dex = localStorage.getItem("dex");
        const strategy = localStorage.getItem("strategy");
        if (props.account && signature && pair && dex && strategy) {
          try {
            await createSafeInstance(props?.account, signature, pair, dex, gnosis_addr, "", "kava", strategy, "y", "y", "y", "y", "1");
            localStorage.setItem("setting1", "y");
            localStorage.setItem("setting2", "y");
            localStorage.setItem("setting3", "y");
            localStorage.setItem("setting4", "y");
            localStorage.setItem("setting5", "1");
            setFlag(1);
          } catch (err) {
            setFlag(1);
          }
        }
      }
    }
  }

  const createGModule = async () => {
    if (props.web3auth) {
      const gnosis_addr = localStorage.getItem("gnosis_addr");
      const dex = localStorage.getItem("dex");
      const signature = localStorage.getItem("signature");
      if (props.account && signature) {
        const instance_id = await getInstanceId(props.account);
        if (instance_id) {
          const public_key = await getSafePublicKey(props.account, instance_id, signature);
          if (gnosis_addr && dex) {
            const module_address = await createModule(props.web3auth, gnosis_addr, public_key?.result?.instance_public_key, dex);
            if (module_address !== null && typeof module_address === "string") {
              localStorage.setItem("gnosis_module", module_address);
              const instance = await getSafeInstance(props?.account, instance_id, signature);
              await editSafeInstance(props?.account, instance_id, signature, module_address,
                instance?.result?.strategy, instance?.result?.setting_1, instance?.result?.setting_2,
                instance?.result?.setting_3, instance?.result?.setting_4, instance?.result?.setting_5, false, false);
              setFlag(2);
            }
          }
        }
      }
    }
  }

  const allowGPair = async () => {
    if (props.web3auth && props.account) {
      const safe_address = localStorage.getItem("gnosis_addr");
      const module_address = localStorage.getItem("gnosis_module");
      const dex = localStorage.getItem("dex");
      const pair = localStorage.getItem("pair");
      const signature = localStorage.getItem("signature");

      if (safe_address && module_address && dex && pair && signature) {
        const is_allowed = await allowPair(props.web3auth, safe_address, module_address, dex, pair);
        if (is_allowed) {
          const instance_id = await getInstanceId(props.account);
          const instance = await getSafeInstance(props?.account, instance_id, signature);
          await editSafeInstance(props?.account, instance_id, signature, module_address,
            instance?.result?.strategy, instance?.result?.setting_1, instance?.result?.setting_2,
            instance?.result?.setting_3, instance?.result?.setting_4, instance?.result?.setting_5, true, false);
          localStorage.setItem("allowed", "1");
          setFlag(3);
        }
      }
    }
  }

  const handleNext = async () => {
    if (props.account && props.setProfileStatus) {
      const instance_id = await getInstanceId(props.account);
      if (instance_id)
        localStorage.setItem("instance_id", instance_id);
      props?.setProfileStatus(3);
    }
  }

  useEffect(() => {
    const gnosis_addr = localStorage.getItem("gnosis_addr");
    const gnosis_module = localStorage.getItem("gnosis_module");
    const pair_allowed = localStorage.getItem("allowed");

    if (pair_allowed)
      setFlag(3);
    else if (gnosis_module)
      setFlag(2);
    else if (gnosis_addr)
      setFlag(1);
    else
      setFlag(0);
  }, []);

  return (
    <>
      <div className={`deploy-contracts-container ${props.rootClassName} `}>
        <h1 className="deploy-contracts-text">Deploy Contracts</h1>
        <div className="deploy-contracts-container-userprofile">
          <div className="deploy-contracts-container-name">
            <span className="deploy-contracts-text1">Gnosis Safe: </span>
            {flag === 0 &&
              <button type="button" className="deploy-contracts-button button" onClick={deployGnosis}>
                Deploy
              </button>
            }
            {flag !== 0 &&
              <span className="deploy-contracts-text1" style={{ width: 288, textAlign: "center" }}>Deployed!</span>
            }
          </div>
          <div className="deploy-contracts-container-e-mail">
            <span className="deploy-contracts-text2">Trading Module:</span>
            {flag === 1 &&
              <button type="button" className="deploy-contracts-button1 button" onClick={createGModule}>
                Deploy
              </button>
            }
            {flag >= 2 &&
              <span className="deploy-contracts-text1" style={{ width: 288, textAlign: "center" }}>Deployed!</span>
            }
          </div>
          <div className="deploy-contracts-container-telegram">
            <span className="deploy-contracts-text3">Set Allowances</span>
            {flag === 2 &&
              <button type="button" className="deploy-contracts-button2 button" onClick={allowGPair}>
                Allow
              </button>
            }
            {flag === 3 &&
              <span className="deploy-contracts-text1" style={{ width: 288, textAlign: "center" }}>Allowed!</span>
            }
          </div>
          <div className="deploy-contracts-container-next">
            {flag == 3 &&
              <a href='javascript:void(0);' className="deploy-contracts-link button" onClick={handleNext}>Next</a>
            }
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .deploy-contracts-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .deploy-contracts-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .deploy-contracts-container-userprofile {
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
          .deploy-contracts-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .deploy-contracts-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .deploy-contracts-button {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .deploy-contracts-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .deploy-contracts-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .deploy-contracts-button1 {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .deploy-contracts-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .deploy-contracts-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .deploy-contracts-button2 {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            background-color: var(--dl-color-gray-900);
          }
          .deploy-contracts-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .deploy-contracts-link {
            color: #ffffff;
            font-size: 32px;
            padding-top: 4px;
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 0px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
        `}
      </style>
    </>
  )
}

DeployContracts.defaultProps = {
  rootClassName: '',
  account: ''
}

DeployContracts.propTypes = {
  rootClassName: PropTypes.string,
  account: PropTypes.string
}

export default DeployContracts

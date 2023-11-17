import React, { useState } from 'react'
import { Web3Auth } from '@web3auth/modal';
import BotInstanceData from './BotInstanceData'
import BotInstanceSetUp from './BotInstanceSetup'

interface BotInstanceProps {
  account?: string;
  web3auth: Web3Auth | null;
}

const BotInstance: React.FC<BotInstanceProps> = (props) => {
  const [pairName, setPairName] = useState("");
  return (
    <>
      <div className={`bot-instance1-container`}>
        <div className="bot-instance1-container1">
          <span className="bot-instance1-text">#1</span>
          <span className="bot-instance1-text1">{pairName}</span>
        </div>
        <div className="bot-instance1-container2">
          <div className="bot-instance1-container3"></div>
          <BotInstanceData web3auth={props.web3auth} account={props.account} setPairName={setPairName}></BotInstanceData>
          <div className="bot-instance1-container4"></div>
          <BotInstanceSetUp account={props.account} ></BotInstanceSetUp>
          <div className="bot-instance1-container5"></div>
        </div>
        <div className="bot-instance1-container6"></div>
      </div>
      <style jsx>
        {`
          .bot-instance1-container {
            width: 100%;
            height: 460px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .bot-instance1-container1 {
            width: 1000px;
            height: var(--dl-size-size-small);
            display: flex;
            align-self: center;
            align-items: flex-start;
            background-color: var(--dl-color-primary-100);
          }
          .bot-instance1-text {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            margin-left: var(--dl-space-space-threeunits);
          }
          .bot-instance1-text1 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: center;
            margin-left: var(--dl-space-space-threeunits);
          }
          .bot-instance1-container2 {
            flex: 0 0 auto;
            width: 1000px;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .bot-instance1-container3 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xsmall);
            height: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-primary-100);
          }
          .bot-instance1-container4 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xsmall);
            height: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-primary-100);
          }
          .bot-instance1-container5 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xsmall);
            height: 400px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-primary-100);
          }
          .bot-instance1-container6 {
            width: 1000px;
            height: var(--dl-size-size-xsmall);
            display: flex;
            align-self: center;
            align-items: flex-start;
            background-color: var(--dl-color-primary-100);
          }
        `}
      </style>
    </>
  )
}

export default BotInstance

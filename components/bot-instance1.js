import React from 'react'

import PropTypes from 'prop-types'

import BotInstanceData from './bot-instance-data'
import BotInstanceSetUp from './bot-instance-set-up'

const BotInstance1 = (props) => {
  return (
    <>
      <div className={`bot-instance1-container ${props.rootClassName} `}>
        <div className="bot-instance1-container1">
          <span className="bot-instance1-text">{props.nmrInstance1}</span>
          <span className="bot-instance1-text1">{props.PairInstance}</span>
        </div>
        <div className="bot-instance1-container2">
          <div className="bot-instance1-container3"></div>
          <BotInstanceData rootClassName="bot-instance-data-root-class-name"></BotInstanceData>
          <div className="bot-instance1-container4"></div>
          <BotInstanceSetUp rootClassName="bot-instance-set-up-root-class-name"></BotInstanceSetUp>
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

BotInstance1.defaultProps = {
  PairInstance1: 'BTC-USDT',
  rootClassName: '',
  nmrInstance1: '#1',
  nmrInstance11: '#1',
  PairInstance: 'BTC-USDT',
}

BotInstance1.propTypes = {
  PairInstance1: PropTypes.string,
  rootClassName: PropTypes.string,
  nmrInstance1: PropTypes.string,
  nmrInstance11: PropTypes.string,
  PairInstance: PropTypes.string,
}

export default BotInstance1

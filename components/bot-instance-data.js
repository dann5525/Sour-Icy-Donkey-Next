import React from 'react'

import PropTypes from 'prop-types'

const BotInstanceData = (props) => {
  return (
    <>
      <div className={`bot-instance-data-container ${props.rootClassName} `}>
        <div className="bot-instance-data-container1">
          <div className="bot-instance-data-container2">
            <div className="bot-instance-data-container3">
              <span className="bot-instance-data-text">
                {props.TokenABalanceText}
              </span>
              <span className="bot-instance-data-text1">
                {props.TokenABalanceValue}
              </span>
              <span className="bot-instance-data-text2">
                {props.TokenABalanceValue1}
              </span>
            </div>
            <div className="bot-instance-data-container4">
              <button type="button" className="bot-instance-data-button button">
                {props.buttonDeposit}
              </button>
              <button
                type="button"
                className="bot-instance-data-button1 button"
              >
                {props.buttonWhithdraw}
              </button>
            </div>
          </div>
          <div className="bot-instance-data-container5">
            <div className="bot-instance-data-container6">
              <span className="bot-instance-data-text3">
                {props.TokenBBalanceText}
              </span>
              <span className="bot-instance-data-text4">
                {props.TokenBBalanceValue}
              </span>
              <span className="bot-instance-data-text5">
                {props.TokenABalanceValue11}
              </span>
            </div>
            <div className="bot-instance-data-container7">
              <button
                type="button"
                className="bot-instance-data-button2 button"
              >
                {props.buttonDeposit1}
              </button>
              <button
                type="button"
                className="bot-instance-data-button3 button"
              >
                {props.buttonWhithdraw1}
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="bot-instance-data-image"
        />
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
  TokenABalanceValue: '12.5',
  rootClassName: '',
  TokenBBalanceValue: '300',
  buttonWhithdraw: 'Whithdraw',
  TokenABalanceValue1: '(120$)',
  buttonDeposit1: 'Deposit',
  TokenBBalanceText: 'B Balance:',
  TokenABalanceText: 'A Balance:',
  buttonDeposit: 'Deposit',
  TokenABalanceValue11: '(300$)',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  buttonWhithdraw1: 'Whithdraw',
}

BotInstanceData.propTypes = {
  TokenABalanceValue: PropTypes.string,
  rootClassName: PropTypes.string,
  TokenBBalanceValue: PropTypes.string,
  buttonWhithdraw: PropTypes.string,
  TokenABalanceValue1: PropTypes.string,
  buttonDeposit1: PropTypes.string,
  TokenBBalanceText: PropTypes.string,
  TokenABalanceText: PropTypes.string,
  buttonDeposit: PropTypes.string,
  TokenABalanceValue11: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  buttonWhithdraw1: PropTypes.string,
}

export default BotInstanceData

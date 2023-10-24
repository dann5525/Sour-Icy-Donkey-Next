import React from 'react'

import PropTypes from 'prop-types'

const TransferFunds = (props) => {
  return (
    <>
      <div className={`transfer-funds-container ${props.rootClassName} `}>
        <h1 className="transfer-funds-text">{props.HeadingUP}</h1>
        <div className="transfer-funds-container-userprofile">
          <div className="transfer-funds-container-transfer-token-a">
            <span className="transfer-funds-text1">{props.textName1}</span>
            <div className="transfer-funds-container1">
              <input
                type="text"
                placeholder={props.textinput_name11}
                className="transfer-funds-textinput input"
              />
              <span>{props.text1}</span>
            </div>
            <button type="button" className="transfer-funds-button button">
              {props.button1}
            </button>
          </div>
          <div className="transfer-funds-container-transfer-token-b">
            <span className="transfer-funds-text3">{props.textTelegram}</span>
            <div className="transfer-funds-container2">
              <input
                type="text"
                placeholder={props.textinput_name1}
                className="transfer-funds-textinput1 input"
              />
              <span>{props.text}</span>
            </div>
            <button type="button" className="transfer-funds-button1 button">
              {props.button}
            </button>
          </div>
          <div className="transfer-funds-container-next">
            <button type="button" className="transfer-funds-button2 button">
              {props.btnNext}
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
            color: var(--dl-color-gray-900);
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
            color: var(--dl-color-gray-900);
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
  btnNext: 'Start Market Making',
  button2: 'Deploy',
  textinput_name11: '',
  textName1: 'Token A:',
  button1: 'Send',
  textinput_name: '',
  text1: 'Balance A:',
  rootClassName: '',
  text: 'Balance B:',
  textinput_name1: '',
  HeadingUP: 'Transfer Funds',
  button: 'Send',
  textTelegram: 'Token B:',
  texttelegram: 'Set Allowances',
}

TransferFunds.propTypes = {
  btnNext: PropTypes.string,
  button2: PropTypes.string,
  textinput_name11: PropTypes.string,
  textName1: PropTypes.string,
  button1: PropTypes.string,
  textinput_name: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  textinput_name1: PropTypes.string,
  HeadingUP: PropTypes.string,
  button: PropTypes.string,
  textTelegram: PropTypes.string,
  texttelegram: PropTypes.string,
}

export default TransferFunds

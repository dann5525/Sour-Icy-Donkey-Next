import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const DeployContracts = (props) => {
  return (
    <>
      <div className={`deploy-contracts-container ${props.rootClassName} `}>
        <h1 className="deploy-contracts-text">{props.HeadingUP}</h1>
        <div className="deploy-contracts-container-userprofile">
          <div className="deploy-contracts-container-name">
            <span className="deploy-contracts-text1">{props.textName1}</span>
            <button type="button" className="deploy-contracts-button button">
              {props.button1}
            </button>
          </div>
          <div className="deploy-contracts-container-e-mail">
            <span className="deploy-contracts-text2">{props.textTelegram}</span>
            <button type="button" className="deploy-contracts-button1 button">
              {props.button}
            </button>
          </div>
          <div className="deploy-contracts-container-telegram">
            <span className="deploy-contracts-text3">{props.texttelegram}</span>
            <button type="button" className="deploy-contracts-button2 button">
              {props.button2}
            </button>
          </div>
          <div className="deploy-contracts-container-next">
            <Link href="/onboarding_2_411">
              <a className="deploy-contracts-link button">{props.btnNext}</a>
            </Link>
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
  btnNext: 'Next',
  rootClassName: '',
  button1: 'Deploy',
  HeadingUP: 'Deploy Contracts',
  textinput_telegram: '',
  textinput_email: '',
  button: 'Deploy',
  textinput_name: '',
  text: 'Text',
  textTelegram: 'Trading Module:',
  button2: 'Deploy',
  textName1: 'Gnosis Safe:',
  texttelegram: 'Set Allowances',
}

DeployContracts.propTypes = {
  btnNext: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  HeadingUP: PropTypes.string,
  textinput_telegram: PropTypes.string,
  textinput_email: PropTypes.string,
  button: PropTypes.string,
  textinput_name: PropTypes.string,
  text: PropTypes.string,
  textTelegram: PropTypes.string,
  button2: PropTypes.string,
  textName1: PropTypes.string,
  texttelegram: PropTypes.string,
}

export default DeployContracts

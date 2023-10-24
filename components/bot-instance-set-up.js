import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const BotInstanceSetUp = (props) => {
  return (
    <>
      <div className={`bot-instance-set-up-container ${props.rootClassName} `}>
        <div className="bot-instance-set-up-container1">
          <div className="bot-instance-set-up-container-name">
            <span className="bot-instance-set-up-text">{props.textName1}</span>
            <select className="bot-instance-set-up-select-exchange">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name1">
            <span className="bot-instance-set-up-text1">
              {props.textName12}
            </span>
            <select className="bot-instance-set-up-select-exchange1">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name2">
            <span className="bot-instance-set-up-text2">
              {props.textName11}
            </span>
            <select className="bot-instance-set-up-select-exchange2">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name3">
            <span className="bot-instance-set-up-text3">
              {props.textName113}
            </span>
            <select className="bot-instance-set-up-select-exchange3">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name4">
            <span className="bot-instance-set-up-text4">
              {props.textName112}
            </span>
            <select className="bot-instance-set-up-select-exchange4">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name5">
            <span className="bot-instance-set-up-text5">
              {props.textName111}
            </span>
            <select className="bot-instance-set-up-select-exchange5">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="bot-instance-set-up-container-next">
          <Link href="/onboarding_2_411">
            <a className="bot-instance-set-up-link button">{props.btnNext}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .bot-instance-set-up-container {
            width: 456px;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .bot-instance-set-up-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .bot-instance-set-up-container-name {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-name1 {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange1 {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-name2 {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text2 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange2 {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-name3 {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text3 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange3 {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-name4 {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text4 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange4 {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-name5 {
            flex: 0 0 auto;
            width: 456px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text5 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange5 {
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .bot-instance-set-up-container-next {
            flex: 0 0 auto;
            width: 456px;
            height: auto;
            display: flex;
            justify-content: flex-end;
          }
          .bot-instance-set-up-link {
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

BotInstanceSetUp.defaultProps = {
  buttonWhithdraw1: 'Whithdraw',
  rootClassName: '',
  TokenABalanceValue11: '(300$)',
  TokenABalanceText: 'A Balance:',
  buttonDeposit: 'Deposit',
  TokenABalanceValue: '12.5',
  buttonWhithdraw: 'Whithdraw',
  textName112: 'Setting: 4',
  TokenABalanceValue1: '(120$)',
  textName113: 'Setting: 3',
  btnNext: 'Save',
  TokenBBalanceValue: '300',
  textName1: 'Strategie:',
  buttonDeposit1: 'Deposit',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  textName11: 'Setting: 2',
  image_alt: 'image',
  TokenBBalanceText: 'B Balance:',
  textName12: 'Setting 1:',
  textName111: 'Setting: 5',
}

BotInstanceSetUp.propTypes = {
  buttonWhithdraw1: PropTypes.string,
  rootClassName: PropTypes.string,
  TokenABalanceValue11: PropTypes.string,
  TokenABalanceText: PropTypes.string,
  buttonDeposit: PropTypes.string,
  TokenABalanceValue: PropTypes.string,
  buttonWhithdraw: PropTypes.string,
  textName112: PropTypes.string,
  TokenABalanceValue1: PropTypes.string,
  textName113: PropTypes.string,
  btnNext: PropTypes.string,
  TokenBBalanceValue: PropTypes.string,
  textName1: PropTypes.string,
  buttonDeposit1: PropTypes.string,
  image_src: PropTypes.string,
  textName11: PropTypes.string,
  image_alt: PropTypes.string,
  TokenBBalanceText: PropTypes.string,
  textName12: PropTypes.string,
  textName111: PropTypes.string,
}

export default BotInstanceSetUp

import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const MMSettigns = (props) => {
  return (
    <>
      <div className={`mm-settigns-container ${props.rootClassName} `}>
        <h1 className="mm-settigns-text">{props.HeadingUP}</h1>
        <div className="mm-settigns-container-userprofile">
          <div className="mm-settigns-container-name">
            <span className="mm-settigns-text1">{props.textName1}</span>
            <select className="mm-settigns-select-exchange">
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
          <div className="mm-settigns-container-e-mail">
            <span className="mm-settigns-text2">{props.textTelegram}</span>
            <select className="mm-settigns-select-trading-pair">
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="mm-settigns-container-telegram">
            <span className="mm-settigns-text3">{props.texttelegram}</span>
            <select className="mm-settigns-select-strategy">
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="mm-settigns-container-next">
            <Link href="/onboarding_2_41">
              <a className="mm-settigns-link button">{props.btnNext}</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mm-settigns-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mm-settigns-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .mm-settigns-container-userprofile {
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
          .mm-settigns-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .mm-settigns-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .mm-settigns-select-exchange {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .mm-settigns-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .mm-settigns-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .mm-settigns-select-trading-pair {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .mm-settigns-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .mm-settigns-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .mm-settigns-select-strategy {
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: var(--dl-color-gray-900);
          }
          .mm-settigns-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .mm-settigns-link {
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

MMSettigns.defaultProps = {
  textinput_telegram: '',
  textinput_name: '',
  textinput_email: '',
  textName1: 'Exchange:',
  text: 'Text',
  HeadingUP: 'Market Maker Settings:',
  btnNext: 'Next',
  textTelegram: 'Trading Pair:',
  rootClassName: '',
  texttelegram: 'Base Strategy:',
}

MMSettigns.propTypes = {
  textinput_telegram: PropTypes.string,
  textinput_name: PropTypes.string,
  textinput_email: PropTypes.string,
  textName1: PropTypes.string,
  text: PropTypes.string,
  HeadingUP: PropTypes.string,
  btnNext: PropTypes.string,
  textTelegram: PropTypes.string,
  rootClassName: PropTypes.string,
  texttelegram: PropTypes.string,
}

export default MMSettigns

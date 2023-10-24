import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const CreateUP = (props) => {
  return (
    <>
      <div className={`create-up-container ${props.rootClassName} `}>
        <h1 className="create-up-text">{props.HeadingUP}</h1>
        <div className="create-up-container-userprofile">
          <div className="create-up-container-name">
            <span className="create-up-text1">{props.textName1}</span>
            <input
              type="text"
              placeholder={props.textinput_name}
              className="create-up-textinput input"
            />
          </div>
          <div className="create-up-container-e-mail">
            <span className="create-up-text2">{props.textTelegram}</span>
            <input
              type="text"
              placeholder={props.textinput_email}
              className="create-up-textinput1 input"
            />
          </div>
          <div className="create-up-container-telegram">
            <span className="create-up-text3">{props.texttelegram}</span>
            <input
              type="text"
              placeholder={props.textinput_telegram}
              className="create-up-textinput2 input"
            />
          </div>
          <div className="create-up-container-next">
            <Link href="/onboarding_2_4">
              <a className="create-up-link button">{props.btnNext}</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .create-up-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .create-up-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .create-up-container-userprofile {
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
          .create-up-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .create-up-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .create-up-textinput {
            color: var(--dl-color-gray-900);
            width: var(--dl-size-size-xxlarge);
            background-color: var(--dl-color-gray-900);
          }
          .create-up-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .create-up-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .create-up-textinput1 {
            width: var(--dl-size-size-xxlarge);
            background-color: var(--dl-color-gray-900);
          }
          .create-up-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .create-up-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .create-up-textinput2 {
            width: var(--dl-size-size-xxlarge);
            background-color: var(--dl-color-gray-900);
          }
          .create-up-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .create-up-link {
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

CreateUP.defaultProps = {
  textinput_name: '',
  texttelegram: 'Telegram:',
  rootClassName: '',
  textName1: 'Name:',
  textTelegram: 'E-Mail:',
  btnNext: 'Next',
  HeadingUP: 'Create User Profile:',
  texttelegram1: 'Telegram:',
  textinput_telegram: '',
  textinput_email: '',
}

CreateUP.propTypes = {
  textinput_name: PropTypes.string,
  texttelegram: PropTypes.string,
  rootClassName: PropTypes.string,
  textName1: PropTypes.string,
  textTelegram: PropTypes.string,
  btnNext: PropTypes.string,
  HeadingUP: PropTypes.string,
  texttelegram1: PropTypes.string,
  textinput_telegram: PropTypes.string,
  textinput_email: PropTypes.string,
}

export default CreateUP

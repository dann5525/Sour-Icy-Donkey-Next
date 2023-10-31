import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Profile1 = (props) => {
  const [nameEdit, setNameEdit] = useState(false)
  return (
    <>
      <div className={`profile1-container ${props.rootClassName} `}>
        <h1 className="profile1-heading">{props.txt_editProfile}</h1>
        <div className="profile1-container-userprofile">
          <div className="profile1-container-address">
            <span className="profile1-text">{props.txt_address}</span>
          </div>
          <div className="profile1-container-name">
            <span className="profile1-text1">{props.textName11}</span>
            <div className="profile1-container1">
              <input
                type="text"
                disabled
                placeholder={props.textinput_name11}
                className="profile1-input input"
              />
              <button type="button" className="profile1-button button">
                <svg viewBox="0 0 1024 1024" className="profile1-icon button">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="profile1-container-e-mail">
            <span className="profile1-text2">{props.textTelegram}</span>
            <div className="profile1-container2">
              <input
                type="text"
                placeholder={props.textinput_email}
                disabled
                className="profile1-textinput input"
              />
              <button type="button" className="profile1-button1 button">
                <svg viewBox="0 0 1024 1024" className="profile1-icon2 button">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="profile1-container-telegram">
            <span className="profile1-text3">{props.texttelegram}</span>
            <div className="profile1-container3">
              <input
                type="text"
                placeholder={props.textinput_telegram}
                disabled
                className="profile1-textinput1 input"
              />
              <button type="button" className="profile1-button1 button">
                <svg viewBox="0 0 1024 1024" className="profile1-icon4 button">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="profile1-container-next">
            <Link href="/onboarding_2_4">
              <a className="profile1-link button">{props.btnSave}</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .profile1-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .profile1-heading {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .profile1-container-userprofile {
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
          .profile1-container-address {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .profile1-text {
            font-size: 32px;
            padding-right: 0px;
          }
          .profile1-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .profile1-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .profile1-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .profile1-input {
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-xxlarge);
            font-size: 16px;
            text-align: right;
            transition: 0.3s;
            border-width: 0px;
            background-color: transparent;
          }
          .profile1-input:disabled {
            transition-property: revert;
          }
          .profile1-button {
            display: flex;
            padding-top: 0px;
            border-width: 0px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .profile1-icon {
            width: 24px;
            height: 24px;
            display: flex;
            border-width: 0px;
          }
          .profile1-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .profile1-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .profile1-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .profile1-textinput {
            width: var(--dl-size-size-xxlarge);
            text-align: right;
            border-width: 0px;
            background-color: transparent;
          }
          .profile1-button1 {
            display: flex;
            padding-top: 0px;
            border-width: 0px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .profile1-icon2 {
            width: 24px;
            height: 24px;
            display: flex;
            border-width: 0px;
          }
          .profile1-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .profile1-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .profile1-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .profile1-textinput1 {
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-xxlarge);
            text-align: right;
            border-width: 0px;
            background-color: transparent;
          }
          .profile1-button1 {
            display: flex;
            padding-top: 0px;
            border-width: 0px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .profile1-icon4 {
            width: 24px;
            height: 24px;
            display: flex;
            border-width: 0px;
          }
          .profile1-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .profile1-link {
            color: #ffffff;
            display: none;
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
          .profile1-root-class-name {
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

Profile1.defaultProps = {
  textName11: 'Name:',
  textTelegram: 'E-Mail:',
  textinput_name: '',
  textinput_email: 'email',
  btnSave: 'Save',
  texttelegram: 'Telegram:',
  textinput_telegram: 'telegram',
  textName111: 'txtName',
  textinput_name1: 'name',
  rootClassName: '',
  txt_editProfile: 'User Profile',
  txt_address: '0x..',
  button: 'Button',
  textinput_name11: 'name',
  textinput_name12: 'name',
  textinput_name111: 'name',
}

Profile1.propTypes = {
  textName11: PropTypes.string,
  textTelegram: PropTypes.string,
  textinput_name: PropTypes.string,
  textinput_email: PropTypes.string,
  btnSave: PropTypes.string,
  texttelegram: PropTypes.string,
  textinput_telegram: PropTypes.string,
  textName111: PropTypes.string,
  textinput_name1: PropTypes.string,
  rootClassName: PropTypes.string,
  txt_editProfile: PropTypes.string,
  txt_address: PropTypes.string,
  button: PropTypes.string,
  textinput_name11: PropTypes.string,
  textinput_name12: PropTypes.string,
  textinput_name111: PropTypes.string,
}

export default Profile1

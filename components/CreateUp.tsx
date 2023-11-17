import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { createProfile, getProfile } from '../config/apis';
import { Alert, Snackbar } from '@mui/material';

interface CreateUPProps {
  rootClassName?: string;
  account?: string;
  setProfileStatus?: React.Dispatch<React.SetStateAction<number>>;
}

const CreateUP: React.FC<CreateUPProps> = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [sOpen, setSOpen] = useState(false);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleTelegram = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelegram(event.target.value);
  }

  const handleSClose = () => {
    setSOpen(false);
  }


  const handleCreate = async () => {
    if (name?.trim().length === 0) {
      setMessage("Wrong Name");
      setSOpen(true);
    } else if (email?.trim().length === 0) {
      setMessage("Wrong Email");
      setSOpen(true);
    } else if (telegram?.trim().length === 0) {
      setMessage("Wrong Telegram ID");
      setSOpen(true);
    } else {
      if (props?.account) {
        const userinfo = await createProfile(props?.account, name, email, telegram);
        if (userinfo) {
          const signature = localStorage.getItem("signature");
          if (signature) {
            const profileRes = await getProfile(props?.account, signature);
            if (profileRes.result) {
              localStorage.setItem("user_id", profileRes.result.profile._id);
              localStorage.setItem("email", profileRes.result.profile.email);
              localStorage.setItem("name", profileRes.result.profile.name);
              localStorage.setItem("telegram", profileRes.result.profile.telegram);
              props.setProfileStatus ? props.setProfileStatus(1) : "";
            } else {
              props.setProfileStatus ? props.setProfileStatus(0) : "";
            }
          }
        }
      }
    }
  }

  return (
    <>
      <div className={`create-up-container ${props.rootClassName} `}>
        <h1 className="create-up-text">Create User Profile: </h1>
        <div className="create-up-container-userprofile">
          <div className="create-up-container-name">
            <span className="create-up-text1">Name: </span>
            <input
              type="text"
              value={name}
              onChange={handleName}
              className="create-up-textinput input"
            />
          </div>
          <div className="create-up-container-e-mail">
            <span className="create-up-text2">E-Mail: </span>
            <input
              type="text"
              value={email}
              onChange={handleEmail}
              className="create-up-textinput1 input"
            />
          </div>
          <div className="create-up-container-telegram">
            <span className="create-up-text3">Telegram: </span>
            <input
              type="text"
              value={telegram}
              onChange={handleTelegram}
              className="create-up-textinput2 input"
            />
          </div>
          <div className="create-up-container-next">
            <button className="create-up-link button" onClick={handleCreate}>Create</button>
          </div>
        </div>
      </div>
      <Snackbar open={sOpen} autoHideDuration={3000} onClose={handleSClose}>
        <Alert onClose={handleSClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
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
  rootClassName: '',
  account: ''
}

CreateUP.propTypes = {
  rootClassName: PropTypes.string,
  account: PropTypes.string
}

export default CreateUP

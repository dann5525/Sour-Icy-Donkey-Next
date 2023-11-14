import React, { useEffect, useState } from 'react'
import { editProfile } from '../config/apis';
import { Alert, Snackbar } from '@mui/material';

interface ProfileContentProps {
    account?: string;
}

const ProfileContent: React.FC<ProfileContentProps> = (props) => {
    const [uname, setUname] = useState("");
    const [mail, setMail] = useState("");
    const [tid, setTid] = useState("");
    const [message, setMessage] = useState("");
    const [sopen, setSopen] = useState(false);

    const handleSClose = () => {
        setSopen(false);
    }

    const saveProfile = async () => {
        const signature = localStorage.getItem("signature");
        if (props?.account && signature) {
            try {
                const res = await editProfile(props?.account, signature, uname, mail, tid);
                localStorage.setItem("name", uname);
                localStorage.setItem("email", mail);
                localStorage.setItem("telegram", tid);
                setMessage(res?.result);
                setSopen(true);
            } catch (err: any) {
                setMessage(err.message);
            }
        }
    }

    useEffect(() => {
        const c_uname = localStorage.getItem("name");
        const c_mail = localStorage.getItem("email");
        const c_tid = localStorage.getItem("telegram");
        if (c_uname && c_mail && c_tid) {
            setUname(c_uname);
            setMail(c_mail);
            setTid(c_tid);
        }
    }, []);
    return (
        <>
            <div className={`profile1-container profile1-root-class-name`}>
                <h1 className="profile1-heading">User Profile</h1>
                <div className="profile1-container-userprofile">
                    <div className="profile1-container-address">
                        <span className="profile1-text">{props.account?.substring(0, 10)}...</span>
                    </div>
                    <div className="profile1-container-name">
                        <span className="profile1-text1">Name: </span>
                        <div className="profile1-container1">
                            <input
                                type="text"
                                placeholder="name"
                                onChange={(e) => setUname(e.target.value)}
                                value={uname}
                                className="profile1-input input"
                            />
                        </div>
                    </div>
                    <div className="profile1-container-e-mail">
                        <span className="profile1-text2">Email: </span>
                        <div className="profile1-container2">
                            <input
                                type="text"
                                placeholder="example@mail.com"
                                onChange={(e) => setMail(e.target.value)}
                                value={mail}
                                className="profile1-textinput input"
                            />
                        </div>
                    </div>
                    <div className="profile1-container-telegram">
                        <span className="profile1-text3">Telegram: </span>
                        <div className="profile1-container3">
                            <input
                                type="text"
                                placeholder="@+id"
                                onChange={(e) => setTid(e.target.value)}
                                value={tid}
                                className="profile1-textinput1 input"
                            />
                        </div>
                    </div>
                    <div className="profile1-container-next">
                        <a href='javascript:void(0);' className="profile1-link button" onClick={saveProfile}>Save</a>
                    </div>
                </div>
            </div>
            <Snackbar open={sopen} autoHideDuration={3000} onClose={handleSClose}>
                <Alert onClose={handleSClose} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
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
            border-width: 0.5px;
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
            border-width: 1px;
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
            border-width: 1px;
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
            font-size: 32px;
            margin-top: 10px;
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

export default ProfileContent
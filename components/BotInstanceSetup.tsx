import React, { useEffect, useState } from 'react'

import { strategies, settings1, settings2, settings3, settings4, settings5 } from '../config/constants';
import { editInstance } from '../config/apis';
import { Alert, Snackbar, Stack, Switch, TextField, Typography, styled } from '@mui/material';

interface BotInstanceSetupProps {
  account?: string;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const BotInstanceSetUp: React.FC<BotInstanceSetupProps> = (props) => {
  const [strategy, setStrategy] = useState("");
  const [setting1, setSetting1] = useState("");
  const [setting2, setSetting2] = useState("");
  const [setting3, setSetting3] = useState("");
  const [setting4, setSetting4] = useState("");
  const [setting5, setSetting5] = useState(0);
  const [message, setMessage] = useState("");
  const [sopen, setSopen] = useState(false);

  const handleSetting1 = () => {
    if (setting1 === "y")
      setSetting1("n");
    else
      setSetting1("y");
  }

  const handleSetting2 = () => {
    if (setting2 === "y")
      setSetting2("n");
    else
      setSetting2("y");
  }

  const handleSClose = () => {
    setSopen(false);
  }

  const saveInstance = async () => {
    const instance_id = localStorage.getItem("instance_id");
    const signature = localStorage.getItem("signature");
    if (props.account && instance_id && signature) {
      try {
        const res = await editInstance(props?.account, instance_id, signature, strategy, setting1, setting2, setting3, setting4, setting5.toString());
        localStorage.setItem("strategy", strategy);
        localStorage.setItem("setting1", setting1);
        localStorage.setItem("setting2", setting2);
        localStorage.setItem("setting3", setting3);
        localStorage.setItem("setting4", setting4);
        localStorage.setItem("setting5", setting5.toString());
        setMessage(res?.result);
        setSopen(true);
      } catch (err: any) {
        setMessage(err.message);
      }
    }
  }

  useEffect(() => {
    const c_strategy = localStorage.getItem("strategy");
    const c_setting1 = localStorage.getItem("setting1");
    const c_setting2 = localStorage.getItem("setting2");
    const c_setting3 = localStorage.getItem("setting3");
    const c_setting4 = localStorage.getItem("setting4");
    const c_setting5 = localStorage.getItem("setting5");
    setStrategy(c_strategy ? c_strategy : "");
    setSetting1(c_setting1 ? c_setting1 : "");
    setSetting2(c_setting2 ? c_setting2 : "");
    setSetting3(c_setting3 ? c_setting3 : "");
    setSetting4(c_setting4 ? c_setting4 : "");
    setSetting5(c_setting5 ? Number(c_setting5) : 0);
  }, []);


  return (
    <>
      <div className={`bot-instance-set-up-container`}>
        <div className="bot-instance-set-up-container1">
          <div className="bot-instance-set-up-container-name">
            <span className="bot-instance-set-up-text">Strategy</span>
            <select className="bot-instance-set-up-select-exchange" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStrategy(e.target.value)}>
              {strategies.map((item) => (
                (item.value === strategy) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="bot-instance-set-up-container-name1">
            <span className="bot-instance-set-up-text1">
              Setting 1
            </span>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ width: "192px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography>No</Typography>
              {setting1 === "y" && <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onChange={handleSetting1} />}
              {setting1 === "n" && <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onChange={handleSetting1} />}
              <Typography>Yes</Typography>
            </Stack>
          </div>
          <div className="bot-instance-set-up-container-name2">
            <span className="bot-instance-set-up-text2">
              Setting 2
            </span>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ width: "192px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography>No</Typography>
              {setting2 === "y" && <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onChange={handleSetting2} />}
              {setting2 === "n" && <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onChange={handleSetting2} />}
              <Typography>Yes</Typography>
            </Stack>
          </div>
          <div className="bot-instance-set-up-container-name3">
            <span className="bot-instance-set-up-text3">
              Setting 3
            </span>
            <select className="bot-instance-set-up-select-exchange3" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSetting3(e.target.value)}>
              {settings3.map((item) => (
                (item.value === setting3) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="bot-instance-set-up-container-name4">
            <span className="bot-instance-set-up-text4">
              Setting 4
            </span>
            <select className="bot-instance-set-up-select-exchange4" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSetting4(e.target.value)}>
              {settings4.map((item) => (
                (item.value === setting4) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="bot-instance-set-up-container-name5">
            <span className="bot-instance-set-up-text5">
              Setting 5
            </span>
            <TextField type='number'
              sx={{ width: "192px", height: "36px" }}
              inputProps={{ style: { height: "36px", padding: "4px 10px" } }}
              value={setting5}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSetting5(Number(event.target.value))}>
            </TextField>
          </div>
        </div>
        <div className="bot-instance-set-up-container-next">
          <a href='javascript:void(0);' className="bot-instance-set-up-link button" onClick={saveInstance}>Save</a>
        </div>
      </div>
      <Snackbar open={sopen} autoHideDuration={3000} onClose={handleSClose}>
        <Alert onClose={handleSClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
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

export default BotInstanceSetUp

import React, { useEffect, useState } from 'react'

import { strategies, settings1, settings2, settings3, settings4, settings5 } from '../config/constants';
import { editInstance } from '../config/apis';

interface BotInstanceSetupProps {
  account?: string;
}

const BotInstanceSetUp: React.FC<BotInstanceSetupProps> = (props) => {
  const [strategy, setStrategy] = useState("");
  const [setting1, setSetting1] = useState("");
  const [setting2, setSetting2] = useState("");
  const [setting3, setSetting3] = useState("");
  const [setting4, setSetting4] = useState("");
  const [setting5, setSetting5] = useState("");

  const saveInstance = async () => {
    const instance_id = localStorage.getItem("instance_id");
    const signature = localStorage.getItem("signature");
    if (props.account && instance_id && signature) {
      debugger;
      const result = await editInstance(props?.account, instance_id, signature, strategy, setting1, setting2, setting3, setting4, setting5);
      console.log(result);
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
    setSetting5(c_setting5 ? c_setting5 : "");
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
            <select className="bot-instance-set-up-select-exchange1" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSetting1(e.target.value)}>
              {settings1.map((item) => (
                (item.value === setting1) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="bot-instance-set-up-container-name2">
            <span className="bot-instance-set-up-text2">
              Setting 2
            </span>
            <select className="bot-instance-set-up-select-exchange2"onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSetting2(e.target.value)}>
              {settings2.map((item) => (
                (item.value === setting2) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
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
            <select className="bot-instance-set-up-select-exchange5" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSetting5(e.target.value)}>
              {settings5.map((item) => (
                (item.value === setting5) ? <option value={item.value} selected>{item.name}</option> : <option value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="bot-instance-set-up-container-next">
          <a href='javascript:void(0);' className="bot-instance-set-up-link button" onClick={saveInstance}>Save</a>
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

export default BotInstanceSetUp

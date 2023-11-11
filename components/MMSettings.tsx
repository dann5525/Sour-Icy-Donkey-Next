import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { dexs, pairs, strategies } from '../config/constants'

interface MMSettingsProps {
  rootClassName?: string;
  account?: string;
  setProfileStatus?: React.Dispatch<React.SetStateAction<any>>;
}

const MMSettings: React.FC<MMSettingsProps> = (props) => {

  const [dex, setDex] = useState(dexs[0].address);
  const [pair, setPair] = useState(pairs[0].value);
  const [strategy, setStrategy] = useState(strategies[0].value);

  const handleDex = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDex(event.target.value);
  }

  const handlePair = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPair(event.target.value);
  }

  const handleStrategy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStrategy(event.target.value);
  }

  const handleNext = () => {
    localStorage.setItem('dex', dex);
    localStorage.setItem('pair', pair);
    localStorage.setItem('strategy', strategy);
    if(props.setProfileStatus)
      props.setProfileStatus(2);
  }


  return (
    <>
      <div className={`mm-settigns-container ${props.rootClassName} `}>
        <h1 className="mm-settigns-text">Market Maker Settings: </h1>
        <div className="mm-settigns-container-userprofile">
          <div className="mm-settigns-container-name">
            <span className="mm-settigns-text1">Exchange: </span>
            <select className="mm-settigns-select-exchange" onChange={handleDex}>
              {
                dexs.map(item => {
                  return (
                    <option value={item.address} key={item.index}>
                      {item.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="mm-settigns-container-e-mail">
            <span className="mm-settigns-text2">Trading Pair: </span>
            <select className="mm-settigns-select-trading-pair" onChange={handlePair}>
              {
                pairs.map(item => {
                  return (
                    <option value={item.value} key={item.index}>
                      {item.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="mm-settigns-container-telegram">
            <span className="mm-settigns-text3">Base Strategy: </span>
            <select className="mm-settigns-select-strategy" onChange={handleStrategy}>
              {
                strategies.map(item => {
                  return (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="mm-settigns-container-next">
          <a href='javascript:void(0);' className="mm-settigns-link button" onClick={handleNext}>Next</a>
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

MMSettings.defaultProps = {
  rootClassName: '',
  account: ''
}

MMSettings.propTypes = {
  rootClassName: PropTypes.string,
  account: PropTypes.string
}

export default MMSettings

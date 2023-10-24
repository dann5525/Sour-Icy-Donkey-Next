import React, { useState } from 'react'

import PropTypes from 'prop-types'

const ProgressBar = (props) => {
  const [checked4, setChecked4] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked2, setChecked2] = useState(false)
  return (
    <>
      <div className={`progress-bar-container ${props.rootClassName} `}>
        <div className="progress-bar-container01">
          <div className="progress-bar-progress1">
            <div className="progress-bar-container02">
              {checked1 && <div className="progress-bar-container03"></div>}
            </div>
          </div>
          <div className="progress-bar-container04"></div>
          <div className="progress-bar-progress2">
            <div className="progress-bar-container05">
              {checked2 && <div className="progress-bar-container06"></div>}
            </div>
          </div>
          <div className="progress-bar-container07"></div>
          <div className="progress-bar-progress3">
            <div className="progress-bar-container08">
              {checked3 && <div className="progress-bar-container09"></div>}
            </div>
          </div>
          <div className="progress-bar-container10"></div>
          <div className="progress-bar-progress4">
            <div className="progress-bar-container11">
              {checked4 && <div className="progress-bar-container12"></div>}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .progress-bar-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .progress-bar-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
          }
          .progress-bar-progress1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container02 {
            flex: 0 0 auto;
            width: 40px;
            height: 40px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .progress-bar-container03 {
            new: 0;
            flex: 0 0 auto;
            width: 30px;
            height: 30px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container04 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xlarge);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 2px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
          }
          .progress-bar-progress2 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container05 {
            flex: 0 0 auto;
            width: 40px;
            height: 40px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .progress-bar-container06 {
            new: 0;
            flex: 0 0 auto;
            width: 30px;
            height: 30px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container07 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xlarge);
            height: 2px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
          }
          .progress-bar-progress3 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container08 {
            flex: 0 0 auto;
            width: 40px;
            height: 40px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .progress-bar-container09 {
            new: 0;
            flex: 0 0 auto;
            width: 30px;
            height: 30px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container10 {
            flex: 0 0 auto;
            width: var(--dl-size-size-xlarge);
            height: 2px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 2px;
          }
          .progress-bar-progress4 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-container11 {
            flex: 0 0 auto;
            width: 40px;
            height: 40px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .progress-bar-container12 {
            new: 0;
            flex: 0 0 auto;
            width: 30px;
            height: 30px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .progress-bar-root-class-name {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .progress-bar-root-class-name1 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .progress-bar-root-class-name2 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .progress-bar-root-class-name3 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
        `}
      </style>
    </>
  )
}

ProgressBar.defaultProps = {
  rootClassName: '',
}

ProgressBar.propTypes = {
  rootClassName: PropTypes.string,
}

export default ProgressBar

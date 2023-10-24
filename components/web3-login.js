import React from 'react'

import PropTypes from 'prop-types'

const Web3Login = (props) => {
  return (
    <>
      <div className={`web3-login-container ${props.rootClassName} `}>
        <button type="button" className="web3-login-button button">
          <span>
            <span>{props.text}</span>
            <br></br>
          </span>
        </button>
        <div className="web3-login-container1">
          <input type="radio" name="radio" className="web3-login-radiobutton" />
          <span className="web3-login-text3">{props.text1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .web3-login-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .web3-login-button {
            width: 274px;
            background-color: #fffefe;
          }
          .web3-login-container1 {
            flex: 0 0 auto;
            width: 274px;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .web3-login-radiobutton {
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .web3-login-text3 {
            font-size: 12px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

Web3Login.defaultProps = {
  text1: 'By Siging in you are agreeing to our Terms and Conditons.\n',
  rootClassName: '',
  text: 'Web3 Login',
}

Web3Login.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Web3Login

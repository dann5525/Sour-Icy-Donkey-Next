import React from 'react'
import Head from 'next/head'

import Web3Login from '../components/web3-login'

const Login = (props) => {
  return (
    <>
      <div className="login-container">
        <Head>
          <title>Sour Icy Donkey</title>
          <meta property="og:title" content="Sour Icy Donkey" />
        </Head>
        <div className="login-container1">
          <div className="login-container2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1695632053082-8ee57597f6ad?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8YWxsfDY4fHx8fHx8Mnx8MTY5NjE2MjM5M3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=800"
              className="login-image"
            />
          </div>
          <div className="login-container3">
            <Web3Login rootClassName="web3-login-root-class-name"></Web3Login>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .login-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .login-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .login-image {
            width: 100%;
            object-fit: cover;
          }
          .login-container3 {
            flex: 0 0 auto;
            width: 50%;
            height: 803px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Login

import React from 'react'
import Head from 'next/head'

import Welcome from '../components/welcome'
import ProgressBar from '../components/progress-bar'
import TransferFunds from '../components/transfer-funds'

const Onboarding44 = (props) => {
  return (
    <>
      <div className="onboarding44-container">
        <Head>
          <title>Onboarding44 - Sour Icy Donkey</title>
          <meta property="og:title" content="Onboarding44 - Sour Icy Donkey" />
        </Head>
        <Welcome rootClassName="welcome-root-class-name3"></Welcome>
        <ProgressBar rootClassName="progress-bar-root-class-name3"></ProgressBar>
        <TransferFunds rootClassName="transfer-funds-root-class-name"></TransferFunds>
      </div>
      <style jsx>
        {`
          .onboarding44-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #d9d9d9;
          }
        `}
      </style>
    </>
  )
}

export default Onboarding44

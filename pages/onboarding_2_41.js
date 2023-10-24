import React from 'react'
import Head from 'next/head'

import Welcome from '../components/welcome'
import ProgressBar from '../components/progress-bar'
import DeployContracts from '../components/deploy-contracts'

const Onboarding34 = (props) => {
  return (
    <>
      <div className="onboarding34-container">
        <Head>
          <title>Onboarding34 - Sour Icy Donkey</title>
          <meta property="og:title" content="Onboarding34 - Sour Icy Donkey" />
        </Head>
        <Welcome rootClassName="welcome-root-class-name2"></Welcome>
        <ProgressBar rootClassName="progress-bar-root-class-name2"></ProgressBar>
        <DeployContracts rootClassName="deploy-contracts-root-class-name1"></DeployContracts>
      </div>
      <style jsx>
        {`
          .onboarding34-container {
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

export default Onboarding34

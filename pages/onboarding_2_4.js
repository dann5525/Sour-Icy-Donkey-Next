import React from 'react'
import Head from 'next/head'

import Welcome from '../components/welcome'
import ProgressBar from '../components/progress-bar'
import MMSettigns from '../components/mm-settigns'

const Onboarding24 = (props) => {
  return (
    <>
      <div className="onboarding24-container">
        <Head>
          <title>Onboarding24 - Sour Icy Donkey</title>
          <meta property="og:title" content="Onboarding24 - Sour Icy Donkey" />
        </Head>
        <Welcome rootClassName="welcome-root-class-name1"></Welcome>
        <ProgressBar rootClassName="progress-bar-root-class-name1"></ProgressBar>
        <MMSettigns rootClassName="mm-settigns-root-class-name2"></MMSettigns>
      </div>
      <style jsx>
        {`
          .onboarding24-container {
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

export default Onboarding24

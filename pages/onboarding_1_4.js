import React from 'react'
import Head from 'next/head'

import Welcome from '../components/welcome'
import ProgressBar from '../components/progress-bar'
import CreateUP from '../components/create-up'

const Onboarding14 = (props) => {
  return (
    <>
      <div className="onboarding14-container">
        <Head>
          <title>Onboarding14 - Sour Icy Donkey</title>
          <meta property="og:title" content="Onboarding14 - Sour Icy Donkey" />
        </Head>
        <Welcome rootClassName="welcome-root-class-name"></Welcome>
        <ProgressBar rootClassName="progress-bar-root-class-name"></ProgressBar>
        <CreateUP rootClassName="create-up-root-class-name"></CreateUP>
      </div>
      <style jsx>
        {`
          .onboarding14-container {
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

export default Onboarding14

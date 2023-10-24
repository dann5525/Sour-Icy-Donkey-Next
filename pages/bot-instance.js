import React from 'react'
import Head from 'next/head'

import Menue from '../components/menue'
import BotInstance1 from '../components/bot-instance1'

const BotInstance = (props) => {
  return (
    <>
      <div className="bot-instance-container">
        <Head>
          <title>BotInstance - Sour Icy Donkey</title>
          <meta property="og:title" content="BotInstance - Sour Icy Donkey" />
        </Head>
        <Menue rootClassName="menue-root-class-name"></Menue>
        <BotInstance1 rootClassName="bot-instance1-root-class-name"></BotInstance1>
      </div>
      <style jsx>
        {`
          .bot-instance-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default BotInstance

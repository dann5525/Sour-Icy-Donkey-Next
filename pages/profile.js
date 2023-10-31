import React from 'react'
import Head from 'next/head'

import Menue from '../components/menue'
import Profile1 from '../components/profile1'

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
        <Head>
          <title>Profile - Sour Icy Donkey</title>
          <meta property="og:title" content="Profile - Sour Icy Donkey" />
        </Head>
        <Menue rootClassName="menue-root-class-name1"></Menue>
        <Profile1 rootClassName="profile1-root-class-name"></Profile1>
      </div>
      <style jsx>
        {`
          .profile-container {
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

export default Profile

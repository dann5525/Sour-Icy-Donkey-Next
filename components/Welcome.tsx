import React from 'react'

import PropTypes from 'prop-types'

interface WelcomeProps {
  rootClassName?: string;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <>
      <div className={`welcome-container ${props.rootClassName} `}>
        <h1 className="welcome-text">Welcome to Wonderlamb, your Market Making Service</h1>
      </div>
      <style jsx>
        {`
          .welcome-container {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-text {
            width: 815px;
            font-size: 48px;
            text-align: center;
            margin-bottom: 0px;
          }
        `}
      </style>
    </>
  )
}

Welcome.defaultProps = {
  rootClassName: '',
}

Welcome.propTypes = {
  rootClassName: PropTypes.string,
}

export default Welcome

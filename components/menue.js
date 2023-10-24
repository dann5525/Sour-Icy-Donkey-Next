import React from 'react'

import PropTypes from 'prop-types'

const Menue = (props) => {
  return (
    <>
      <div className={`menue-container ${props.rootClassName} `}>
        <div className="menue-container1">
          <button type="button" className="menue-btn-dashboard button">
            {props.btnMenuDashboard}
          </button>
          <button type="button" className="menue-btn-services button">
            {props.btnMenuServices}
          </button>
          <button type="button" className="menue-btn-services1 button">
            {props.btnMenuBilling}
          </button>
        </div>
        <div className="menue-container2">
          <button type="button" className="menue-btn-profile button">
            {props.btnProfile}
          </button>
          <button type="button" className="menue-btn-web3 button">
            {props.btnWeb3}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .menue-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-100);
          }
          .menue-container1 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .menue-btn-dashboard {
            color: var(--dl-color-gray-white);
            width: auto;
            height: var(--dl-size-size-small);
            font-size: 32px;
            border-width: 0px;
            background-color: transparent;
          }
          .menue-btn-services {
            color: var(--dl-color-gray-white);
            width: auto;
            height: var(--dl-size-size-small);
            font-size: 32px;
            border-width: 0px;
            background-color: transparent;
          }
          .menue-btn-services1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: var(--dl-size-size-small);
            font-size: 32px;
            border-width: 0px;
            background-color: transparent;
          }
          .menue-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
          }
          .menue-btn-profile {
            color: var(--dl-color-gray-white);
            width: auto;
            height: var(--dl-size-size-small);
            font-size: 32px;
            border-width: 0px;
            background-color: transparent;
          }
          .menue-btn-web3 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: var(--dl-size-size-small);
            font-size: 32px;
            border-width: 0px;
            background-color: transparent;
          }
          .menue-root-class-name {
            margin-bottom: var(--dl-space-space-fourunits);
          }
        `}
      </style>
    </>
  )
}

Menue.defaultProps = {
  btnProfile: 'Profile',
  rootClassName: '',
  btnMenuBilling: 'Billing',
  btnMenuDashboard: 'Dashboard',
  btnWeb3: '0x84f87..',
  btnMenuServices: 'Services',
}

Menue.propTypes = {
  btnProfile: PropTypes.string,
  rootClassName: PropTypes.string,
  btnMenuBilling: PropTypes.string,
  btnMenuDashboard: PropTypes.string,
  btnWeb3: PropTypes.string,
  btnMenuServices: PropTypes.string,
}

export default Menue

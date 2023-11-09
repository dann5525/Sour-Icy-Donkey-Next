import React from 'react'

interface MenuProps {
  account?: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  return (
    <>
      <div className={`menue-container menue-root-class-name`}>
        <div className="menue-container1">
          <button type="button" className="menue-btn-dashboard button">
            Dashboard
          </button>
          <button type="button" className="menue-btn-services button">
            Services
          </button>
          <button type="button" className="menue-btn-services1 button">
            Billing
          </button>
        </div>
        <div className="menue-container2">
          <button type="button" className="menue-btn-profile button">
            Profile
          </button>
          <button type="button" className="menue-btn-web3 button">
            {props.account?props.account.substr(0, 10)+"...":"..."}
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

export default Menu

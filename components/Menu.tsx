import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material';
import Link from 'next/link';

interface MenuProps {
  account?: string;
  logout?: React.MouseEventHandler<HTMLButtonElement>;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: "flex",
  justifyContent: "center",
  p: 4,
};

const Menu: React.FC<MenuProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleMOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className={`menue-container menue-root-class-name`}>
        <div className="menue-container1">
          <Link href="/">
            <button type="button" className="menue-btn-dashboard button">
              Dashboard
            </button>
          </Link>
          <button type="button" className="menue-btn-services button">
            Services
          </button>
          <button type="button" className="menue-btn-services1 button">
            Billing
          </button>
        </div>
        <div className="menue-container2">
          <Link href="/profile">
            <button type="button" className="menue-btn-profile button" style={{ cursor: "pointer" }}>
              Profile
            </button>
          </Link>
          <button type="button" className="menue-btn-web3 button" onClick={handleMOpen}>
            {props.account ? props.account.substr(0, 10) + "..." : "..."}
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal-dialog modal-lg"

        >
          <Box sx={style}>
            {props?.logout && <Button type='button' size='large' variant='contained' color='error' onClick={props.logout} sx={{ width: "80%" }}>Logout</Button>}
          </Box>
        </Modal>
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

import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => (
  <div
    onClick={onClose}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.75)',
      zIndex: 100
    }}
  />
);

const ModalOverlay = ({ children }) => (
  <div
    style={{
      position: 'fixed',
      top: '10vh',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 101,
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      width: '90%',
      maxWidth: '40rem',
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
    }}
  >
    {children}
  </div>
);

const CartModal = ({ onClose, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
    </>
  );
};

export default CartModal;

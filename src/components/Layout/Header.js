import React from 'react';
import { Button } from 'react-bootstrap';

const Header = ({ onShowCart }) => {
  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
      <h1>Welcome to Vishal Food Stall</h1>
      <Button variant="light" onClick={onShowCart}>
        Cart
      </Button>
    </header>
  );
};

export default Header;

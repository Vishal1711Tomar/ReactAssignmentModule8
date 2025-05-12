import logo from './logo.svg';
import './App.css';
import React, { useState, useContext } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';
import CartContext from './store/CartContext';

function AppWrapper() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

function AppContent() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartCtx = useContext(CartContext);

  return (
    <>
      {cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
      <Header onShowCart={() => setCartIsShown(true)} />
      <main>
        <Meals onAddToCart={cartCtx.addItem} />
      </main>
    </>
  );
}

export default AppWrapper;


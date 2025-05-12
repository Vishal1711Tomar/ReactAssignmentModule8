import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartModal from './CartModal';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <CartModal onClose={onClose}>
      <ul>
        {cartCtx.items.map(item => (
          <li key={item.id} className="d-flex justify-content-between my-2">
            <div>
              <h5>{item.name}</h5>
              <div>Quantity: {item.amount}</div>
              <div>Price: ₹{item.price}</div>
              <div>Total: ₹{item.amount*item.price}</div>
            </div>
            <div style={styles.counter}>
  <button style={styles.button} onClick={() => cartCtx.removeItem(item.id)}>-</button>
  <span style={styles.amount}>{item.amount}</span>
  <button style={styles.button} onClick={() => cartCtx.addItem({ ...item, amount: 1 })}>+</button>
</div>

          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between mt-3">
        <span>Final Amount:</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className="text-end mt-3">
        <button onClick={onClose} className="btn btn-secondary">Close</button>
        {hasItems && <button className="btn btn-primary ms-2">Order</button>}
      </div>
    </CartModal>
  );
};
const styles = {
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '0.3rem 0.7rem',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: '1rem',
    minWidth: '20px',
    textAlign: 'center',
  },
};


export default Cart;

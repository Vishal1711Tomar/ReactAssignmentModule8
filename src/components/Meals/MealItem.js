import React, { useRef, useState } from 'react';

const MealItem = ({ meal, onAddToCart }) => {
  const amountRef = useRef();
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = +amountRef.current.value;
    onAddToCart({ ...meal, amount });
    setMessage('Added to cart!');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <li style={styles.card}>
      <h5 style={styles.name}>{meal.name}</h5>
      <p style={styles.description}>{meal.description}</p>
      <p style={styles.price}>₹{meal.price.toFixed(2)}</p>
      <form onSubmit={submitHandler} style={styles.form}>
        <input
          type="number"
          min="1"
          defaultValue="1"
          ref={amountRef}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
       {message && <p style={styles.message}>{message}</p>}
    </li>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
    maxWidth: '300px',
  },
  name: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
  },
  description: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '0.5rem',
  },
  price: {
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: '0.5rem',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.5rem',
  },
  input: {
    width: '50px',
    padding: '0.25rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MealItem;

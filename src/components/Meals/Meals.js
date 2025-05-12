import React from 'react';
import MealItem from './MealItem';

const dummyMeals = [
  { id: 'm1', name: 'Paneer Butter Masala', description: 'Rich and creamy', price: 220 },
  { id: 'm2', name: 'Chicken Biryani', description: 'Aromatic rice with chicken', price: 250 },
  { id: 'm3', name: 'Masala Dosa', description: 'South Indian crispy dosa', price: 120 },
  { id: 'm4', name: 'Rajma Chawal', description: 'Kidney beans with rice', price: 140 },
  { id: 'm5', name: 'Butter Naan', description: 'Soft naan with butter', price: 40 },
  { id: 'm6', name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: 160 },
  { id: 'm7', name: 'Mutton Rogan Josh', description: 'Kashmiri style mutton curry', price: 320 },
  { id: 'm8', name: 'Tandoori Chicken', description: 'Char-grilled with spices', price: 280 },
  { id: 'm9', name: 'Palak Paneer', description: 'Spinach curry with paneer cubes', price: 200 },
  { id: 'm10', name: 'Gulab Jamun', description: 'Sweet syrupy dessert', price: 80 }
];

const Meals = ({ onAddToCart }) => {
  return (
    <section className="p-4">
      <ul style={styles.grid}>
        {dummyMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </section>
  );
};
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '2rem',
    listStyle: 'none',
    margin: '0 auto',
    maxWidth: '1200px',
  },
};

export default Meals;

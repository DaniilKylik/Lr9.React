import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, setFilter } from './shoppingSlice';
import styles from './ShoppingList.module.css';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector(state => state.shopping);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: 'New Item' };
    console.log('Before adding item:', items);
    dispatch(addItem(newItem));
    console.log('After adding item:', items);
  };

  const handleRemoveItem = id => {
    console.log('Before removing item:', items);
    dispatch(removeItem(id));
    console.log('After removing item:', items);
  };

  const handleSetFilter = (filterValue) => {
    console.log('Setting filter:', filterValue);
    dispatch(setFilter(filterValue));
  };

  return (
    <div className={styles.shoppingList}>
      <button onClick={handleAddItem}>Add Item</button>
      <input 
        type="text" 
        onChange={(e) => handleSetFilter(e.target.value)} 
        placeholder="Filter items" 
      />
      <ul>
        {items
          .filter(item => item.name.includes(filter))
          .map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
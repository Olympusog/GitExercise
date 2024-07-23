import React, { useContext } from 'react';
import { MyContext } from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const { count, increment, decrement } = useContext(MyContext);

  const styles = {
    container: {
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    heading: {
      fontSize: '1.5rem',
      color: '#333',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#666',
    },
    button: {
      padding: '8px 16px',
      marginRight: '10px',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      outline: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Component A</h2>
      <p style={styles.paragraph}>Count: {count}</p>
      <button style={styles.button} onClick={increment}>Increment</button>
      <button style={styles.button} onClick={decrement}>Decrement</button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;

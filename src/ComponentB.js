import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function ComponentB() {
  const { count } = useContext(MyContext);

  const styles = {
    container: {
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginTop: '10px',
    },
    heading: {
      fontSize: '1.5rem',
      color: '#333',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Component B</h2>
      <p style={styles.paragraph}>Count in Component B: {count}</p>
    </div>
  );
}

export default ComponentB;

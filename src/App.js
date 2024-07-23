import React from 'react';
import { MyContextProvider } from './MyContext';
import ComponentA from './ComponentA';
import './App.css'; 
function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <h1>Context API with State Management</h1>
        <ComponentA />
      </div>
    </MyContextProvider>
  );
}

export default App;

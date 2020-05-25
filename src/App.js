import React from 'react';
import './App.scss';
import Giphy from './Giphy/Giphy';
import CustomQuill from './CustomQuill/CustomQuill';

function App() {
  return (
    <div className="App">
      <div className="App-header">  
      <h3>Task1:</h3>
         <Giphy/>  
         <CustomQuill />
      </div>
    </div>
  );
}

export default App;

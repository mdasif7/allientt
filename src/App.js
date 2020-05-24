import React from 'react';
import './App.scss';
import Giphy from './Giphy/Giphy';
import CustomQuill from './CustomQuill/CustomQuill';

function App() {
  return (
    <div className="App">
      <div className="App-header">  
      Task1:
         <Giphy/>  
         <CustomQuill />
      </div>
    </div>
  );
}

export default App;

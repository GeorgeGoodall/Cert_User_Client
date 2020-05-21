import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestPage from './TestPage/TestPage';

import {getTests} from './tasks';

function App() {

  return (
    <div className="App">
      <TestPage type={"FER"}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css'
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Melon from './melonApp/Melon';
import Todo from './todoApp/Todo';

const App = () => {
  return (
    <div className="App">
      <Melon/>
    </div>
  );
};

export default App;
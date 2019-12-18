import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

const App: React.FC = () => {
  return (
    <div data-testid='App' className='App'>
      <Todo />
    </div>
  );
};

export default App;

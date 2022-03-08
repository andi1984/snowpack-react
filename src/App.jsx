import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={'App'} onClick={() => alert(refName.current)}>
      <img src={logo} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log('useEffect');
    document.title = `You clicked ${count} times`;

    return () => {
      console.log('cleanup');
    };
  }, []);

  setTimeout(() => {
    setCount((c) => c + 1);
    setFlag((f) => !f);
    // React will only re-render once at the end (that's batching!)
  }, 1000);

  return (
    <div className={'App'} onClick={() => alert(refName.current)}>
      <div>
        <h1>{count}</h1>
        <h1>{flag ? 'True' : 'False'}</h1>
      </div>
      <img src={logo} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function App() {
  const [number, setNumber] = useState('Loading...');

  useEffect(() => {
    const handleNewNumber = (newNumber) => {
      console.log('Received new number:', newNumber);
      setNumber(newNumber);
    };

    socket.on('newNumber', handleNewNumber);

    return () => {
      socket.off('newNumber', handleNewNumber);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Random Number Generator</h1>
      <div id="random-number" style={{ fontSize: '3em', color: '#333' }}>{number}</div>
    </div>
  );
}

export default App;

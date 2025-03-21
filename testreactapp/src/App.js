import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hi, welcome to my web page. &#x1F5A4;</h1>
          <button className="users-button" onClick={() => navigate("/Users")}>Users</button>
      </header>
    </div>
  );
}

export default App;

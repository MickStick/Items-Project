import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Routes from  './router'
import {Link, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/favorites'>Favorites</Link>
        </header>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

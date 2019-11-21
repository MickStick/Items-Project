import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Routes from  './router'
import {Link, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <header style={{display: 'block', position: 'relative', height: '60px'}}>
          <Link to='/' style={{marginLeft: '20px', position: 'relative', top: '20px'}}>Home</Link>
          <Link to='/favorites' style={{marginLeft: '20px', position: 'relative', top: '20px'}}>Favorites</Link>
        </header>
        <Routes style={{display: 'block', position: 'relative', top: '50px'}}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

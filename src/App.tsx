
import React from 'react';
import './App.css';
import Login from './paginas/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sobre from './paginas/Sobre/Sobre';
import Home from'./paginas/Home/Home';

function App() {
  return (
    <Router>
     
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/home" element={<Sobre/>}/>
          
        
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;

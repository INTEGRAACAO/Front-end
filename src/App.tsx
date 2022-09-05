
import React from 'react';
import './App.css';
import Login from './paginas/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from'./paginas/Home/Home';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import Contato from './paginas/contato/Contato';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>

      <Navbar />

     
     
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
          
        </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;

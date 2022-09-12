import './App.css';
import CadastroProjeto from './components/projetos/CadastroProjeto/CadastroProjeto';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Contato from './paginas/contato/Contato';
import Footer from './components/static/footer/Footer';
import Home from'./paginas/Home/Home';
import Login from './paginas/Login/Login';
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
          <Route path='/projetos' element={<CadastroProjeto/>}/>
          <Route path='/projetos/:id' element={<CadastroProjeto/>}/>
          
        </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;

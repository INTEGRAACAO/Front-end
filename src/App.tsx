import React from 'react';
import './App.css';
import CadastroProjeto from './components/projetos/CadastroProjeto/CadastroProjeto';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Footer from './components/static/footer/Footer';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListaProjetos from './components/projetos/listaProjetos/ListaProjetos';
import DeletarProjetos from './components/projetos/deletarPostagem/DeletarProjetos';
import { Provider } from 'react-redux';
import store from './store/store';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import Perfil from './paginas/Perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SobreNos from './paginas/sobreNos/sobreNos';
import Valores from './paginas/Valores/valores';



function App() {

  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router>
    
      <div className="main" style={{ minHeight: '100vh' }}>
        <Navbar />
        <Routes> 
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
          <Route path='/formularioProjetos' element={<CadastroProjeto/>}/>
          <Route path='/formularioProjetos/:id' element={<CadastroProjeto/>}/>
          
          <Route path='/deletarProjetos/:id' element={<DeletarProjetos/>}/>
          <Route path='/temas' element={<ListaTema/>}/>
          <Route path='/formularioTemas' element={<CadastroTema/>}/>
          <Route path='/formularioTemas/:id' element={<CadastroTema/>}/>
          <Route path='/deletarTemas/:id' element={<DeletarTema/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/valores' element={<Valores/>}/>
        
          
        </Routes>
      </div>
      <Footer />
    </Router>
    
    </Provider>
  );
}

export default App;

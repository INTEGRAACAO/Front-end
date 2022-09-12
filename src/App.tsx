import './App.css';
import CadastroProjeto from './components/projetos/CadastroProjeto/CadastroProjeto';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Contato from './paginas/contato/Contato';
import Footer from './components/static/footer/Footer';
import Home from'./paginas/Home/Home';
import Login from './paginas/Login/Login';
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListaProjetos from './components/projetos/listaProjetos/ListaProjetos';
import DeletarProjetos from './components/projetos/deletarPostagem/DeletarProjetos';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {

  return (
    <Provider store = {store}>
      <Router>
    
      <Navbar />
      
      <div style={{ minHeight: '100vh' }}>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path='/cadastroUsuario' element={<CadastroUsuario/>}/>
          <Route path='/formularioProjetos' element={<CadastroProjeto/>}/>
          <Route path='/formularioProjetos/:id' element={<CadastroProjeto/>}/>
          <Route path='/projetos' element={<ListaProjetos/>}/>
          <Route path='/deletarProjetos/:id' element={<DeletarProjetos/>}/>
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;

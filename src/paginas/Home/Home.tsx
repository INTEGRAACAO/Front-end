import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../models/User';
import { buscaId } from '../../services/Service'

import ListaProjetos from '../../components/projetos/listaProjetos/ListaProjetos'

import './Home.css';
import { Button } from '@material-ui/core';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  // Pega o ID guardado no Store
  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  const [user, setUser] = useState<User>({
    id: +id,
    nome: '',
    email: '',
    apelido: '',
    senha: '',
    linkFoto: '',
    bio: '',
    tipoAcesso: '',
    dataNascimento: '',
    dataCadastro: ''
  })

  console.log(user)

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  // Métedo para pegar os dados de um Usuário especifico pelo ID
  async function findById(id: string) {
    await buscaId(`/usuario/${id}`, setUser, {
      headers: {
        'Authorization': token
      }

    })
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  function postarMensagem() {
    let mensagem = document.querySelector("#mensagem");
    console.log(mensagem);
  }

  return (
    <div className="home">
      <section className="container-home">

        <img className="titulo" src="https://i.imgur.com/n6O4QAd.png" alt="Home" />

        <section className="msg-block">
          <div className="msg-field">
            <img src={user.linkFoto} alt="" />
            <textarea placeholder="Nos diga o que está pensando!" />
          </div>
          <div className='btn-post'>
            <Link to='/formularioProjetos' className='text-decorator-none'>
              <Button className="marginLeft botaoTema" type="submit" onClick={postarMensagem}>Novo post</Button>
            </Link>
          </div>
        </section>
      </section>
      <section className="projetos-home container-home">

        <ListaProjetos />
      </section>
    </div>
  );
}

export default Home;

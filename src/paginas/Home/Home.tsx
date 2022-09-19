import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import ListaProjetos from '../../components/projetos/listaProjetos/ListaProjetos'

import './Home.css';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
    
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

  function postarMensagem(){
    let mensagem = document.querySelector("#mensagem");
    console.log(mensagem);
  }

    return (
      <div className="home">
        <section className="container-home">
          <h4 className="titulo">Página Inicial</h4>
            <section className="msg-block">
              <div className="msg-field">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sc-fsCyocQAzjSfo2XgFUFXOOhO_TzDUJg&usqp=CAU" alt="" />
                <textarea id="mensagem" placeholder="Nos diga o que está pensando!" />
              </div>
              <div className="btn-acao">
                <div className="icones">
                  <img src="https://i.imgur.com/UlFTFdG.png" alt="" />
                  <img src="https://i.imgur.com/Da17zmp.png" alt="" />
                  <img src="https://i.imgur.com/q5lbYtx.png" alt="" />
                </div>
                <button type="submit" onClick={postarMensagem}>Postar</button>
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

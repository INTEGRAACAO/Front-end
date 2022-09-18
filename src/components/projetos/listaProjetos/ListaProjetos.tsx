import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { busca } from '../../../services/Service'
import Projeto from '../../../models/Projeto';
import './ListaProjetos.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify'
import Projetos from '../projetos/projetos';
import CadastroProjeto from '../CadastroProjeto/CadastroProjeto';
import { Box } from '@mui/material';

function ListaProjetos() {
  const [posts, setPosts] = useState<Projeto[]>([])
  let navigate  = useNavigate();
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

  async function getPost() {
    await busca("/projetos", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  return (
    <>
    <section className="projetos">
      {posts.map(post => (
        <Projetos projeto={post}/> 
      ))}
    </section>
    </>
  )
}

export default ListaProjetos;

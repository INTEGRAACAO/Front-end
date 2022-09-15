import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box } from '@mui/material'
import { busca } from '../../../services/Service'
import Projeto from '../../../models/Projeto';
import './ListaProjetos.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify'

function ListaProjetos() {
  const [posts, setPosts] = useState<Projeto[]>([])
  let navigate  = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
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
      {
        posts.map(post => (
          <Box m={2} className="listaProjeto">
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Projetos
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.nome}
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.apoios}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.linkImagem}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.usuario?.nome}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProjetos/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarProjetos/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
      </section>
    </>
  )
}

export default ListaProjetos;

import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material'
import './DeletarProjetos.css';
import Projetos from '../../../models/Projetos';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarProjetos() {
  let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [post, setPosts] = useState<Projetos>()

    useEffect(() => {
        if(token == "") {
            alert("Você precisa estar logado!")
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/projetos/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
    }

    function sim() {
      navigate('/projetos')
      deleteId(`/projetos/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      alert('Projeto deletado com sucesso!');
    }
  
    function nao() {
      navigate('/posts')
    }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Projeto:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProjetos;
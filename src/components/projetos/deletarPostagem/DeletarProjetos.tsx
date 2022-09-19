import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material'
import './DeletarProjetos.css';
import Projeto from '../../../models/Projeto';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function DeletarProjetos() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
    const [post, setPosts] = useState<Projeto>()

    useEffect(() => {
        if(token == "") {
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
      toast.success('Projeto deletado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
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
              {post?.nome}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft botaoTema" size='large' >
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} variant="contained" size='large' className='botaoDeletar' >
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

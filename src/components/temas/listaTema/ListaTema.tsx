import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box, Grid } from '@mui/material'
import Temas from '../../../models/Tema'
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify';
import ModalTema from '../modalTemas/ModalTema';


function ListaTema() {
  const [temas, setTemas] = useState<Temas[]>([])
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000, // fecha depois de 2s
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false, // pausa o tempo com o mouse
        draggable: false, // não pode mover
        theme: "colored",
        progress: undefined,
      })
      alert('Alerta 1')
      navigate("/login")
    }
  }, [token])

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      <Grid sm={12} className="container">
        <Box className="imagem-topicos">
          <img src="https://i.imgur.com/oDDHh4t.png" alt="topicos" />
        </Box>
        <Box className='modal-tema'>
          <ModalTema />
        </Box>
        <Grid sm={10}>
          <Box className='temas'>
          {temas.map(temas => (
            <Box m={2} display="inline-block" justifyContent="center">
              <Card variant="outlined" className='cardTema'>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Esse tópico se refere à
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {temas.temas}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioTemas/${temas.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft botaoTema" size='small'  >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarTemas/${temas.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' className='botaoDeletar'>
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>
    
        
          ))}
        </Box>
    </Grid>
      </Grid>
    </>

  );
}


export default ListaTema;

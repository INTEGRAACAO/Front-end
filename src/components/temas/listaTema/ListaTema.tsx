import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box } from '@mui/material'
import {Navigate} from 'react-router-dom';
import Temas from '../../../models/Tema'
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
//import { toast } from 'react-toastify';
//

function ListaTema() {
  const [temas, setTemas] = useState<Temas[]>([])
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(()=> {
    if(token == ''){
        // toast.error('Você precisa estar logado', {
        //     position: "top-right",
        //     autoClose: 2000, // fecha depois de 2s
        //     hideProgressBar: false,
        //     closeOnClick: true, 
        //     pauseOnHover: false, // pausa o tempo com o mouse
        //     draggable: false, // não pode mover
        //     theme: "colored", 
        //     progress: undefined,
        // })    
        alert('Alerta 1')
      navigate("/login")
    }
  }, [token])

  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      } 
    })
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])

    return (
      <>
      <section className="temas">
      { 
        temas.map(temas => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {temas.temas}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >
  
                <Link to={`/formularioTemas/${temas.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTemas/${temas.id}`} className="text-decorator-none">
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
    );
  }
  
  
  export default ListaTema;

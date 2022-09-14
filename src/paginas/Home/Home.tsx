import React, { useEffect, useState } from 'react'
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css';
import ModalProjeto from '../../components/projetos/modalProjeto/ModalProjeto';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TabProjetos from '../../components/projetos/tabProjetos/TabProjetos';

function Home() {
    let navigate = useNavigate();
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

    return (
        <>
            <Grid container direction="row" className='containerHome'>
                <Grid className='gridHome' item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant ="h3" gutterBottom className='textHome'  >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom className='textHome'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box className='boxHome'>
                        <Box marginRight={1}>
                        <ModalProjeto />
                        </Box>
                        <Link to= "/projetos" className='textDecoration'>
                        <Button className='botaoHome' variant="outlined">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" className='imgHome'/>
                </Grid>
                <Grid className='gridHome' xs={12} >
                    <TabProjetos/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

import React, { useEffect, useState } from 'react'
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css';
import ModalProjeto from '../../components/projetos/modalProjeto/ModalProjeto';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    useEffect(() => {
        if(token == "") {
            alert("Você precisa estar logado!")
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
                        <Button className='botaoHome' variant="outlined">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" className='imgHome'/>
                </Grid>
                <Grid className='gridHome' xs={12} >
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

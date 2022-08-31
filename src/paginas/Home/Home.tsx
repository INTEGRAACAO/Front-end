import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css';

function Home() {
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
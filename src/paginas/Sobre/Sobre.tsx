import { Box } from '@mui/material'
import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Sobre.css';

function Sobre () {
    return(
    <Grid container direction="row" className='container'>
        <Grid item xs={12} sm={12}>
        <Typography variant ="h3" gutterBottom className='text'  >Sobre nós!</Typography>
        </Grid>
         
    <Grid className='grid' item xs={6}>
   
        <Box paddingX={20} >
        <Typography variant='subtitle1' gutterBottom className='hello, logo'>INTEGRAÇÃO</Typography>
            <Typography variant="h5" gutterBottom className='text'>Unimos ONGs com a comunidade!</Typography>
            <Typography variant="h5" gutterBottom className='about'>Bla bla bla!</Typography>
        </Box>
        <Box className='box'>
            <Box marginRight={1}>
            </Box>
            <Button className='botao' variant="outlined">Ir para Home</Button>
        </Box>
    </Grid>
    <Grid item xs={6} >
        <img src="https://i.imgur.com/HOUJ9am.jpeg" alt="" className='img'/>
    </Grid>
    <Grid className='grid' xs={12} >
    </Grid>
</Grid>

);
}

export default Sobre



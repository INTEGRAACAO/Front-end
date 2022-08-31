import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

import './Login.css'

function Login() {
    return (
        <Grid container className="bg-login">
            <Grid item xs={12} sm={12}>



                <Box className='container'>
                    <Box>
                        <Typography variant='subtitle1' gutterBottom className='hello'>Olá, Bem-Vinde!</Typography>
                        <Typography variant='subtitle1' gutterBottom className='hello'>INTEGRAÇÃO</Typography>
                    </Box>
                    <Box className="card">
                        <Typography className='card-title' variant="h4" align="center">
                            Login
                        </Typography>

                        <form>
                            <Box marginY={4}>
                                <TextField className='form-input' id="standard-basic" type="email" label="Email" required />
                            </Box>

                            <Box marginY={4}>
                                <TextField className='form-input' id="standard-basic" type="password" label="Senha" required />
                            </Box>
                            <Link to='/home' className='text-decoration-none'>
                                <Button className="form-btn" variant="contained" type='submit'>
                                    Acessar
                                </Button>
                            </Link>

                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2} className='criarConta'>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom>Não tem uma conta?</Typography>
                            </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style=
                                {{ fontWeight: 'bold', cursor: "pointer" }}>Cadastre-se</Typography>
                        </Box>

                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Login
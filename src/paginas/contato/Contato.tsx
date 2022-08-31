import React from "react";
import { Box } from '@mui/material';
import { Button, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Contato.css'

function Contato(){
return (
    <Grid container className="bg-contato contato">
        <Grid item xs={12} sm={12}> 
            <Box className='containerContato'>               
                <Box className="card-contato">
                    <Typography className='titleContato' variant="h4" align="center">
                        Contato
                    </Typography>

                    <form className="form">
                        <Box marginY={4}>
                            <TextField className='formContato' id="standard-basic" type="text" label="Nome" required />
                        </Box>
                        <Box marginY={4}>
                            <TextField className='formContato' id="standard-basic" type="email" label="Email" required />
                        </Box>

                        <Box marginY={4} className ='BoxAssunto'>
                        <TextField className='formContato' id="standard-basic" type="text" label="Assunto" required />
                        </Box>
                        <Link to='/home' className='text-decoration-none'>
                            <Button className="form-btn" variant="contained" type='submit'>
                                Enviar
                            </Button>
                        </Link>

                    </form>
                    

                </Box>
            </Box>

        </Grid>
    </Grid>
)
}

export default Contato;
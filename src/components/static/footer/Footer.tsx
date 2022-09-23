import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;
    if (token != "") {
        footerComponent = <Grid container >
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box>
                        <Typography  align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        <a target="_blank" href="https://brasil.generation.org" className='text-decoration-none'>
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>

                    <Box id="nossoTrabalho" >
                        <Typography variant="h5" align="center" gutterBottom className='textos'> Veja nosso trabalho </Typography>
                        <div id="nossoRedes">
                          <a href="https://github.com/INTEGRAACAO/Back-end" target="_blank">
                              <GitHubIcon className='redes' />
                              <Typography variant="subtitle2" gutterBottom className='textos ' align="center">BackEnd</Typography>
                          </a>
                          <a href="https://github.com/INTEGRAACAO/Front-end" target="_blank">
                              <GitHubIcon className='redes' />
                              <Typography variant="subtitle2" gutterBottom className='textos ' align="center">FrontEnd</Typography>
                          </a>
                        </div>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;

import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
        footerComponent = <Grid container justifyContent="space-between" >
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} alignContent="center">
                        
                    </Box>

                    <Box>
                        <Typography  align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        <a target="_blank" href="https://brasil.generation.org" className='text-decoration-none'>
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'> Veja nosso trabalho </Typography>
                        <a href="https://github.com/INTEGRAACAO/Back-end" target="_blank">
                            <GitHubIcon className='redes' />
                            <Typography variant="subtitle2" gutterBottom className='textos ' align="center">BackEnd</Typography>
                        </a>
                        <a href="https://github.com/INTEGRAACAO/Front-end" target="_blank">
                            <GitHubIcon className='redes' />
                            <Typography variant="subtitle2" gutterBottom className='textos ' align="center">FrontEnd</Typography>
                        </a>

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
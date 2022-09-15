import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/user/action';
import './Navbar.css';
import { UserState } from '../../../store/user/userReducer';
import {toast} from 'react-toastify';


function Navbar() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className='bg-menu'>
            <Toolbar className='container' variant="dense">
                <Box className='cursor' >
                    <Typography variant="h5" className='title'>
                        INTEGRAÇÃO
                    </Typography>
                </Box>

                <Box className='botoes' >
                    <Link to='/home' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/projetos' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Projetos
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioProjetos' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Novo Projeto
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/formularioTemas' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Novo Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/temas' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas/:id' className='text-decoration-none'>
                        <Box mx={1} className='cursor, botaoNav'>
                            <Typography >
                                Deletar Tema
                            </Typography>
                        </Box>


                    </Link>

                    <Box onClick={goLogout} mx={1} className='cursor, botaoNav'>
                        <Typography  >
                            Logout
                        </Typography>
                    </Box>


                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;

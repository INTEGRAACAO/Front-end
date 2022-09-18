import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/user/action';
import './Navbar.css';
import {toast} from 'react-toastify';
import { Button, TextField } from "@material-ui/core";

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
        navbarComponent = 
        <nav className="navbar">
          <img id="logo" src="https://i.imgur.com/G5hWMIY.png" alt="" />
          <input type="text" id="busca" name="busca" placeholder="Buscar"/>
          <Link to= "/home" >
            <Button variant="outlined">
              <img className="icone" src="https://i.imgur.com/t3uc0yh.png" alt="" />
              Home
            </Button>
          </Link>
          <Link to= "/perfil" >
            <Button variant="outlined">
              <img className="icone" src="https://i.imgur.com/q5lbYtx.png" alt="" />
              Perfil
            </Button>
          </Link>
          <Link to= "/formularioProjetos" >
            <Button variant="outlined">
              <img className="icone" src="https://i.imgur.com/UlFTFdG.png" alt="" />
              Projetos
            </Button>
          </Link>
          <Link to= "/temas" >
            <Button variant="outlined">
              <img className="icone" src="https://i.imgur.com/Da17zmp.png" alt="" />
              Temas
            </Button>
          </Link>
          <Link to= "/sobreNos" >
            <Button variant="outlined">
              <img className="icone" src="https://i.imgur.com/U3A9WAs.png" alt="" />
              Sobre nós
            </Button>
          </Link>
          <Link to= "#" >
            <Button onClick={goLogout} variant="outlined">
              <img className="icone" src="https://i.imgur.com/ZewcJoN.png" alt="" />
              Sair
            </Button>
          </Link>
        </nav>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/user/action';
import './Navbar.css';
import { UserState } from '../../../store/user/userReducer';
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
          <img src="https://i.imgur.com/G5hWMIY.png" alt="" />
          <input type="text" id="busca" name="busca" placeholder="Buscar"/>
          <Link to= "/home" >
            <Button variant="outlined">
              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.1687 18.8605L32.3667 3.04688C30.4109 1.09569 27.7618 0 25 0C22.2382 0 19.5891 1.09569 17.6333 3.04688L1.83127 18.8605C1.24883 19.4396 0.787045 20.1286 0.472696 20.8875C0.158348 21.6465 -0.00231333 22.4604 2.51656e-05 23.2819V43.7463C2.51656e-05 45.4049 0.658505 46.9955 1.83061 48.1683C3.00271 49.3411 4.59242 50 6.25002 50H43.75C45.4076 50 46.9973 49.3411 48.1694 48.1683C49.3415 46.9955 50 45.4049 50 43.7463V23.2819C50.0023 22.4604 49.8416 21.6465 49.5273 20.8875C49.213 20.1286 48.7512 19.4396 48.1687 18.8605ZM31.25 45.8308H18.75V37.6301C18.75 35.9715 19.4085 34.3808 20.5806 33.208C21.7527 32.0352 23.3424 31.3763 25 31.3763C26.6576 31.3763 28.2473 32.0352 29.4194 33.208C30.5915 34.3808 31.25 35.9715 31.25 37.6301V45.8308ZM45.8333 43.7463C45.8333 44.2991 45.6138 44.8293 45.2231 45.2203C44.8324 45.6112 44.3025 45.8308 43.75 45.8308H35.4167V37.6301C35.4167 34.8658 34.3192 32.2147 32.3657 30.26C30.4122 28.3053 27.7627 27.2072 25 27.2072C22.2373 27.2072 19.5878 28.3053 17.6343 30.26C15.6808 32.2147 14.5833 34.8658 14.5833 37.6301V45.8308H6.25002C5.69748 45.8308 5.16758 45.6112 4.77688 45.2203C4.38618 44.8293 4.16669 44.2991 4.16669 43.7463V23.2819C4.16862 22.7295 4.38791 22.2 4.7771 21.8081L20.5792 6.00073C21.7535 4.83113 23.3431 4.17452 25 4.17452C26.6569 4.17452 28.2465 4.83113 29.4208 6.00073L45.2229 21.8144C45.6106 22.2047 45.8297 22.7316 45.8333 23.2819V43.7463Z" />
              </svg>
              Home
            </Button>
          </Link>
          <Link to= "/perfil" >
            <Button variant="outlined">
              Perfil
            </Button>
          </Link>
          <Link to= "/projetos" >
            <Button variant="outlined">
              Projetos
            </Button>
          </Link>
          <Link to= "/temas" >
            <Button variant="outlined">
              Temas
            </Button>
          </Link>
          <Link to= "/sobre" >
            <Button variant="outlined">
              Sobre nós
            </Button>
          </Link>
          <Link to= "#" >
            <Button onClick={goLogout} variant="outlined">

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

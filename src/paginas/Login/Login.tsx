import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToken, addId } from "../../store/user/action";
import { toast } from 'react-toastify';

import './Login.css'

function Login() {
  let history = useNavigate();
  const dispatch = useDispatch();

  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      apelido: '',
      linkFoto: '',
      senha: '',
      token: '',
      email: ''
    }
  )

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    apelido: '',
    linkFoto: '',
    senha: '',
    token: '',
    email: ''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (respUserLogin.token !== "") {

      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      history('/home')
    }
  }, [respUserLogin.token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login('/usuario/logar', userLogin, setRespUserLogin)

      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {

      toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }

  }

  return (

    <Grid container direction="row" justifyContent="center" alignItems="center" >
      
      <Grid item xs={2} className="imagem2">
      <img src="https://i.imgur.com/0Ggm1U0.png" alt="" />
      </Grid>
      
      <Grid item xs={10} alignItems="center">
      <Box className="card-login">
            <Typography className='card-title-login' variant="h4" align="center">
              Login
            </Typography>

            <form onSubmit={onSubmit}>
              <Box marginY={4}>
                <TextField value={userLogin.apelido} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input-login' id="standard-basic" type="text" label="Usuário" name="apelido" required />
              </Box>

              <Box marginY={4}>
                <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input-login' id="standard-basic" type="password" label="Senha" name="senha" required />
              </Box>

              <Button className="form-btn-login" variant="contained" type='submit'>
                Acessar
              </Button>


            </form>
            <Box display='flex' justifyContent='center' marginTop={2} className='criarConta-login'>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom>Não tem uma conta?</Typography>
              </Box>
              <Link to='/cadastroUsuario' className='text-decoration-none-login'>
                <Typography variant='subtitle1' gutterBottom align='center' style=
                  {{ fontWeight: 'bold', cursor: "pointer" }}>Cadastre-se</Typography>
              </Link>
            </Box>

          </Box>
      </Grid>
          
          

      </Grid>
    
  )
}

export default Login

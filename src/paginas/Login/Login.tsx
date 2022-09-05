import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import React, {ChangeEvent, useState, useEffect} from 'react';

import './Login.css'

function Login() {
    let history = useNavigate();
  const [token, setToken] = useLocalStorage('token');

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

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(token != '') {
      history('/home')
    }
  }, [token]
  )
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      await login('/usuarios/logar', userLogin, setToken)

      alert('Usuário logado com sucesso!')
    }catch (error){
      alert('Dados do usuário inconsistentes. Erro ao logar! ');
    }
    
  }

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
                            <Link to='/cadastroUsuario' className='text-decoration-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' style=
                                {{ fontWeight: 'bold', cursor: "pointer" }}>Cadastre-se</Typography>
                            </Link>
                        </Box>

                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Login
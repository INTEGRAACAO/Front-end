import { Box } from '@mui/material';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import React, {ChangeEvent, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addToken, addId } from "../../store/user/action";

import './Login.css'

function Login() {
    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

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

  function updatedModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if(respUserLogin.token !== ""){

        // Verifica os dados pelo console (Opcional)
        console.log("Token: " + respUserLogin.token)
        console.log("ID: " + respUserLogin.id)

        // Guarda as informações dentro do Redux (Store)
        dispatch(addToken(respUserLogin.token)) 
        dispatch(addId(respUserLogin.id.toString()))    // Faz uma conversão de Number para String
        history('/home')
    }
}, [respUserLogin.token])
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      await login('/usuario/logar', userLogin, setRespUserLogin)

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

                        <form onSubmit={onSubmit}>
                            <Box marginY={4}>
                                <TextField value={userLogin.apelido} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' id="standard-basic" type="text" label="Usuário" name="apelido" required />
                            </Box>

                            <Box marginY={4}>
                                <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className='form-input' id="standard-basic" type="password" label="Senha" name="senha"required />
                            </Box>
                            
                                <Button className="form-btn" variant="contained" type='submit'>
                                    Acessar
                                </Button>
                            

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
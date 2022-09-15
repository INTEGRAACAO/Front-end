import React, {useState, useEffect, ChangeEvent} from "react";
import Box from '@mui/material/Box';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {cadastroUsuario} from '../../services/Service';
import {toast} from 'react-toastify';
import User from "../../models/User";

import "./CadastroUsuario.css";

export default function CadastroUsuario(){

  let history = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    email: '',
    apelido: '',
    senha: '',
    linkFoto: '',
    bio:'',
    tipoAcesso:'',
    dataNascimento:'' 
  })
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    email: '',
    apelido: '',
    senha: '',
    linkFoto: '',
    bio:'',
    tipoAcesso:'',
    dataNascimento:'' 
  })

  useEffect(() => {
      if (userResult.id !== 0) {
          history('/login')
      }
  }, [userResult])


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(e.target.value)
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
      if (confirmarSenha === user.senha && user.senha.length >= 8) {

          //Tenta executar o cadastro
          try {
              await cadastroUsuario(`/usuario/cadastrar`, user, setUserResult)
              toast.success('Usuário cadastrado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

          //Se houver erro, pegue o Erro e retorna uma msg
          } catch (error) {
                           
              //Pode modificar a msg de acordo com o erro 
        
              toast.error('Usuário já existente', {
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

      } else {
         
          toast.error('Insira no miníno 8 caracteres na senha.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });   // Mensagem que indica a quantidade minima de caracteres

          setUser({ ...user, senha: "" }) // Reinicia o campo de Senha
          setConfirmarSenha("")           // Reinicia o campo de Confirmar Senha
      }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2" />
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={cadastrar} className='formCadastrar'>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2">Cadastrar</Typography>
            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth required />
            <TextField value={user.apelido} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='apelido' label='Apelido' variant='outlined' name='apelido' margin='normal' fullWidth required />
            <TextField value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth required />
            <TextField value={user.linkFoto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='linkFoto' label='Link Foto' variant='outlined' name='linkFoto' margin='normal' fullWidth  />
            <TextField value={user.bio} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='bio' label='Bio' variant='outlined' name='bio' margin='normal' fullWidth  />
            <TextField value={user.tipoAcesso} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipoAcesso' label='Tipo Acesso' variant='outlined' name='tipoAcesso' margin='normal' fullWidth required />
            <TextField value={user.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='dataNascimento' label='Data de Nascimento' variant='outlined' name='dataNascimento' margin='normal' fullWidth required />
            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required/>
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className="text-decorator-none">
                <Button variant='contained' color='secondary'>
                  Cancelar
                </Button>
              </Link>
             
              <Button type="submit" variant='contained' color='primary' className="btnCancelar">
                Cadastrar
              </Button>
             
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

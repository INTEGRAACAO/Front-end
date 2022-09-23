import React, { useState, useEffect, ChangeEvent } from 'react'
import { TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import './CadastroProjeto.css';
import { useSelector } from 'react-redux';
import { busca, buscaId, post, put } from '../../../services/Service';
import Projeto from '../../../models/Projeto';
import { UserState } from '../../../store/user/userReducer';
import User from '../../../models/User';
import Temas from '../../../models/Tema';
import { toast } from 'react-toastify'
import { Box } from "@mui/material";


function CadastroProjeto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [temas, setTemas] = useState<Temas[]>([])

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  // Pega o ID guardado no Store
  const userId = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  //console.log(userId);

  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    apoios: '',
    nome: '',
    linkImagem: '',
    descricao: '',
    dataProjeto: '',
    usuario: null,
    temas: null
  })

  const [user, setUser] = useState<User>(
    {
      id: +userId,
      nome: '',
      email: '',
      apelido: '',
      senha: '',
      linkFoto: '',
      bio: '',
      tipoAcesso: '',
      dataNascimento: '',
      dataCadastro: ''
    })

  const [tema, setTema] = useState<Temas>(
    {
      id: 0,
      temas: ''
    }
  )

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  useEffect(() => {
    setProjeto({
      ...projeto,
      usuario: user,
      temas: tema

    })
  }, [tema])

  useEffect(() => {
    getTemas()
    if (id !== undefined) {
      findById(id)
    }
  }, [id])


  async function findById(id: string) {
    await buscaId(`/projetos/${id}`, setProjeto, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedProjeto(e: ChangeEvent<HTMLInputElement>) {

    setProjeto({
      ...projeto,
      [e.target.name]: e.target.value,
      temas: tema
    })

  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {

      try {
        await put(`/projetos`, projeto, setProjeto, {
          headers: {
            'Authorization': token
          }
        })

        toast.success('Postagem atualizada com sucesso', {
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
        toast.error('Ops, algo deu errado tente novamente.', {
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

      try {
        console.log(projeto)
        await post(`/projetos`, projeto, setProjeto, {
          headers: {
            'Authorization': token
          }
        })

        toast.success('Postagem cadastrada com sucesso', {
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

        toast.error('Ops, algo deu errado tente novamente.', {
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
    back()

  }

  function back() {
    navigate('/home')
  }

  return (
    <><Grid xs={1} className='bg-cadastro-proj'></Grid>

      <Grid xs={8} className='bg-cadastro-proj'>

        <Box className='topo'>
          <img className="titulo" src="https://i.imgur.com/O4hHFDR.png" alt="sobre nos" />
        </Box>
        <form onSubmit={onSubmit}>

          <TextField  value={projeto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" className="form-input-login" fullWidth />
          <TextField value={projeto.linkImagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="linkImagem" label="Coloque sua Imagem" variant="outlined" name="linkImagem" margin="normal" className="form-input-login" fullWidth />
          <TextField value={projeto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="descricao" label="Escreva aqui as suas ideias" variant="outlined" name="descricao" margin="normal" className="form-input-login" fullWidth />
          <TextField value={projeto.apoios} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="apoios" label="#tag" variant="outlined" name="apoios" margin="normal" className="form-input-login" fullWidth />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  'Authorization': token
                }
              })}>
              {temas.map(tema => (
                <MenuItem value={tema.id}>{tema.temas}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a postagem</FormHelperText>
            <Button type="submit" variant="contained" className='botaoTema'>
              Finalizar
            </Button>
          </FormControl>
        </form>

      </Grid>
      <Grid item xs={3} className='bg-cadastro-proj'> <img src="https://i.imgur.com/jmNJFPj.gif" alt="" /></Grid></>
  )
}

export default CadastroProjeto;



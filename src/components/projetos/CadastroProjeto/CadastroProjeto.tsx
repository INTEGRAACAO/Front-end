import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, post, put } from '../../../services/Service';
import Projeto from '../../../models/Projeto';


function CadastroProjeto() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    nome: '',
    linkImagem: '',
    descricao: '',
    user: null
  })

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")
  
    }
  }, [token])

  useEffect(() =>{
    if(id !== undefined){
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/projetos/${id}`, setProjeto, {
      headers: {
        'Authorization': token
      }
      })
    }

    function updatedProjeto(e: ChangeEvent<HTMLInputElement>) {

      setProjeto({
        ...projeto,
        [e.target.name]: e.target.value,
      })
  
    }
    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      console.log("projeto " + JSON.stringify(projeto))
  
      if (id !== undefined) {
        console.log(projeto)
        put(`/projetos`, projeto, setProjeto, {
          headers: {
            'Authorization': token
          }
        })
        alert('Projeto atualizado com sucesso');
      } else {
        post(`/projetos`, projeto, setProjeto, {
          headers: {
            'Authorization': token
          }
        })
        alert('Projeto cadastrado com sucesso');
      }
      back()
  
    }
  
    function back() {
      navigate('/projetos')
    }
  
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
        <TextField value={projeto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={projeto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <TextField value={projeto.linkImagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="linkImagem" label="linkImagem" variant="outlined" name="linkImagem" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroProjeto;

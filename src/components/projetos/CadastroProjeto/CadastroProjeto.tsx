import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroProjeto.css';
import { useSelector } from 'react-redux';
import { buscaId, post, put } from '../../../services/Service';
import Projeto from '../../../models/Projeto';
import { UserState } from '../../../store/user/userReducer';
import User from '../../../models/User';
import Tema from '../../../models/Tema';


function CadastroProjeto() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
);

// Pega o ID guardado no Store
const userId = useSelector<UserState, UserState["id"]>(
  (state) => state.id
);

console.log(userId);

  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    apoios: '',
    nome: '',
    linkImagem: '',
    descricao: '',
    data: '',
    usuario: null,
    tema: null
  })

  const [user, setUser] = useState<User>(
    {
      id: +userId, 
      nome:'',
      email: '',
      apelido: '', 
      senha: '',
      linkFoto:'',
      bio:'',
      tipoAcesso:'',
      dataNascimento:'',
    })

    const [tema, setTema] =useState<Tema> (
      {
        id: 1,
        tema: ''
      }
    )

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
        usuario: user
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

              alert('Postagem atualizada com sucesso');

          } catch (error) {
              console.log(`Error: ${error}`)
              alert('Ops, algo deu errado tente novamente.')
          }

      } else {

          try {
            console.log(projeto)
              await post(`/projetos`, projeto, setProjeto, {
                  headers: {
                      'Authorization': token
                  }
              })

              alert('Postagem cadastrada com sucesso');

          } catch (error) {
              console.log("Error: " + error)
              alert('Ops, algo deu errado tente novamente.')
          }

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
        <TextField className = "input-projeto" value={projeto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
        <TextField value={projeto.apoios} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="apoios" label="apoios" variant="outlined" name="apoios" margin="normal" fullWidth />
        <TextField value={projeto.linkImagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="linkImagem" label="linkImagem" variant="outlined" name="linkImagem" margin="normal" fullWidth />
        <TextField value={projeto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroProjeto;

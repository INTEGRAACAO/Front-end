import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { buscaId, post, put } from '../../../services/Service';
import { UserState } from '../../../store/user/userReducer';
import Projeto from '../../../models/Projeto'
import Temas from '../../../models/Tema';
import './CadastroTema.css';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    apoios: '',
    nome: '',
    linkImagem: '',
    descricao: '',
    data: '',
    usuario: null,
    temas: null
  })

  const [temas, setTema] = useState<Temas>({
    id: 0,
    temas: '',
    projeto: null
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
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...temas,
      [e.target.name]: e.target.value
    
    })

  }
    
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

      if (id !== undefined) {

        try {
            await put(`/temas`, temas, setTema, {
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
          console.log(temas)
          await post(`/temas`, temas, setTema, {
              headers: {
                  'Authorization': token
              }
          })
          alert('Tema cadastrado com sucesso');

        } catch (error) {
            console.log("Error: " + error)
            alert('Ops, algo deu errado tente novamente.')
        }
    }
    back()
  }
  
  function back() {
    navigate('/temas')
  }
  
  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
        <TextField value={temas.temas} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="tema" variant="outlined" name="temas" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroTema;

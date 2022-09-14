import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { buscaId, post, put } from '../../../services/Service';
import { UserState } from '../../../store/user/userReducer';

import Tema from '../../../models/Tema';

import './CadastroTema.css';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tema: '',
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
      ...tema,
      [e.target.name]: e.target.value,
    })

  }
    
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

      if (id !== undefined) {

        try {
            await put(`/temas`, tema, setTema, {
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
          console.log(tema)
          await post(`/temas`, tema, setTema, {
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
        <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="tema" variant="outlined" name="tema" margin="normal" fullWidth />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  )
}

export default CadastroTema;

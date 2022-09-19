import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { buscaId, post, put } from '../../../services/Service';
import { UserState } from '../../../store/user/userReducer';
import Projeto from '../../../models/Projeto'
import Temas from '../../../models/Tema';
import { toast } from 'react-toastify';
import './CadastroTema.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

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
   
  })

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
          console.log(temas)
          await post(`/temas`, temas, setTema, {
              headers: {
                  'Authorization': token
              }
          })
          toast.success('Tema cadastrado com sucesso', {
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
    navigate('/temas')
  }
  
  return (
    <Container maxWidth="sm" className="topo">
      <Box className='form-tema'>
        <form onSubmit={onSubmit}>
        <Typography variant="h3" color="textSecondary" component="h1" align="center" >Crie um tópico</Typography>
        <TextField value={temas.temas} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="tema" label="Tópico" variant="outlined" name="temas" margin="normal" fullWidth />
        <Button type="submit" variant="contained"  className='botao-tema'>
          Finalizar
        </Button>
        
      </form>
      </Box>
      

      
    </Container>
  )
}

export default CadastroTema;

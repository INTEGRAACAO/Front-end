import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Button, Card, CardActions, CardContent, Typography, TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import Comentarios from '../comentarios/Comentarios';
import { UserState } from '../../../store/user/userReducer';
import { useSelector } from 'react-redux';
import User from '../../../models/User';
import { buscaId } from '../../../services/Service';
import { Grid } from '@mui/material';

interface PostsProps {
    projeto: Projeto
}

function Projetos({ projeto }: PostsProps) {

    // Pega o ID guardado no Store
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [comments, setComments] = useState([''])

    const [newCommentText, setNewCommentText] = useState('')


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    const apoioTexto = ["✌️ apoiei", "✋ apoiar"];
    const apoioColor = ["#BC73E9", "#6650E6"];
    const btnApoio = document.querySelector("#btn-apoio") as HTMLElement;

    function apoiosContador(){
      return `${projeto.apoios.split(",").length} apoiaram`;
    }

    function apoiar(e: React.MouseEvent<HTMLElement>) {
      let apoiosArray = projeto.apoios.split(",");
      let element = e.target as HTMLElement;
      let contador = document.querySelector("#apoios-contador");

      if (apoiosArray.indexOf(userId) == -1){
        element.innerText = apoioTexto[0];
        element.style.color = apoioColor[0];
        apoiosArray.push(userId);
        projeto.apoios = apoiosArray.join(",");
        //contador.innerText = `${apoiosArray.length} apoiaram`;
      } else {
        element.innerText = apoioTexto[1];
        element.style.color = apoioColor[1];
        apoiosArray.splice(apoiosArray.indexOf(userId), 3);
        projeto.apoios = apoiosArray.join(",");
        //contador.innerText = `${apoiosArray.length} apoiaram`;
      }
    }

    function apoioCheck() {
      if(projeto.apoios.split(",").indexOf(userId) == -1){
        return (
          <p id="btn-apoiar" style={{ color: apoioColor[1], cursor: "pointer", fontWeight: "bold", }} onClick={(e) => apoiar(e)}> 
            {apoioTexto[1]}
          </p>
        );
      } else {
        return (
          <p id="btn-apoiar" style={{ color: apoioColor[0], cursor: "pointer", fontWeight: "bold", }} onClick={(e) => apoiar(e)}> 
            {apoioTexto[0]}
          </p>
        )
      }
      
    }

    return (

        <Box m={2}>
            <Card variant="outlined">
                <CardContent>                    

                    <Box className='cardImg'>
                        <img alt='' className='img'
                            src={projeto.linkImagem}
                        ></img>
                    </Box>
                    
                    <Typography variant="inherit" component="h2">
                        {projeto.nome}
                    </Typography>

                    <Typography variant="body1" component="h4">
                        {projeto.descricao}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.data}
                    </Typography>

                    <Typography variant="body1" component="h5">
                        {projeto.usuario?.nome}
                    </Typography>

                    <Typography variant="body1" component="h5">
                        {projeto.temas?.temas}
                    </Typography>


                    <p id="contador-apoiar" > 
                      {projeto.apoios} 
                    </p>

                    {apoioCheck()}

                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>

                        <Link to={`/formularioProjetos/${projeto.id}`} className="text-decorator-none" >
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft botaoTema" size='small' >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to={`/deletarProjetos/${projeto.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' className='botaoDeletar'>
                                    Deletar
                                </Button>
                            </Box>
                        </Link>

                    </Box>
                </CardActions>


                <Box padding={2}>
                    <form onSubmit={handleCreateNewComment}>
                       
                        <Box >
                            <TextField
                              id="comment"
                              name="comment"
                              label="Deixe seu Comentário"
                              variant="outlined"
                              value={newCommentText}
                              onChange={handleNewCommentChange}
                              className='box-comentario'
                              color='primary'
                            />
                            
                        </Box>
                        
                        <Box mx={1}>
                          <Button type="submit" variant="contained" className="marginLeft botaoTema" size='small'  >
                            Publicar
                          </Button>
                        </Box>
                    </form>
                </Box>

                <Box padding={2}>
                    {comments.map(comment => {
                        return (
                            <Comentarios conteudo={comment} />
                        )
                    })}
                </Box>

            </Card>
        </Box>

    )
}

export default Projetos;

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import Comentarios from '../comentarios/Comentarios';
import { UserState } from '../../../store/user/userReducer';
import { useSelector } from 'react-redux';
import User from '../../../models/User';
import { buscaId } from '../../../services/Service';

interface PostsProps {
    projeto: Projeto
}

function Projetos ({ projeto }: PostsProps) {

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

    function apoiar(e: React.MouseEvent<HTMLElement>) {
      let apoiosArray = projeto.apoios.split(",");
      let element = e.target as HTMLElement;
      let contador = document.querySelector("#apoios-contador");

      if (apoiosArray.indexOf(userId) == -1){
        element.innerText = "✌ apoiei";
        element.style.color = "#BC73E9";
        apoiosArray.push(userId);
        projeto.apoios = apoiosArray.join(",");
        //contador.innerText = `${apoiosArray.length} apoiaram`;
      } else {
        element.innerText = "🖐 apoiar";
        element.style.color = "#6650E6";
        apoiosArray.splice(apoiosArray.indexOf(userId), 1);
        projeto.apoios = apoiosArray.join(",");
        //contador.innerText = `${apoiosArray.length} apoiaram`;
      }
      console.log(apoiosArray);
      console.log(projeto.apoios);
    }

    return (
        <Box m={2} >
            <Card variant="outlined">
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>
                        Postagens
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.nome}
                    </Typography>

                    <Box className='cardImg'>
                       <img alt='' className='img'
                            src={projeto.linkImagem}
                            ></img> 
                    </Box>

                    <Typography variant="body2" component="p">
                        {projeto.descricao}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.data}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.usuario?.nome}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.temas?.temas}
                    </Typography> 

                    <p id="apoios-contador" style={{ fontWeight: "bold", }}> 
                      {projeto.apoios.split(",").length} apoiaram
                    </p>

                    <p id="btn-apoiar" style={{ color: "#6650E6", cursor: "pointer", fontWeight: "bold", }} onClick={(e) => apoiar(e)}> 
                      apoiar
                    </p>

                </CardContent>

                <CardActions>
                    <Box display="flex" justifyContent="center" mb={1.5}>

                        <Link to={`/formularioProjetos/${projeto.id}`} className="text-decorator-none" >
                            <Box mx={1}>
                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                    Atualizar
                                </Button>
                            </Box>
                        </Link>

                        <Link to={`/deletarProjetos/${projeto.id}`} className="text-decorator-none">
                            <Box mx={1}>
                                <Button variant="contained" size='small' color="secondary">
                                    Deletar
                                </Button>
                            </Box>
                        </Link>

                    </Box>
                </CardActions>

                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        name='comment'
                        placeholder='Deixe seu comentário'
                        value={newCommentText}
                        onChange={handleNewCommentChange}
                        required
                    />
                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div>
                    {comments.map(comment => {
                        return (
                            <Comentarios conteudo={comment} />
                        )
                    })}
                </div>

            </Card>
        </Box>
    )
}

export default Projetos;

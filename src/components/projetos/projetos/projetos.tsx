import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import Comentarios from '../comentarios/Comentarios';

interface PostsProps {
    projeto: Projeto
}

function Projetos ({ projeto }: PostsProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?! 👏👏'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    return (
        <Box m={2} >
            <Card variant="outlined">
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>
                        Postagens
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {projeto.apoios}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.nome}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {projeto.linkImagem}
                    </Typography>

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
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import Comentarios from '../comentarios/Comentarios';
import { UserState } from '../../../store/user/userReducer';
import { useSelector } from 'react-redux';
import { busca, buscaId, post, put } from '../../../services/Service';
import User from '../../../models/User';
import Temas from '../../../models/Tema';

interface PostsProps {
    projeto: Projeto
}

function Projetos ({ projeto }: PostsProps) {

    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
    // Pega o ID guardado no Store
    const userId = useSelector<UserState, UserState["id"]>(
      (state) => state.id
    );

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
      })

    const [tema, setTema] = useState<Temas>(
      {
        id: 0,
        temas: ''
      }
    )

    useEffect(() => {
      setProjeto({
        ...projeto,
        usuario: user,
        temas: tema

      })
    }, [tema])

    async function findById(id: string) {
      await buscaId(`/projetos/${id}`, setProjeto, {
        headers: {
          'Authorization': token
        }
      })
    }
    const [proj, setProjeto] = useState<Projeto>({
      id: projeto.id,
      apoios: projeto.apoios,
      nome: projeto.nome,
      linkImagem: projeto.linkImagem,
      descricao: projeto.descricao,
      data: projeto.data,
      usuario: null,
      temas: null
    })

    const apoioTexto = ["✌️ apoiei", "✋ apoiar"];
    const apoioColor = ["#BC73E9", "#6650E6"];
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
    async function apoiar(e: React.MouseEvent<HTMLElement>) {
      let apoiosArray = projeto.apoios.split(",");
      let element = e.target as HTMLElement;

      if (apoiosArray.indexOf(userId) == -1){
        element.innerText = apoioTexto[0];
        element.style.color = apoioColor[0];
        apoiosArray.push(userId);
        projeto.apoios = apoiosArray.join(",");
      } else {
        element.innerText = apoioTexto[1];
        element.style.color = apoioColor[1];
        apoiosArray.splice(apoiosArray.indexOf(userId), 1);
        projeto.apoios = apoiosArray.join(",");
      }

      await put(`/projetos`, proj, setProjeto, {
        headers: {
          'Authorization': token
        }
      })

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

                    <p id="contador-apoiar" style={{ color: apoioColor[0], cursor: "pointer", fontWeight: "bold", }} > 
                      {projeto.apoios.split(",").length} apoiam
                    </p>

                    {apoioCheck()}

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

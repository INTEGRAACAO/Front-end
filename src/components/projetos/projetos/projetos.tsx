import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { Button, Card, CardActions, CardContent, Typography, TextField, CardMedia } from '@material-ui/core'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Projeto from '../../../models/Projeto';
import User from '../../../models/User';
import Comentarios from '../comentarios/Comentarios';
import { UserState } from '../../../store/user/userReducer';
import { useSelector } from 'react-redux';
import { buscaId } from '../../../services/Service';
import { Avatar, CardHeader, Grid } from '@mui/material';

interface PostsProps {
    projeto: Projeto
}

function Projetos({ projeto }: PostsProps) {

    // Pega o ID guardado no Store
    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );
    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );
    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuario/${id}`, setUser, {
            headers: {
                'Authorization': token
            }

        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    const [user, setUser] = useState<User>({
        id: +id,
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

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [comments, setComments] = useState([''])

    const [newCommentText, setNewCommentText] = useState('')


    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        if (newCommentText != "" && newCommentText != null) {
            setComments([...comments, newCommentText])
        }
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    const apoioTexto = ["✌️ apoiei", "✋ apoiar"];
    const apoioColor = ["#BC73E9", "#6650E6"];

    function apoiar(e: React.MouseEvent<HTMLElement>) {
        let apoiosArray = projeto.apoios.split(",");
        let element = e.target as HTMLElement;

        if (apoiosArray.indexOf(userId) == -1) {
            element.innerText = apoioTexto[0];
            element.style.color = apoioColor[0];
            apoiosArray.push(userId);
            projeto.apoios = apoiosArray.join(",");
        } else {
            element.innerText = apoioTexto[1];
            element.style.color = apoioColor[1];
            apoiosArray.splice(apoiosArray.indexOf(userId), 3);
            projeto.apoios = apoiosArray.join(",");
        }
    }

    function apoioCheck() {
        if (projeto.apoios.split(",").indexOf(userId) == -1) {
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
    try {
        const formatadorDeData = new Intl.DateTimeFormat('pt-BR')
        const dataPost = new Date(projeto.dataProjeto)
        console.log(dataPost)
        var dataPostFormatada = formatadorDeData.format(dataPost)
    } catch (error) {
        console.log(error);
        dataPostFormatada = "carregando"
    }

    const usuarioId = +userId;

    return (
        
        <Card className="projeto" >
            <CardHeader id="perfil-foto" avatar={
                <Avatar aria-label="recipe">
                    <img alt="perfil foto" src={projeto.usuario?.linkFoto} />
                </Avatar>
            }
                title={projeto.usuario?.nome}>
            </CardHeader>

            <CardMedia
                component="img"
                alt="green iguana"
                image={projeto.linkImagem}
            />
            <CardContent>
                <Typography className="projetoNome" gutterBottom variant="h4" component="div">
                    {projeto.nome}
                </Typography>
               
                <Typography variant="h5" >
                    {projeto.descricao}
                </Typography> 
                
                <Typography variant="body1" component="p">
                   <b>Postado em:</b> {dataPostFormatada}
                </Typography>

                <Typography variant="body1" component="h5">
                   <b> Tópico:</b> {projeto.temas?.temas}
                </Typography>

            </CardContent>

            <Box padding={2}>

                {
                    (projeto.usuario?.id !== null && usuarioId === projeto.usuario?.id) ?
                        <><Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioProjetos/${projeto.id}`} className="text-decorator-none" >
                                <Box mx={1}>
                                    <Button variant="contained" className="botaoTema" size='small'  >
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarProjetos/${projeto.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' className='botaoDeletar'>
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                            </Box>
                        </>
                        :
                        <Box> Você pode editar apenas seus posts</Box>
                }

                <form onSubmit={handleCreateNewComment}>
                    {apoioCheck()}

                </form>


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

            </Box>


            <Box padding={2}>
                {
                    comments.map(comment => {
                        return (
                            <Comentarios conteudo={comment} imagem={user.linkFoto} nome={user.nome} />
                        )
                    })
                }
            </Box>

        </Card>
    )
}

export default Projetos;

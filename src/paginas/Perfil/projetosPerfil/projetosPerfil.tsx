import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Projeto from "../../../models/Projeto";
import User from "../../../models/User";
import { buscaId } from "../../../services/Service";
import { UserState } from "../../../store/user/userReducer";

interface PostsProps {

    projeto: Projeto
}

function ProjetosPerfil({ projeto }: PostsProps) {

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
        <>
        {
        (projeto.usuario?.id !== null && usuarioId === projeto.usuario?.id) ?
            <>
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
                <Typography className="projetoNome" gutterBottom variant="h5" component="div">
                    {projeto.nome}
                </Typography>
                <Typography variant="body1" component="p">
                    Postado em: {dataPostFormatada}
                </Typography>
                <Typography variant="body1" >
                    {projeto.descricao}
                </Typography>
                <Typography variant="body1" component="h5">
                    Postado por: {projeto.usuario?.nome}
                </Typography>

                <Typography variant="body1" component="h5">
                    Tópico: {projeto.temas?.temas}
                </Typography>

            </CardContent>

                <Box display="flex" justifyContent="center" mb={1.5} >
                <Link to={`/formularioProjetos/${projeto.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                        <Button variant="contained" className="marginLeft botaoTema" size='small' >
                            atualizar
                        </Button>
                    </Box>
                </Link>
                <Link to={`/deletarProjetos/${projeto.id}`} className="text-decorator-none">
                    <Box mx={1}>
                        <Button variant="contained" size='small' className="botaoDeletar">
                            deletar
                        </Button>
                    </Box>
                </Link>
                </Box>
                </Card>
            </>
            :
            <Box>  </Box>
            
    }
    </>
);

}

export default ProjetosPerfil;
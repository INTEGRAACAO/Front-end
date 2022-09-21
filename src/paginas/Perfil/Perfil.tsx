import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../../store/tokens/tokensReducer'
import perfilgf from './perfilgf.gif';

import User from '../../models/User'
import { buscaId } from '../../services/Service'

import './Perfil.css'
import ListaProjetos from '../../components/projetos/listaProjetos/ListaProjetos'

function Perfil() {

    let history = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

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

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])



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

    //let dia, mes, ano

    try {
        console.log(user.id)
        const formatadorDeData = new Intl.DateTimeFormat('pt-BR')
        console.log(formatadorDeData)
        console.log(user.dataCadastro)
        const dataCadastro = new Date(user.dataCadastro)
        console.log(dataCadastro)
        var dataCadastroFormatada = formatadorDeData.format(dataCadastro)
    } catch (error) {
        console.log(error);
        dataCadastroFormatada = "carregando"
    }


    //console.log(dia)
    return (
        <Grid container>

            <Grid item sm={12} className="card-container ">
                <Box className="img-perfil">
                <img  src="https://i.imgur.com/xRxVaSZ.png" alt="Perfil" />
                </Box>
                <div className='card-container-info'>
                <Box className='foto-profile'>

                    <img className='img-foto-profile'
                        src={user.linkFoto}
                        alt={user.nome} />
                </Box>
                    

                    <div className='vazio'></div>
                    <div className="dados-usuário">
                        <div className='info'>{user.nome} </div>
                        <div className='info-b'>{user.tipoAcesso} </div>
                        <div className='info-b'>Contato: {user.email} </div>
                        <div className='info-b'>Integrante desde: {dataCadastroFormatada}</div>
                    </div>
                </div>

                <Box className='card-container-about'>
                    <Box className='card-container-texto'>
                        <div className='bio'>Sobre mim</div>
                        <div className='bioTexto'> {user.bio}</div>

                    </Box>
                    <img src={perfilgf} alt="perfil gif" />
                </Box>

                <section className="projetos-perfil container-home">
                    <ListaProjetos />
                </section>
            </Grid>

        </Grid>
    )
}

export default Perfil;

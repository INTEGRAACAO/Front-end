import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../../store/tokens/tokensReducer'

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
        if (token === "") {
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
            <Grid item sm={12} className="card-container">

                <div className='card-container-info'>
                    <div className='card-imagem'>
                        <img className='img'
                            src={user.linkFoto}
                            alt={user.nome} />
                    </div>
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
                         <p >
                        BIO-----
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                        Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                        Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                    </p>
                    </Box>
                    
                </Box>

                <Box className="postagem">
                    <ListaProjetos />
                
                </Box>

            </Grid>

        </Grid>
    )
}

export default Perfil
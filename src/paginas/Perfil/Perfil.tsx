import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../../store/tokens/tokensReducer'

import User from '../../models/User'
import { buscaId } from '../../services/Service'

import './Perfil.css'

function Perfil() {
    const novaData = new Intl.DateTimeFormat('pt-BR')

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
        buscaId(`/usuario/${id}`, setUser, {
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

    return (
        <Grid container>
            <Grid item sm={12} className="card-container">

                <Box className='card-container-info'>
                    <Box>
                        <img className='card-imagem'
                            src={user.linkFoto}
                            alt={user.nome} />
                    </Box>
                    <Box>
                        <h1>{user.nome}</h1>
                        Apoiador desde: <h1>{novaData.format(new Date(user.dataCadastro))}</h1>
                    </Box>
                    <Box>
                       
                    </Box>

                </Box>

                <Box className='card-container-about'>
                    <p className='card-container-texto'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam accusantium totam incidunt architecto maiores, perferendis eius. Tempora ullam magni dolore voluptatibus, quidem sunt tempore distinctio ut aliquam modi aliquid officiis.
                        Assumenda voluptatibus, animi pariatur voluptatum magnam ullam aspernatur optio suscipit incidunt dolor modi quos aperiam. Quam possimus rerum iste nobis quas porro unde sequi, sed nisi labore est voluptas corrupti.
                        Deleniti officiis sint perspiciatis nisi iste, voluptate sunt asperiores dolor sapiente non corporis omnis voluptatem soluta. Nulla odio alias aperiam, magnam eaque assumenda tempora! Inventore odit iure unde placeat iste.
                    </p>

                    <p className='card-container-texto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur tempore enim hic ad, optio ratione repellendus et. Nemo facilis laborum eum facere ipsam ab ad iusto eligendi deleniti qui?
                    </p>
                </Box>

            </Grid>

        </Grid>
    )
}

export default Perfil
import { Box, Grid, TextField } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './sobreNos.css';
import React from 'react';
import { GitHub } from '@mui/icons-material';

function SobreNos() {
    return (
        <Grid container className='sobrenos-bg'>
            <Grid item xs={12} sm={12}>
                <Box className='img-sobrenos'>
                    <img src="https://i.imgur.com/DMz7KbK.png" alt="" className='img-sobrenos' />
                </Box>
                <Box className='text-sobrenos'>
                    <h3>
                        <p>São incontáveis a quantidade de ações que o ser humano faz em prol uns dos outros todos os dias, desde gentilezas a ações que salvam vidas, elas se mostram reais todos os dias e no intuito de unir esforços em prol de algo maior existem muitas ONGs com iniciativas que podem mudar o mundo, mesmo que essa comece no quintal da sua casa, e com essa ideia, querendo valorizar toda ideia que tente trazer o bem do próximo e dar a ela um canal dela para o mundo, nossa plataforma traz consigo uma rede onde apenas há o conteúdo voltado ao combate a violência. Onde ONGs com este foco podem utilizar da plataforma para promover seu trabalho, se conectar com pessoas apoiadoras em um ambiente onde o único foco são essas ações e como elas podem mudar a vida de pessoas que estão passando por situações de violência, seja ela qual for.
                        </p>
                    </h3>
                </Box>

                <Box className='img-equipe'>
                    <img src="https://i.imgur.com/DtYqeBn.png" alt="" className='img-equipe' />
                </Box>
                <div className='equipe-container'>
                    <div className='div-participante'>
                        <img src="https://i.imgur.com/zClShYH.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi, dolores ratione dolor dicta necessitatibus a unde quasi voluptatum fuga?</h4>
                        <a href="https://github.com/Brumidori" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/bruna-midori-yassuda/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>

                    <div className='div-participante'>
                        <img src="https://i.imgur.com/6YKW6ML.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi id natus optio at ab voluptatum a ea eveniet odit!</h4>
                        <a href="https://github.com/FHemmel" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/fernandohemmel/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>
                </div>
                <div className='equipe-container'>
                    <div className='div-participante'>
                        <img src="https://i.imgur.com/ODGZmAM.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque unde error. Accusamus labore, dignissimos similique ab placeat expedita accusantium.
                        </h4>
                        <a href="https://github.com/luizavramos" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/luiza-ramos-b96a4a160/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>

                    <div className='div-participante'>
                        <img src="https://i.imgur.com/r5KJRPG.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem repellendus nisi nemo rerum quod accusantium reiciendis placeat repellat. Iure.</h4>
                        <a href="https://github.com/VitorGaldino" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://github.com/Brumidori" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>

                    <div className='div-participante'>
                        <img src="https://i.imgur.com/0IOBAVz.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil itaque possimus reiciendis. Rerum fuga molestiae maxime veritatis dolores officiis consectetur.</h4>
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://github.com/Brumidori" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>

                </div>

                <div className='equipe-container'>
                    <div className='div-participante'>
                        <img src="https://i.imgur.com/oo33CLH.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, non! Voluptatibus, deserunt dolore. Error, animi? Omnis nihil ipsam repudiandae velit!</h4>
                        <a href="https://github.com/otsudann" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://github.com/Brumidori" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>

                    <div className='div-participante'>
                        <img src="https://i.imgur.com/WHVncsX.png" alt="" className='img-participante' />
                        <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure quaerat vel ipsa rem numquam quasi placeat? Velit, mollitia error.</h4>
                        <a href="https://github.com/Cleiton-Guilherme" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://github.com/Brumidori" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </div>
                </div>
            </Grid>
        </Grid>
    )

}

export default SobreNos;
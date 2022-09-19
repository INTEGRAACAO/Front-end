import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/tokens/tokensReducer';
import { Box, Grid, TextField } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './sobreNos.css';
import React from 'react';
import { GitHub } from '@mui/icons-material';
import { toast } from 'react-toastify';

function SobreNos() {
    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
    }, [token])

    return (
        <div className='sobrenos'>
            <div className="sobrenos-container">
              <Box className='sobrenos'>
                  <img className="titulo" src="https://i.imgur.com/DMz7KbK.png" alt="sobre nos" />
                  <p className="text-sobrenos"> São incontáveis as ações que os seres humanos fazem em prol uns dos outros todos os dias, desde pequenas gentilezas diárias à feitos que salvam vidas.
                      Essas atitudes se provam reais a todos os momentos e no intuito de unir esforços em prol de algo maior existem muitas ONG's com iniciativas que visam impactar o mundo, para isso é necessário a participação de muitos, unindo seus apoiadores e os conectando com os beneficiários dessas ações.
                      Com essa ideia, querendo valorizar toda iniciativa que tente trazer o bem do próximo e dar à ela visibilidade para o mundo, nossa plataforma traz consigo uma rede com conteúdo voltado ao combate a violência.
                      Escolhemos esse tema por ser uma problemática que atinge milhões de brasileiros e por acreditarmos que existem muitas iniciativas não governamentais que podem impactar a vida das pessoas que lidam com a violência diariamente, seja ela qual for.
                      No INTEGR&#123;A&#125;AÇÃO as ONG's com projetos sociais voltados à este tema podem utilizar a plataforma para promover seu trabalho, se conectar com pessoas apoiadoras e também beneficiárias de suas iniciativas, integrando tudo e todos em um único ambiente.
                  </p>
              </Box>

              <img className="titulo" src="https://i.imgur.com/DtYqeBn.png" alt="equipe"  />
              <div className='equipe-container'>
                  <div className='div-participante'>
                      <img src="https://i.imgur.com/zClShYH.png" alt="Bruna Midori" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eligendi, dolores ratione dolor dicta necessitatibus a unde quasi voluptatum fuga?</h4>
                      <div className='redes'>
                          <a href="https://github.com/Brumidori" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://www.linkedin.com/in/bruna-midori-yassuda/" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>

                  <div className='div-participante'>
                      <img src="https://i.imgur.com/6YKW6ML.png" alt="Fernando Hemmel" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi id natus optio at ab voluptatum a ea eveniet odit!</h4>

                      <div className='redes'>
                          <a href="https://github.com/FHemmel" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://www.linkedin.com/in/fernandohemmel/" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>
              </div>
              <div className='equipe-container'>
                  <div className='div-participante'>
                      <img src="https://i.imgur.com/ODGZmAM.png" alt="Luiza Ramos" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque unde error. Accusamus labore, dignissimos similique ab placeat expedita accusantium.
                      </h4>

                      <div className='redes'>
                          <a href="https://github.com/luizavramos" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://www.linkedin.com/in/luiza-ramos-b96a4a160/" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>

                  <div className='div-participante'>
                      <img src="https://i.imgur.com/r5KJRPG.png" alt="Vitor Galdino" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem repellendus nisi nemo rerum quod accusantium reiciendis placeat repellat. Iure.</h4>

                      <div className='redes'>
                          <a href="https://github.com/VitorGaldino" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://github.com/Brumidori" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>

                  <div className='div-participante'>
                      <img src="https://i.imgur.com/0IOBAVz.png" alt="Felipe Fagundes" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil itaque possimus reiciendis. Rerum fuga molestiae maxime veritatis dolores officiis consectetur.</h4>

                      <div className='redes'>
                          <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://github.com/Brumidori" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>

              </div>

              <div className='equipe-container'>
                  <div className='div-participante'>
                      <img src="https://i.imgur.com/oo33CLH.png" alt="Daniel Augusto" className='img-participante' />
                      <h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, non! Voluptatibus, deserunt dolore. Error, animi? Omnis nihil ipsam repudiandae velit!</h4>

                      <div className='redes'>
                          <a href="https://github.com/otsudann" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://github.com/Brumidori" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>

                  <div className='div-participante'>
                      <img src="https://i.imgur.com/WHVncsX.png" alt="Cleiton Guilherme" className='img-participante' />
                      <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure quaerat vel ipsa rem numquam quasi placeat? Velit, mollitia error.</h4>

                      <div className='redes'>
                          <a href="https://github.com/Cleiton-Guilherme" target="_blank">
                            <img src="https://i.imgur.com/Oltxj68.png" alt="" />
                          </a>
                          <a href="https://github.com/Brumidori" target="_blank">
                            <img src="https://i.imgur.com/wgs9N9l.png" alt="" />
                          </a>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )

}

export default SobreNos;

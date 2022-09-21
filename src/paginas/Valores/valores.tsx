import React from 'react';
import { Box } from '@mui/material'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import './valores.css'

function Valores() {
    return (
        <Grid container>
          <Grid item xs={12} sm={12} >
            <Box className='img-valores'>
              <img src="https://i.imgur.com/a9JaUfO.png" alt="Valores" />

            </Box>
          </Grid>

          <Grid container className='card' >

            <Grid item xs={3} className='borda'>

              <Card className='bg-card'>
                <CardMedia
                  component="img"
                  alt="IMAGEM ILUSTRATIVA"
                  height="175"
                  image="https://i.imgur.com/OGQSM9b.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    <h3>Diversidade</h3>
                  </Typography>
                  <Typography variant="body2" >
                 <h4> Acreditamos que para criar um ambiente seguro é necessário também um ambiente diverso, capaz de integrar todos os grupos sociais e acolhe-los. </h4>
                  <p></p>
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            <Grid item xs={3} className='borda'>
              <Card className='bg-card'>
                <CardMedia
                  component="img"
                  alt="IMAGEM ILUSTRATIVA"
                  height="175"
                  image="https://i.imgur.com/CjkSnM5.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    <h3>Colaboração</h3>
                  </Typography>
                  <Typography variant="body2" >
                   <h4>Acreditamos na força da participação, por isso fazemos  a ligação entre projetos sociais, com aqueles que gostariam de colaborar. </h4>
                  <p></p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={3} className='borda'>
              <Card className='bg-card'>
                <CardMedia
                  component="img"
                  alt="IMAGEM ILUSTRATIVA"
                  height="175"
                  image="https://i.imgur.com/ZGWazTX.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    <h3>Independência</h3>
                  </Typography>
                  <Typography variant="body2" >
                    <h4>A INTEGRAÇÃO nasceu de forma independente e não se vincula de nenhuma forma aos governos e partidos políticos. Agimos com base na consciência.</h4>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
    );
}
export default Valores
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
                  image="https://i.imgur.com/vb8w8uH.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    VALOR 1
                  </Typography>
                  <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque, non provident omnis aliquam pariatur fuga quaerat recusandae quisquam odit, esse delectus iure modi aut earum repellendus ratione laudantium perferendis?
                    em ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis perferendis natus voluptatum ducimus explicabo, nam eos repellendus sint beatae ullam dolorum distinctio? Sapiente vitae quia consectetur ab laudantium qui?

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
                  image="https://i.imgur.com/vb8w8uH.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    VALOR 2
                  </Typography>
                  <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque, non provident omnis aliquam pariatur fuga quaerat recusandae quisquam odit, esse delectus iure modi aut earum repellendus ratione laudantium perferendis?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nam libero nisi doloremque non placeat. Neque necessitatibus molestiae assumenda ratione delectus ullam cumque. Provident, fugiat perspiciatis qui officiis non sequi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae doloremque illum modi earum inventore et, ab consequatur repellat cum veritatis. Nemo voluptates minima enim animi ipsam incidunt molestias libero quidem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis perferendis natus voluptatum ducimus explicabo, nam eos repellendus sint beatae ullam dolorum distinctio? Sapiente vitae quia consectetur ab laudantium qui?
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
                  image="https://i.imgur.com/vb8w8uH.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='titulo-card'>
                    VALOR 3
                  </Typography>
                  <Typography variant="body2" >
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque, non provident omnis aliquam pariatur fuga quaerat recusandae quisquam odit, esse delectus iure modi aut earum repellendus ratione laudantium perferendis?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nam libero nisi doloremque non placeat. Neque necessitatibus molestiae assumenda ratione delectus ullam cumque. Provident, fugiat perspiciatis qui officiis non sequi!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae doloremque illum modi earum inventore et, ab consequatur repellat cum veritatis. Nemo voluptates minima enim animi ipsam incidunt molestias libero quidem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis perferendis natus voluptatum ducimus explicabo, nam eos repellendus sint beatae ullam dolorum distinctio? Sapiente vitae quia consectetur ab laudantium qui?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </Grid>
    );
}
export default Valores
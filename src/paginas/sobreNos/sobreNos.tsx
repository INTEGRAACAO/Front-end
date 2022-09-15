import { Box, Grid, TextField} from '@material-ui/core';
import './sobreNos.css';
import React from 'react';

function SobreNos(){
    return(
<Grid container className='sobrenos-bg'>
    <Grid item xs={12} sm={12}>
        <Box className='img-sobrenos'>
        <img src="https://i.imgur.com/DMz7KbK.png" alt="" className='img-sobrenos'/>
        </Box>
        <Box className='text-sobrenos'>
            <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam vitae amet veniam natus ullam hic perferendis sed placeat dolor cum quibusdam inventore rerum temporibus quae fuga veritatis doloribus commodi quasi nobis ut labore nesciunt, quas autem? Tempora architecto illo quos recusandae quaerat laudantium, inventore explicabo, beatae natus esse quia expedita modi, ducimus iure voluptatibus id aspernatur fugit. In nisi dolores vitae nobis eveniet dolorem unde, eos eius, ipsam commodi enim. Consectetur quas molestiae animi vel natus error facilis consequatur quae nam fugit repellendus repellat odio quo, aut, voluptate ratione voluptatibus aperiam, eveniet pariatur ea! Accusantium ut saepe reprehenderit deserunt ea!
            </h3>
        </Box>
        
        <Box className='img-equipe'>        
        <img src="https://i.imgur.com/DtYqeBn.png" alt="" className='img-equipe'/> 
        </Box>
        <div className='equipe-container'>        
            <div className='div-participante'>
            <img src="https://i.imgur.com/zClShYH.png" alt="" className='img-participante'/> 
            <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
            </div>

            <div className='div-participante'>
            <img src="https://i.imgur.com/6YKW6ML.png" alt="" className='img-participante'/>
            <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
            </div>
        </div>
        <div className='equipe-container'>
        <div className='div-participante'>   
        <img src="https://i.imgur.com/ODGZmAM.png" alt="" className='img-participante'/> 
        <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
        </div>
        
        <div className='div-participante'>
        <img src="https://i.imgur.com/r5KJRPG.png" alt="" className='img-participante'/>
        <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
        </div>
        
        <div className='div-participante'>
        <img src="https://i.imgur.com/0IOBAVz.png" alt="" className='img-participante'/>
        <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
        </div>

        </div>

        <div className='equipe-container'>
            <div className='div-participante'>
            <img src="https://i.imgur.com/oo33CLH.png" alt="" className='img-participante'/>
            <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
            </div>

            <div className='div-participante'>
            <img src="https://i.imgur.com/WHVncsX.png" alt="" className='img-participante'/>
            <h4> deserunt reprehenderit. Facilis harum a, autem iusto rem architecto aliquid voluptas accusamus fugit officia nisi eaque est non voluptatibus delectus enim hic quia quas!</h4>
            </div>
        </div>
    </Grid>
</Grid>
)

}

export default SobreNos;
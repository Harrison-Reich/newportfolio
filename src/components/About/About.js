import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Item from '@mui/material/ListItem'


const About = () => {
  return (
    <>
      <Grid>
        <Container>
          <Box marginTop={27}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h1' align="center">
              Harrison R. Reich's
            </Typography>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h3' align="center">
              Portfolio Website
            </Typography>
          </Box>
          <Box marginTop={26}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h2' align="left">
              About
            </Typography>
            <Grid container columnSpacing={{ xs: 1 }}>
              <Grid item xs={6}>
                <Item>
                  <Box sx={{ maxWidth: 400 }} >
                    <Card>
                      <CardMedia
                        component="img"
                        height="400"
                        image="https://media-exp1.licdn.com/dms/image/C5603AQGsruXwe9BMCg/profile-displayphoto-shrink_400_400/0/1604837439389?e=1649289600&v=beta&t=A3Bvmw8NwIzcekx1HuoT22cyM15COFD9vfVgh7aW0XQ">
                      </CardMedia>
                    </Card>3
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Typography fontFamily="" color="white" gutterBottom variant='h5' align="left">
                    Hello! My name is Harrison Reich and welcome to my portfolio website! I am a UCI Bootcamp student learning how to become a Full Stack Web Developer! I have a background in graphic design and aim to make eye catching, easy to use websites! Take a look at some of my work in the Projects section below. If you have any questions, please contact me using the form at the bottom!
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  );
}

export default About;
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Item from '@mui/material/ListItem'


const About = () => {
  return (
    <>
      <Grid>
        <Container>
          <Box marginTop={9}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h1' align="center">
              Harrison R. Reich's
            </Typography>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h2' align="center">
              Portfolio Website
            </Typography>
          </Box>
          <Box marginTop={9}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h2' align="left">
              About
            </Typography>
            <Grid sx={{ displayFlex: "row" }} item xs={6}>
              <Item>
                <Box sx={{ maxWidth: 300 }} >
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image="https://media-exp1.licdn.com/dms/image/C5603AQGsruXwe9BMCg/profile-displayphoto-shrink_400_400/0/1604837439389?e=1649289600&v=beta&t=A3Bvmw8NwIzcekx1HuoT22cyM15COFD9vfVgh7aW0XQ">
                    </CardMedia>
                  </Card>
                </Box>
              </Item>
              <Item>
                <Typography fontFamily="" color="white" gutterBottom variant='h6' align="right">
                  Hello! My name is Harrison Reich and welcome to my portfolio website! I am a UCI Bootcamp student learning how to become a Full Stack Web Developer! I have a background in graphic design and aim to make eye catching, easy to use websites! Take a look at some of my work in the Projects section below.
                </Typography>
              </Item>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </>
  );
}

export default About;

{/* <Box>
  <Card sx={{ maxWidth: 300 }} >
    <CardMedia
      component="img"
      height="300"
      image="https://media-exp1.licdn.com/dms/image/C5603AQGsruXwe9BMCg/profile-displayphoto-shrink_400_400/0/1604837439389?e=1649289600&v=beta&t=A3Bvmw8NwIzcekx1HuoT22cyM15COFD9vfVgh7aW0XQ">
    </CardMedia>
  </Card>
</Box> */}
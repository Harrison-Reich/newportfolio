import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const portfolio = () => {
  return (
    <>
      <Grid>
        <Container>
          <Box marginTop={10}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h2' align="left">
              Projects
            </Typography>
          </Box>
        </Container>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={4} justifyContent='center' alignItems='center'>
          <Item xs={4} justifyContent='center' alignItems='center'>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://user-images.githubusercontent.com/93016157/144180815-ed7b2f82-88bb-4c49-85c9-5bc75bf7c9cf.png"
                alt="Team Member Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Project 1: Date Night
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project demonstrates how to create a web application where a user can make a request to an api, the ability to save items and move them to another page, as well as view all saved items.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://github.com/Harrison-Reich/project-ghoat' size="small">Github Repository</Button>
                <Button href='https://lohasot.github.io/project-ghoat/' size="small">Live App</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} justifyContent='center' alignItems='center'>
          <Item xs={4} justifyContent='center' alignItems='center'>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://user-images.githubusercontent.com/88170746/148446402-1f6f68b0-2773-446c-a4a8-7a6ca74e6cbe.png"
                alt="Team Member Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Project 2: Smarter Barter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project demonstrates how to create a web application where a user can be created and added to a database, the ability to sign in and actively use the website, and the ability to post items and comments.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://github.com/Harrison-Reich/smarterBarter/tree/main' size="small">Github Repository</Button>
                <Button href='https://github.com/Harrison-Reich' size="small">Live App</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} justifyContent='center' alignItems='center'>
          <Item xs={4} justifyContent='center' alignItems='center'>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://i.redd.it/6ewt085xd7131.jpg"
                alt="Team Member Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Project 3: Console.log
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This project demonstrates how to create a web application where a user can be created and added to a database, the ability to sign in and actively use the website, and the ability for users to create posts and comments.
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://github.com/Harrison-Reich/console.log' size="small">Github Repository</Button>
                <Button href='https://smartbartering.herokuapp.com/login.html' size="small">Live App</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </>
  )
}

export default portfolio
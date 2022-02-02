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
          <Box marginTop={25}>
            <Typography fontFamily="-apple-system" color="white" gutterBottom variant='h2' align="left">
              Projects
            </Typography>
          </Box>
        </Container>
      </Grid>
    </>
  )
}

export default portfolio
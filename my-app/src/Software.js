import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPostsw from './FeaturedPostSw';
import MSAPP from './Images/Softwaredev/Moodscape/MSAPP.png';
import trainerft from './Images/Softwaredev/./Trainer/trainerft.png';
import Spot from './Images/Softwaredev/./Salesspot/Spot.png'
import Featuredsw from './Images/Softwaredev/Featuredsw.png';
import Box from '@mui/material/Box';


//software dev project section

//featured projects
const featuredPosts = [
  {
    image: MSAPP,
    imageLabel: 'Moodscape',
    url: '/Moodscape'
  },
  {
    image: trainerft,
    imageLabel: 'Personal Trainer',
    url: '/PersonalTrainer'
  },
  {
    image: Spot,
    imageLabel: 'Sales Spot',
    url: '/SalesSpot'
  },
];

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
  
      <Container maxWidth="lg">
    
        <main>
      
        <Box
            component="img"
            sx={{
              height: { xs: 'auto', sm: '100px' },
              width: { xs: '100%', sm: 'auto' },
              maxHeight: { xs: '200px', sm: '100px' },
              maxWidth: '100%',
            }}
            src={Featuredsw}
            alt="featured"
          />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPostsw post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      
   
     
    </ThemeProvider>
  );
}

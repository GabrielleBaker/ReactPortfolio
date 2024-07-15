import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPostsw from '../components/FeaturedPostSw';
import ArtStudio from '../Images/Blender/Room/ArtStudio.png'
import Featuredblnd from '../Images/Blender/AFTBlnd.png';
import Box from '@mui/material/Box';
import Showroom from '../Images/Blender/Cutlery/Showroom.png';
import Magnet from '../Images/Blender/Magnet/Magnet.png';
import Clock from '../Images/Blender/Clock/Clock.png';
//blender project section

//featured projects
const featuredPosts = [
  {
    image: ArtStudio,
    imageLabel: 'ArtStudio',
    url: '/ArtStudio'
    
  },
  {
    image: Showroom,
    imageLabel: 'Cutlery Set',
    url: '/ShowRoom'
  },
  {
    image: Clock,
    imageLabel: 'Clock',
    url: '/Clock'
  },
  {
    image: Magnet,
    imageLabel: 'Magnet',
    url: '/Magnet'
  },
];

const defaultTheme = createTheme();

export default function Blender() {
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
            src={Featuredblnd}
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

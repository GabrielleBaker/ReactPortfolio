import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPostsw from '../components/FeaturedPostSw';
import WHSDVATFeature from '../Images/Gamedev/WHSDVAT/WHSDVATFeature.png'
import Featuredgdev from '../Images/Gamedev/Featuredgdev.png';
import Box from '@mui/material/Box';
import SSFeatured from '../Images/Gamedev/Suki/SSFeatured.png'
import SmallWorld from '../Images/Gamedev/SmallWorld/SmallWorld.png';
import LL from '../Images/Gamedev/Lavaland/LL.png';

//game dev project section

//featured projects
const featuredPosts = [
  {
    image: SSFeatured,
    imageLabel: 'Suki Scroller',
    url: '/SukiScroller'
    
  },
  {
    image: SmallWorld,
    imageLabel: 'Small World',
    url:'/SmallWorld'
  },
  {
    image: WHSDVATFeature,
    imageLabel: 'whsdvat',
    url: '/SValley'
  },
  {
    image: LL,
    imageLabel: 'Lavaland',
    url:'/Lavaland'
  }
];

const defaultTheme = createTheme();

export default function Gamedev() {
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
            src={Featuredgdev}
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

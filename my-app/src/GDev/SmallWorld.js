import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from '../components/Carousel';
import UnityLink from '../components/UnityLink';
import UnityEmbedding from '../components/UnityEmbedding';
import smallworld from '../Images/Gamedev/SmallWorld/SmallWorld.png';
import GHButton from '../components/GithubButton';
import ConstructionIcon from '@mui/icons-material/Construction';

//images for the carousel
const images =[
  
  {
    src: smallworld, alt: 'Login Image', legend:''
  },
  
];



const defaultTheme = createTheme();

export default function SmallWorld() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <h1>About Small World</h1>
        <GHButton link="https://github.com/GabrielleBaker/Small-World"></GHButton>
        <br></br>
        <UnityLink link={'https://play.unity.com/en/games/8b51af04-75f5-4508-9067-948f3a0331a4/small-world'}></UnityLink>

        <br></br>
       
          <p>
          <ConstructionIcon></ConstructionIcon> This page is under construction, please check back later.
          </p>

        
        </main>
      </Container>
      
    </ThemeProvider>
  );
}

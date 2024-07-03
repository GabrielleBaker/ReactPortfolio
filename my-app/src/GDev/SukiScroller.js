import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from '../components/Carousel';
import GHButton from '../components/GithubButton';
import SSTitle from '../Images/Gamedev/Suki/SSTitle.png';
import SSFeatured from '../Images/Gamedev/Suki/SSFeatured.png';
import jump from '../Images/Gamedev/Suki/jump.png';
import sukilvl2 from '../Images/Gamedev/Suki/sukilvl2.png';
import Sukiscroll from '../Images/Gamedev/Suki/Sukiscroll.png';
import sukiscroller from '../Images/Gamedev/Suki/sukiscroller.png';
import UnityLink from '../components/UnityLink';
import UnityEmbedding from '../components/UnityEmbedding';

//images for the carousel
const images =[
  {
   src: SSFeatured, alt: 'SS', legend:''
  },
  {
    src: jump, alt: 'Jumping', 
  },
  {
    src: sukiscroller, alt: 'SS',
  },
  {
    src: Sukiscroll, alt: 'Start', 
  },
  {
    src: sukilvl2, alt: 'Orders Image', 
  },
  
];


const defaultTheme = createTheme();

export default function SukiScroller() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <img src={SSTitle} style={{width:'50%'}}/>
        <br></br>
        <GHButton link="https://github.com/GabrielleBaker/Suki-Platformer"></GHButton>
        <br></br>
        <UnityLink link={'https://play.unity.com/mg/other/suki-platformer'}></UnityLink>
        
          <p>
          Suki Scroller is a 2D platformer game developed with Unity Engine 
          and published on Unity Play.  
          <br></br>
            The player uses the AWSD keys and space bar to move the little dog with the goal of
            navigating across the icebergs, jumping from one platform to the next.
            The space bar is used to jump. 
            The player can eat various items along the way which have unexpected results.
            Feeding a dog meat? She might go FAST!!!
            But feeding a dog fish bones or chocolate? 
            That's simply bad dog ownership! 
            When the player dies, they respawn at the start of the level, 
            but not before flashing twice to show that they have died.
            Level 1 takes you across an icy plane, or winter in Finland, whatever you want to call it.
            Level 2 however, is not complete. 
            In level 2 I tried my hand at making my own drawing of Suki in 
            Clip Studio Pro, and turning it into a sprite. 
            Idle breathing and stretching animations were added with Unity.
            This was the first time I worked with particles for snow and with animations in Unity.
            This was made with a variety of assets found online and on Unity Asset Store in addition to the one Suki sprite I made myself.
          </p>

        <h2>Try it out: </h2>
        <UnityEmbedding 
        link={'https://play.unity.com/webgl/55d53593-f9ab-436b-8514-c8844c0923c7?screenshot=false&embedType=embed'}></UnityEmbedding>
       
        <h3>Features & Implementation:</h3>
          <p>
          2D Game developed with Unity Engine
          <br></br>
          Asset importing from Unity Store
          <br></br>
          Published to Unity Play
          <br></br>
          Particles 
          <br></br>
          Sprite design, drawing and importing from Clip Studio Pro<br></br>
          Sprite animations in Unity
          <br></br>
          C# scripting
          <br></br>
          </p>

        </main>
      </Container>
      
    </ThemeProvider>
  );
}

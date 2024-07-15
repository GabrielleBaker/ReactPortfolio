import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CarouselComponent from '../components/Carousel';
import GHButton from '../components/GithubButton';
import SDVTitle from '../Images/Gamedev/WHSDVAT/SDVTitle.png';
import UnityLink from '../components/UnityLink';
import UnityEmbedding from '../components/UnityEmbedding';
import WHSDVAT from '../Images/Gamedev/WHSDVAT/WHSDVATFeature.png';
import Shome from '../Images/Gamedev/WHSDVAT/home.png';
import minimenu from '../Images/Gamedev/WHSDVAT/minimenu.png';
import player from '../Images/Gamedev/WHSDVAT/player.png';
import sdvmenu from '../Images/Gamedev/WHSDVAT/sdvmenu.png';
import sdv from '../Images/Gamedev/WHSDVAT/whsdvat.png';

//images for the carousel
const images =[
  {
   src: WHSDVAT, alt: 'SS', legend:''
  },
  {
    src: Shome, alt: 'Jumping', 
  },
  {
    src: sdvmenu, alt: 'SS',
  },
  {
    src: sdv, alt: 'Start', 
  },
  {
    src: player, alt: 'Orders Image', 
  },
  {
    src: minimenu, alt: 'Orders Image', 
  },
];


const defaultTheme = createTheme();

export default function SVAT() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        
        <CarouselComponent images={images}/>
        <img src={SDVTitle} style={{width:'50%'}}/>
        <br></br>
        <GHButton link="https://github.com/GabrielleBaker/We-Have-Stardew-Valley-at-Home"></GHButton>
        <br></br>
        <UnityLink link={'https://play.unity.com/mg/other/we-have-stardew-valley-at-home'}></UnityLink>
        
          <p>
          We Have Stardew Valley at Home is a mobile 2D game developed with Unity Engine 
          and published on Unity Play. 
          <br></br>
          Named after the iconic game Stardew Valley and the meme 'we have xyz at home' which is what most parents tell their kids instead of getting them the genuine product the child is asking for, instead offering a meager substitute.
          This is a small mobile game that features a joystick controller for the player to navigate the 2D pixel art style environment.
          The player controls the little bunny character and aims to collect the grass, carrots and easter eggs which are counted on the UI toolbar.
          This game is hardly complete or perfect but a hobby project for my own enjoyment as I learn about mobile game controls and user interfaces.
          The player can also enter into the houses by colliding with either of the doors.
          To leave the house, collide with the right of the screen.
          This game was made using a variety of sprites from the Unity Asset Store.
             </p>


        <h2>Try it out: </h2>
        <UnityEmbedding 
        link={'https://play.unity.com/webgl/4c1edf66-6920-4d54-9df9-82158116d6a3?screenshot=false&embedType=embed'}></UnityEmbedding>
    
        <h3>Features & Implementation:</h3>
          <p>
          2D Game developed with Unity Engine
          <br></br>
          Asset importing from Unity Store
          <br></br>
          Published to Unity Play
          <br></br>
          Joystick controls
          <br></br>
          Menu & user interface
          <br></br>
          C# scripting
          <br></br>
          </p>

        </main>
      </Container>
      
    </ThemeProvider>
  );
}

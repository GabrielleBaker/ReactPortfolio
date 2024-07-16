import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import  Kit from './Images/Kitpic.jpeg';
import AboutKitt from './Images/AboutKitt.png';
import flag from './Images/flag.png';

const mainFeaturedPost = {
  titleimage: AboutKitt,
  description:(
    <>
    Kit, final year student at 
    <a href='https://www.haaga-helia.fi/en' 
        target="_blank"
        rel="noopener noreferrer"
        >  Haaga Helia University of Applied Sciences </a> 
        completing a bachelors degree in 
        <a 
        href='https://www.haaga-helia.fi/en/bachelor/degree-programme-business-information-technology' 
        target="_blank"
        rel="noopener noreferrer"
        > Business Information Technology. 
        </a>
    <br></br>
    Majoring in Software Development, 
    with special interest in Video Game Design & Development and 3D modeling.
    <br></br> 
    Residing in the Helsinki area since 2020 with my partner and our dog.
    </>
    ),  
  image: Kit,
  imageText: 'Kit picture',
};

const featuredPosts = [
  {
    title: 'Programming Languages & Other Proficiencies',
   
    description:(
      <>
      Java<br></br> 
      Javascript<br></br>
      C# (basic scripting for games in Unity)<br></br>
      React.js & React Native<br></br>
      HTML & CSS <br></br>
      SQL <br></br>
      Unity<br></br>
      Blender  <br></br>
      MS Azure <br></br>
      MS Office Package (Word, Excel, PowerPoint)<br></br>
      MySQL <br></br>
      Springboot<br></br>
  </>
    )
  },
  {
    title: 'Education',
   
    description:(
      <>
      <a href='https://www.haaga-helia.fi/en' 
        target="_blank"
        rel="noopener noreferrer"
        >  Haaga Helia University of Applied Sciences </a> 
         <br></br>
         <a 
        href='https://www.haaga-helia.fi/en/bachelor/degree-programme-business-information-technology' 
        target="_blank"
        rel="noopener noreferrer"
        > Business Information Technology. 
        </a>
      <br></br>
      Graduation date: Fall 2024/ Spring 2025
      <br></br> 
      GPA: 4.67 
      <br></br>
      Transcript available on request.
      </>
    )
  },
  {
    title: 'Values & Strengths',
   
    description:(
      <>
      As part of the LGBTQIA+ community; 
      intersectional equality and inclusivity are of 
      paramount importance to me. 
      <br></br>
      My values are integrity, kindness and honesty. 
      <br></br>
      <img src={flag}></img>
      <br></br>
      I work hard and do my best, I'm shy but a quick learner. 
      My biggest strengths are innovation, creativity and determination. 
      These combine into my super strength: figuring it out. 
      If I dont know how to do something, I figure out how to do it.
      </>
    )
  },
 

];


const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          </Grid>
        </main>
      </Container>
     
    </ThemeProvider>
  );
}

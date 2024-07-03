import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Gamedev from './GDev/Gamedev';
import Blender from './Blender/Blender';
import Software from './SwDev/Software';
import Home from './Home';
import Kit from './Images/Kit.png';
import Moodscape from './SwDev/Moodscape';
import SalesSpot from './SwDev/SalesSpot';
import PersonalTrainer from './SwDev/PersonalTrainer';
import ScrollToTop from "react-scroll-to-top";

const sections = [
  {title: 'Home', url: '/Home'},
  { title: 'Software Dev', url: '/Software' },
  { title: 'Game Dev', url: '/Gamedev' },
  {title: 'Blender', url: '/Blender'},
  
  
];

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Header image={Kit} sections={sections} />
          <main>
            
          <ScrollToTop smooth 
          // scroll to top button for all pages
          />
            <Routes>
              <Route path="/Software" element={<Software />} />
              <Route path="/Gamedev" element={<Gamedev />} />
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/Blender" element={<Blender/>}></Route>
              <Route path="/Moodscape" element={<Moodscape/>}/>
              <Route path="/SalesSpot" element={<SalesSpot/>}/>
              <Route path="/PersonalTrainer" element={<PersonalTrainer/>}/>
            </Routes>
            
          </main>
        </Container>
        <Footer title="Author: Kit Baker " description="03/07/2024" />
      </Router>
    </ThemeProvider>
  );
}

export default App;

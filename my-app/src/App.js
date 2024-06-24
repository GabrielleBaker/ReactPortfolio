import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import Gamedev from './Gamedev';
import Software from './Software';
import Home from './Home';
import Kit from './Images/Kit.png';
import Moodscape from './Moodscape';
import SalesSpot from './SalesSpot';
import PersonalTrainer from './PersonalTrainer';
import ScrollToTop from "react-scroll-to-top";

const sections = [

  { title: 'Software', url: '/Software' },
  {title: 'Home', url: '/Home'},
  { title: 'Gamedev', url: '/Gamedev' },
  
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
              <Route path="/Moodscape" element={<Moodscape/>}/>
              <Route path="/SalesSpot" element={<SalesSpot/>}/>
              <Route path="/PersonalTrainer" element={<PersonalTrainer/>}/>
            </Routes>
            
          </main>
        </Container>
        <Footer title="Author: Kit Baker " description="24/06/2024" />
      </Router>
    </ThemeProvider>
  );
}

export default App;

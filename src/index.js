import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';


import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <NavBar/>
    <Hero/>
    <About/>
    <Stats/>
    <Skills/>
    <Resume/>
    <Projects/>
    <Contact/>
     <Footer/>
    </React.StrictMode>
);


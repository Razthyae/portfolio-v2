import './App.css';
import { Main } from './Components/Main/Main'
import { AboutMe } from './Components/AboutMe/AboutMe';
import { Contact } from './Components/Contact/Contact';
import { Pricing } from './Components/Pricing/Pricing';
import { Projects } from './Components/Projects/Projects';
import { Skills } from './Components/Skills/Skills';
import { Logo } from './Components/Logo/Logo'
import { GoBack } from './Components/GoBack/GoBack';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';


function App() {
  const location = useLocation()

  const handleNavigation = () => {
   
    
    const backgroundBigger = () => {
   
      let background = document.getElementById("background")
      background.style.width = "150vw"
      background.style.height = "150vw"    
      }

      const backgroundSmaller = () => {
      
        let background = document.getElementById("background")
        background.style.width = "35vw"
        background.style.height = "35vw"    
        }


    location.pathname !== '/' ? backgroundBigger() : backgroundSmaller()
  }

  useEffect(handleNavigation, [location.pathname])

  return (

    <div>
      <GoBack />
      <div id="background"></div>
      
      <AnimatePresence mode='sync'>
      <Routes key={location.pathname} location={location}>

        <Route path='/aboutme' element={<AboutMe />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/pricing' element={<Pricing />} />

        <Route path='/projects' element={<Projects />} />

        <Route path='/skills' element={<Skills />} />

      <Route path='/' element={<div><Main /><Logo /></div>} />
      

      </Routes>
      </AnimatePresence>
      
    </div>


  );
}

export default App;

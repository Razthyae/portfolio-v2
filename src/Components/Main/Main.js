import React from "react";
import './Main.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navContainer = {
    visible: {
    
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        
        },
      },
      hidden: {
     
        transition: {
          when: "afterChildren",
        },
      },
}

const navButton = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
}

export const Main = () => {

    const backgroundTransform = () => {
    let background = document.getElementById("background")
    background.style.width = "150vw"
    background.style.height = "150vw"    
    }

    

    return (
        <section id="main">
            .
            <motion.div className="navContainer"
 initial="hidden"
 animate="visible"
 variants={navContainer}
            
            >
                <motion.div className="navButtons left" variants={navButton}><Link to='/aboutme' onClick={backgroundTransform}>About Me</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton}><Link to='/skills' onClick={backgroundTransform}>Skills</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton}><Link to='/projects/' onClick={backgroundTransform}>Projects</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton}><Link to='/pricing' onClick={backgroundTransform}>Pricing</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton}><Link to='/contact' onClick={backgroundTransform}>Contact</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton}><Link to='/secret' onClick={backgroundTransform}>Secret</Link></motion.div>
            </motion.div>
        </section>
    )
}
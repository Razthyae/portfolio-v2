import React from "react";
import './Main.css'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navContainer = {
    visible: {
    
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.07,
          delayChildren: 0.5
         
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
    transition: { delay: 3}
}

export const Main = () => {

    const backgroundTransform = () => {
    let background = document.getElementById("background")
    background.style.width = "150vw"
    background.style.height = "150vw"    
    }

    

    return (
        <motion.section id="main"
        transition={{duration: 3}}
        exit={{opacity: 0}}
        >
            .
            <motion.div className="navContainer"
 initial="hidden"
 animate="visible"
 variants={navContainer}
            
            >
                <motion.div className="navButtons left" variants={navButton}  transition="transition" exit={{opacity: 0}} ><Link to='/aboutme' onClick={backgroundTransform}>About Me</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton} exit={{opacity: 0}} ><Link to='/skills' onClick={backgroundTransform}>Skills</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton} exit={{opacity: 0}}><Link to='/projects/' onClick={backgroundTransform}>Projects</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton} exit={{opacity: 0}}><Link to='/pricing' onClick={backgroundTransform}>Pricing</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton} exit={{opacity: 0}}><Link to='/contact' onClick={backgroundTransform}>Contact</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton} exit={{opacity: 0}}><Link to='/secret' onClick={backgroundTransform}>Secret</Link></motion.div>
            </motion.div>
        </motion.section>
    )
}
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

   

    

    return (
        <motion.section id="main"
        transition={{duration: 3}}
        exit={{opacity: 0}}
        >
            <motion.div className='mainHeader'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
            <h1>Front-End Developer</h1>
            <hr />
            <h2>Akash Kumar</h2>
            </motion.div>
            <motion.div className="navContainer"
 initial="hidden"
 animate="visible"
 variants={navContainer}
            
            >
                <motion.div className="navButtons left" variants={navButton}  transition="transition" exit={{opacity: 0}} ><Link to='/aboutme' >About Me</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton} exit={{opacity: 0}} ><Link to='/skills' >Skills</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton} exit={{opacity: 0}}><Link to='/projects/' >Projects</Link></motion.div>
                <motion.div className="navButtons right" variants={navButton} exit={{opacity: 0}}><Link to='/pricing' >Pricing</Link></motion.div>
                <motion.div className="navButtons left" variants={navButton} exit={{opacity: 0}}><Link to='/contact' >Contact</Link></motion.div>
                <motion.div className="navButtons right" id='secret' variants={navButton} exit={{opacity: 0}}><Link id='secrettext' to='/secret' >Secret</Link></motion.div>
            </motion.div>
        </motion.section>
    )
}
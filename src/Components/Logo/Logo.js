import React from "react";
import { motion } from "framer-motion";
import './Logo.css'
import Profile from './Profile.jpg'

export const Logo = () => {
    return (
        <motion.div id='logo'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{opacity: 0, transition: {duration: 0.5}}}>
            <img src={Profile}/>
        </motion.div>
    )
}
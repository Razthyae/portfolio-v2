import React from "react";
import { motion } from "framer-motion";
import './Logo.css'

export const Logo = () => {
    return (
        <motion.div id='logo'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{opacity: 0, transition: {duration: 0.5}}}>
            <div>
            Akash Kumar
            <hr />
            Front End Developer
            </div>
        </motion.div>
    )
}
import React from "react";
import { motion } from "framer-motion";
import './Logo.css'
import Profile from './Profile.jpg'
import Profile2 from './Profile2.png'
import Signature from './download(2).svg'

export const Logo = () => {
    return (
        <motion.div id='logo'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{opacity: 0, transition: {duration: 0.5}}}>
            <img id='logophoto' src={Profile2}/>
            <img id='logosignature' src={Signature} />
        </motion.div>
    )
}
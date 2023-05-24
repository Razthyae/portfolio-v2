import React from "react";
import './Contact.css'
import { easeInOut, motion } from "framer-motion";

export const Contact = () => {
    return (
        <motion.section id="contact" 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 3, ease: easeInOut}}>
            <div className='contactWrapper'>
                <div className="phone cta">Call me</div>
                <div className="phone number">+48 796 453 528</div>
            </div>

            <a href='https://m.me/ZealDJ'>
            <div className='contactWrapper'>
            <div className="phone cta">Messenger</div>
               <div className="phone number"> Click me!</div>
            </div>
            </a>

            <a href='mailto:a_kumar@poczta.fm'>
            <div className='contactWrapper'>
                <div className="phone cta">Mail</div>
                <div className="phone number">a_kumar@poczta.fm</div>
            </div>
            </a>

            <a href='https://razthyae.github.io/'>
            <div className='contactWrapper'>
                <div className="phone cta">GitHub</div>
                <div className="phone number">https://razthyae.github.io/</div>
            </div>
            </a>

            


        </motion.section>
    )
}
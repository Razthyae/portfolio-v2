import React from "react";
import { motion } from "framer-motion";
import Git from './git.svg'
import './Skills.css'


export const Skills = () => {
    return (
        <motion.section id="skills"
        key="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{opacity: 0, transition: {duration: 0.5}}}
    >
        <h1>Hi! I'm Akash</h1>
        <p>I'm a Front-End Developer based in Wrocław, Poland.
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <h2>Work</h2>
        <section id='work'>
            <div id='dj' className="tile">
                <img src={Git}></img>
                <span className="description">DJ</span>
            </div>
            <div id='dancer' className="tile">
                <img src={Git}></img>
                <span className="description">Dancer</span>
            </div>
            <div id='musician' className="tile">
                <img src={Git}></img>
                <span className="description">Musician</span>
            </div>
            <div id='editor' className="tile">
                <img src={Git}></img>
                <span className="description">Editor</span>
            </div>
        </section>
        <h2>Hobby</h2>
        <section id='hobby'>
            <div id='games' className="tile">
                <img src={Git}></img>
                <span className="description">Games (board, video) </span>
            </div>
            <div id='tennis' className="tile">
                <img src={Git}></img>
                <span className="description">Tennis</span>
            </div>
            <div id='singing' className="tile">
                <img src={Git}></img>
                <span className="description">Singing</span>
            </div>
        </section>
    </motion.section>
   
    )
}
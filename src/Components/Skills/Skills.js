import React from "react";
import { motion } from "framer-motion";
import Git from './git.svg'
import './Skills.css'
import Html from './html.svg'
import Css from './css.svg'
import JavaScript from './javascript.svg'
import TypeScript from './typescript.svg'
import ReactImg from './react.svg'
import Redux from './redux.svg'
import Emotion from './emotion.png'
import Framer from './framer.svg'
import GitHub from './github.svg'
import Mocha from './mocha.svg'

export const Skills = () => {
    return (
        <motion.section id="skills"
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <h1>Hi! I'm Akash</h1>
            <p>I'm a Front-End Developer based in Wrocław, Poland.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <h2>Languages</h2>
            <section id='languages'>
                <div id='html' className="skillsTile">
                    <img src={Html}></img>
                    <span className="skillsDescription">HTML</span>
                </div>
                <div id='css' className="skillsTile">
                    <img src={Css}></img>
                    <span className="skillsDescription">CSS</span>
                </div>
                <div id='javascript' className="skillsTile">
                    <img src={JavaScript}></img>
                    <span className="skillsDescription">JavaScript</span>
                </div>
                <div id='typescript' className="skillsTile">
                    <img src={TypeScript}></img>
                    <span className="skillsDescription">TypeScript</span>
                </div>
            </section>

            <h2>Libraries</h2>
            <section id='libraries'>
                <div id='react' className="skillsTile">
                    <img src={ReactImg}></img>
                    <span className="skillsDescription">React</span>
                </div>
                <div id='redux' className="skillsTile">
                    <img src={Redux}></img>
                    <span className="skillsDescription">React/Redux</span>
                </div>
                <div id='emotion' className="skillsTile">
                    <img src={Emotion}></img>
                    <span className="skillsDescription">Emotion React</span>
                </div>
                <div id='framer' className="skillsTile">
                    <img src={Framer}></img>
                    <span className="skillsDescription">Framer Motion</span>
                </div>
            </section>


            <h2>Version Control</h2>
            <section id='versioncontrol'>
                <div id='git' className="skillsTile">
                    <img src={Git}></img>
                    <span className="skillsDescription">Git</span>
                </div>
                <div id='github' className="skillsTile">
                    <img src={GitHub}></img>
                    <span className="skillsDescription">GitHub</span>
                </div>
                
            </section>

            <h2>Testing</h2>
            <section id='testing'>
                <div id='mocha' className="skillsTile">
                    <img src={Mocha}></img>
                    <span className="skillsDescription">Mocha</span>
                </div>
             
            </section>

        </motion.section>

    )
}
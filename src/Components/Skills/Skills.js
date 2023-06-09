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
import Tailwind from './tailwind.png'
import { useTranslation } from "react-i18next";

export const Skills = () => {
const {t} = useTranslation()


    return (
        <motion.section id="skills"
            key="skills"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >


<h1>{t('skills-header')}</h1>

            <fieldset>
                
                <h2 className="skillsCategory">{t('skills-languages')}</h2>
                <hr></hr>
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
                        <span className="skillsDescription">Java<br></br>Script</span>
                    </div>
                    <div id='typescript' className="skillsTile">
                        <img src={TypeScript}></img>
                        <span className="skillsDescription">Type<br></br>Script</span>
                    </div>
                </section>
            </fieldset>

         

            <fieldset>
            <h2 className="skillsCategory">{t('skills-libraries')}</h2>
                <hr></hr>
                <section id='libraries'>
                    <div id='react' className="skillsTile">
                        <img src={ReactImg}></img>
                        <span className="skillsDescription">React</span>
                    </div>
                    <div id='redux' className="skillsTile">
                        <img src={Redux}></img>
                        <span className="skillsDescription">React <br></br>/Redux</span>
                    </div>
                    <div id='emotion' className="skillsTile">
                        <img src={Emotion}></img>
                        <span className="skillsDescription">Emotion React</span>
                    </div>
                    <div id='framer' className="skillsTile">
                        <img src={Framer}></img>
                        <span className="skillsDescription">Framer Motion</span>
                    </div>
                    <div id='tailwind' className="skillsTile">
                        <img src={Tailwind}></img>
                        <span className="skillsDescription">Tailwind</span>
                    </div>
                </section>
            </fieldset>

           
            <fieldset>
            <h2 className="skillsCategory">{t('skills-version')}</h2>
                <hr></hr>
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
            </fieldset>


         

            <fieldset>
            <h2 className="skillsCategory">{t('skills-testing')}</h2>
                <hr></hr>
                <section id='testing'>
                    <div id='mocha' className="skillsTile">
                        <img src={Mocha}></img>
                        <span className="skillsDescription">Mocha</span>
                    </div>
                </section>
            </fieldset>

        </motion.section>

    )
}
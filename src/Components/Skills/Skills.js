import React from "react";
import { motion } from "framer-motion";
import Git from './git.svg'
import './Skills.css'
import Html from './html.svg'
import Css from './css.svg'
import JavaScript from './javascript.svg'
import TypeScript from './typescript.svg'
import Vue from './vue.svg'
import Jest from './jest.svg'
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
                        <img src={Html} alt="HTML icon"></img>
                        <span className="skillsDescription">HTML</span>
                    </div>
                    <div id='css' className="skillsTile">
                        <img src={Css} alt="CSS icon"></img>
                        <span className="skillsDescription">CSS</span>
                    </div>
                    <div id='javascript' className="skillsTile">
                        <img src={JavaScript} alt="JavaScript icon"></img>
                        <span className="skillsDescription">Java<br></br>Script</span>
                    </div>
                    <div id='typescript' className="skillsTile">
                        <img src={TypeScript} alt="TypeScript icon"></img>
                        <span className="skillsDescription">Type<br></br>Script</span>
                    </div>
                </section>
            </fieldset>

         

            <fieldset>
            <h2 className="skillsCategory">{t('skills-libraries')}</h2>
                <hr></hr>
                <section id='libraries'>
                    <div id='vue' className="skillsTile">
                        <img src={Vue} alt="Vue icon"></img>
                        <span className="skillsDescription">Vue</span>
                    </div>
                    <div id='react' className="skillsTile">
                        <img src={ReactImg} alt="React icon"></img>
                        <span className="skillsDescription">React</span>
                    </div>
                    <div id='redux' className="skillsTile">
                        <img src={Redux} alt="Redux icon"></img>
                        <span className="skillsDescription">React <br></br>/Redux</span>
                    </div>
                    <div id='tailwind' className="skillsTile">
                        <img src={Tailwind} alt="Tailwind icon"></img>
                        <span className="skillsDescription">Tailwind</span>
                    </div>
                </section>
            </fieldset>

           
            <fieldset>
            <h2 className="skillsCategory">{t('skills-version')}</h2>
                <hr></hr>
                <section id='versioncontrol'>
                    <div id='git' className="skillsTile">
                        <img src={Git} alt="Git icon"></img>
                        <span className="skillsDescription">Git</span>
                    </div>
                    <div id='github' className="skillsTile">
                        <img src={GitHub} alt="GitHub icon"></img>
                        <span className="skillsDescription">GitHub</span>
                    </div>
                </section>
            </fieldset>


         

            <fieldset>
            <h2 className="skillsCategory">{t('skills-testing')}</h2>
                <hr></hr>
                <section id='testing'>
                    <div id='jest' className="skillsTile">
                        <img src={Jest} alt="Jest icon"></img>
                        <span className="skillsDescription">Jest</span>
                    </div>
                </section>
            </fieldset>

        </motion.section>

    )
}
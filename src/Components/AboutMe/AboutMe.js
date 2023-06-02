import React from "react";
import './AboutMe.css'
import DJ from './DJ.jpg'
import Dancer from './Dancer.jpg'
import Musician from './Musician.jpg'
import Editor from './Editor.png'
import Tennis from './Tennis.jpg'
import Gamer from './Gamer.jpg'
import Singer from './Singer.jpg'
import { motion } from "framer-motion";


export const AboutMe = () => {
    return (

        <motion.section id="aboutme"
            key="aboutme"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <h1>Hi! I'm Akash</h1>
            <p>I'm a Front-End Developer based in Wrocław, Poland.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <h2>Work</h2>
            <section id='work'>
                <div id='dj' className="aboutTile">

                    <div className="aboutTileWrapper">

                        <div className='aboutTileLeft'>
                            <img src={DJ}></img>
                            <span className="aboutDescription">DJ</span>
                        </div>

                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>

                <div id='dancer' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Dancer}></img>
                            <span className="aboutDescription">Dancer</span>
                        </div>

                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


                <div id='musician' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Musician}></img>
                            <span className="aboutDescription">Musician</span>
                        </div>
                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


                <div id='editor' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Editor}></img>
                            <span className="aboutDescription">Editor</span>
                        </div>
                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


            </section>
            <h2>Hobby</h2>
            <section id='hobby'>


                <div id='games' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Gamer}></img>
                            <span className="aboutDescription">Games (board, video) </span>
                        </div>

                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


                <div id='tennis' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Tennis}></img>
                            <span className="aboutDescription">Tennis</span>
                        </div>

                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


                <div id='singing' className="aboutTile">
                    <div className="aboutTileWrapper">
                        <div className='aboutTileLeft'>
                            <img src={Singer}></img>
                            <span className="aboutDescription">Singing</span>
                        </div>

                        <div className="aboutTileRight">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""
                        </div>
                    </div>
                </div>


            </section>
        </motion.section>

    )
}
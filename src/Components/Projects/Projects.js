import React from "react";
import './Projects.css'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";




 
export const Projects = () => {
const {t} = useTranslation()

  const content = [
    {
      title: t('projects-4-title'),
      description:
        t('projects-4-description'),
      button: t('projects-visit'),
      image: "https://i.imgur.com/xsABjYH.png",
      user: "PRIZM",
      userProfile: "https://imgur.com/SokoSlD.png",
      website: "https://photos2stl.com/"
    },
    {
      title: t('projects-1-title'),
      description:
        t('projects-1-description'),
      button: t('projects-visit'),
      image: "https://i.imgur.com/9VjHrAd.png",
      user: "Akash Kumar :)",
      userProfile: "https://avatars.githubusercontent.com/u/115633122?v=4",
      website: "https://couplesgame.netlify.app/"
    },
    {
      title: t('projects-2-title'),
      description: t('projects-2-description'),
      button: t('projects-visit'),
      image: "https://i.imgur.com/2lFHrIs.jpg",
      user: "Just Move",
      userProfile: "https://i.imgur.com/sU8LWZt.jpg",
      website: "https://jmgrafik.netlify.app/"
    },
    {
      title: t('projects-3-title'),
      description: t('projects-3-description'),
      button: t('projects-visit'),
      image: "https://i.imgur.com/rbvC7fw.png",
      user: "Marko Anić",
      userProfile: "https://avatars.githubusercontent.com/u/73799942?v=4",
      website: "https://task-better-weigh.netlify.app/"
    }
  ];

    return (
        <motion.section id="projects"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        >
          <div id='projectsContainer'>
         
            <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center`
        }}
        >
          <div className="inner">
          
            <h1>{item.title}</h1>
            <hr className="projectsHr" />
            <p>{item.description}</p>
            <a href={item.website}>
            <button>{item.button}</button>
            </a>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              {t('projects-created')} <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
    </div>
        </motion.section>
    )
}
import React from "react";
import './Projects.css'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';
import "./slider-animations.css"

const content = [
  {
    title: "Just Move Scheduler",
    description:
      `Using React I have created scheduler for "Just Move" dance school, providing simple CMS. Backend functionality is provided by Supabase.`,
    button: "Visit site",
    image: "https://i.imgur.com/2lFHrIs.jpg",
    user: "Just Move",
    userProfile: "https://i.imgur.com/sU8LWZt.jpg",
    website: "https://jmgrafik.netlify.app/"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Visit site",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Visit site",
    image: "https://i.imgur.com/eaFYHmN.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];
 
export const Projects = () => {
    return (
        <section id="projects">
           <h1 id='projectsHeader'>PROJECTS</h1>
            <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.website}>
            <button>{item.button}</button>
            </a>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Created for <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
    
        </section>
    )
}
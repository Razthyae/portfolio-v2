import React from "react";
import "./AboutMe.css";
import DJ from "./DJ2.jpg";
import Dancer from "./Dancer.jpg";
import Musician from "./Musician.jpg";
import Editor from "./Editor.png";
import Tennis from "./Tennis.jpg";
import Gamer from "./Gamer.jpg";
import Singer from "./Singer.jpg";
import Scroll from "./scroll.png";
import { easeInOut, motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <motion.section
      id="aboutme"
      key="aboutme"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <section id="aboutintro">
        <h1>Hi!</h1>
        <h3>
          {" "}
          I'm Akash Kumar and I'm a 34-years-old Front-End Developer and artist
          based in Wrocław, Poland.{" "}
        </h3>
        <p className="introp">
          For technical info visit "Skills" and "Projects" sections. Here you
          can get to know about my non-programming side.
        </p>
        <p className="introp">Scroll down!</p>

        <div className="scrollarrowscontainer">
          <motion.div className="scrollarrows"
          animate = {{y: [0, 15, 0]}}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: easeInOut

          }}
          >
            <img className="scrollarrow" src={Scroll} />
            <img ClassName="scrollarrow" src={Scroll} />
            <img ClassName="scrollarrow" src={Scroll} />
          </motion.div>
        </div>
      </section>
      <hr id="aboutmehr"></hr>

      <h2 id="worktitle">Work</h2>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div class="timeline__event__icon ">
            <img src={DJ} />
          </div>
          <div class="timeline__event__date">DJ</div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">
              DJ Zeal <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                As DJ Zeal I've been DJing at many dance festivals in Poland and
                abroad (Czech Republic, Ukraine, Germany, Austria, Malta,
                Belarus, Netherlands), entertaining dancers with my selection of
                zouk, bachata, kizomba and salsa.
                <br />
                I'm also creator of Sensualove Events that took place in years
                2016-2018.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Dancer}></img>
          </div>
          <div class="timeline__event__date">Dancer </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Zouk, bachata, salsa, kizomba <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                Professional dancer with > 10 years of experience. Teaching at
                the biggest festivals, performing shows, leading successful
                choreography group - been there, done that! :)
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type1">
          <div class="timeline__event__icon">
            <img src={Musician}></img>
          </div>
          <div class="timeline__event__date">Musician</div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Tuba, electric guitar, bass guitar <hr />{" "}
            </div>
            <div class="timeline__event__description">
              <p>
                As Academy of Music graduate, tuba, guitar, bass guitar player I
                played in all kind of musical bands - along with working
                full-time in Representative Band of Land Forces in Wrocław.
                <br></br>I created onearmymanpl YT channel - give it a listen!
                :)
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Editor} />
          </div>
          <div class="timeline__event__date">Editor</div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Video Editing <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                I have edited videos for my dance projects, for music projects
                (including music video for "GMO" group) and for the needs of
                Representative Band of Land Forces.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="hobbytitle">Hobby</h2>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
          <div class="timeline__event__icon ">
            <img src={Tennis} />
          </div>
          <div class="timeline__event__date">
            Tennis <br></br>
            player
          </div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">
              NTRP ~ 2.5 <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                Up for the challenge! I've been playing for 1,5 years, slowly
                building my confidence arount the tennis court. Looking forward
                to meeting new opponents with same level.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Gamer}></img>
          </div>
          <div class="timeline__event__date">Gamer </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              Board games, video games, VR <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                I love to play games! <br />
                I own PC, Playstation 4, Oculus Quest 2 - there are many video
                game genres I enjoy, but Soulslikes are certainly top amongst
                them :) <br />
                As for board games..? Yes - please! <br />
                PS Does escape rooms count for a games..?
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type1">
          <div class="timeline__event__icon">
            <img src={Singer}></img>
          </div>
          <div class="timeline__event__date">Singer</div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">
              (Amateur) <hr />{" "}
            </div>
            <div class="timeline__event__description">
              <p>
                Opposite to my instrument playing skills - singing is just an
                innocent amatuer hobby. Took part in some workshops, took some
                private lessons - open for karaoke-night-out propositions :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

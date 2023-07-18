import React from "react";
import "./AboutMe.css";
import DJ from "./DJ2.jpg";
import Dancer from "./Dancer.jpg";
import Musician from "./Musician.jpg";
import Editor from "./Editor.png";
import Tennis from "./Tennis.jpg";
import Gamer from "./Gamer.jpg";
import Singer from "./Singer.jpg";
import ScrollWhite from "./scrollwhite.png";
import { easeInOut, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();

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
        <h1>{t("about-hi")}</h1>
        <h3>{t("about-akash")}</h3>
        <p className="introp">{t("about-technical")}</p>
        <p className="introp">{t("about-scroll")}</p>

        <div className="scrollarrowscontainer">
          <motion.div
            className="scrollarrows"
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: easeInOut,
            }}
          >
            <img className="scrollarrow" src={ScrollWhite} alt=" "/>
            <img ClassName="scrollarrow" src={ScrollWhite} alt=" "/>
            <img ClassName="scrollarrow" src={ScrollWhite} alt=" "/>
          </motion.div>
        </div>
      </section>
      <hr id="aboutmehr"></hr>

      <h2 id="worktitle">{t("about-work")}</h2>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
          <div class="timeline__event__icon ">
            <img src={DJ} alt="DJ"/>
          </div>
          <div class="timeline__event__date timeline-right">{t("about-dj")}</div>
          <div class="timeline__event__content timeline-left">
            <div class="timeline__event__title">
              {t("about-dj-description")} <hr />
            </div>
            <div class="timeline__event__description">
              <p>
                {t("about-dj-full-1")}
                <br />
                {t("about-dj-full-2")}
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Dancer} alt="Dancing with my dance partner Julia"></img>
          </div>
          <div class="timeline__event__date timeline-left">{t("about-dancer")} </div>
          <div class="timeline__event__content timeline-right">
            <div class="timeline__event__title">
              {t("about-dancer-description")} <hr />
            </div>
            <div class="timeline__event__description">
              <p>{t("about-dancer-full-1")}</p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Musician} alt="Playing the guitar in the army band"></img>
          </div>
          <div class="timeline__event__date timeline-right">{t("about-musician")}</div>
          <div class="timeline__event__content timeline-left">
            <div class="timeline__event__title">
              {t("about-musician-description")} <hr />{" "}
            </div>
            <div class="timeline__event__description">
              <p>
                {t("about-musician-full-1")}
                <br></br>
                {t("about-musician-full-2")}
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Editor} alt="Screenshot from one of videos edited by me"/>
          </div>
          <div class="timeline__event__date timeline-left">{t('about-editor')}</div>
          <div class="timeline__event__content timeline-right">
            <div class="timeline__event__title">
            {t('about-editor-description')} <hr />
            </div>
            <div class="timeline__event__description">
              <p>
              {t('about-editor-full')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 id="hobbytitle">{t('about-hobby')}</h2>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
          <div class="timeline__event__icon ">
            <img src={Tennis} alt="Tennis court"/>
          </div>
          <div class="timeline__event__date timeline-right">
          {t('about-tennis-1')} <br></br>
          {t('about-tennis-2')}
          </div>
          <div class="timeline__event__content timeline-left">
            <div class="timeline__event__title">
            {t('about-tennis-description')} <hr />
            </div>
            <div class="timeline__event__description">
              <p>
              {t('about-tennis-full')}
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Gamer} alt="Scythe board game"></img>
          </div>
          <div class="timeline__event__date timeline-left">{t('about-gamer')} </div>
          <div class="timeline__event__content timeline-right">
            <div class="timeline__event__title">
            {t('about-gamer-description')} <hr />
            </div>
            <div class="timeline__event__description">
              <p>
              {t('about-gamer-full-1')} <br />
              {t('about-gamer-full-2')} <br />
              {t('about-gamer-full-3')} <br />
              {t('about-gamer-full-4')}
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event animated fadeInUp delay-1s timeline__event--type2">
          <div class="timeline__event__icon">
            <img src={Singer} alt="Microphone"></img>
          </div>
          <div class="timeline__event__date timeline-right">              {t('about-singer')}
</div>
          <div class="timeline__event__content timeline-left">
            <div class="timeline__event__title">
            {t('about-singer-description')}
 <hr />{" "}
            </div>
            <div class="timeline__event__description">
              <p>
              {t('about-singer-full')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

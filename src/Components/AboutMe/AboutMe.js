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
            <img className="scrollarrow" src={ScrollWhite} />
            <img ClassName="scrollarrow" src={ScrollWhite} />
            <img ClassName="scrollarrow" src={ScrollWhite} />
          </motion.div>
        </div>
      </section>
      <hr id="aboutmehr"></hr>

      <h2 id="worktitle">{t("about-work")}</h2>

      <div class="timeline">
        <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
          <div class="timeline__event__icon ">
            <img src={DJ} />
          </div>
          <div class="timeline__event__date">{t("about-dj")}</div>
          <div class="timeline__event__content ">
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
            <img src={Dancer}></img>
          </div>
          <div class="timeline__event__date">{t("about-dancer")} </div>
          <div class="timeline__event__content">
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
            <img src={Musician}></img>
          </div>
          <div class="timeline__event__date">{t("about-musician")}</div>
          <div class="timeline__event__content">
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
            <img src={Editor} />
          </div>
          <div class="timeline__event__date">{t('about-editor')}</div>
          <div class="timeline__event__content">
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
            <img src={Tennis} />
          </div>
          <div class="timeline__event__date">
          {t('about-tennis-1')} <br></br>
          {t('about-tennis-2')}
          </div>
          <div class="timeline__event__content ">
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
            <img src={Gamer}></img>
          </div>
          <div class="timeline__event__date">{t('about-gamer')} </div>
          <div class="timeline__event__content">
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
            <img src={Singer}></img>
          </div>
          <div class="timeline__event__date">              {t('about-singer')}
</div>
          <div class="timeline__event__content">
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

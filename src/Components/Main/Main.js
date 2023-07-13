import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const navContainer = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.5,
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
};

const navButton = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { delay: 3 },
};

const handleSecret = (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Secret...",
    text: "...is not available yet, do come back later! :) ",
    icon: "question",
    confirmButtonText: `I'll be back`,
  });
};

export const Main = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const languageQuery = location.search;

  return (
    <motion.section
      id="main"
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mainHeader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <h1>Front-End Developer</h1>
        <hr />
        <h2>Akash Kumar</h2>
      </motion.div>
      <motion.div
        className="navContainer"
        initial="hidden"
        animate="visible"
        variants={navContainer}
      >
        <motion.div
          className="navButtons left"
          variants={navButton}
          transition="transition"
          exit={{ opacity: 0 }}
        >
          <Link to={`/aboutme` + languageQuery}>{t("main-nav-about")}</Link>
        </motion.div>
        <motion.div
          className="navButtons right"
          variants={navButton}
          exit={{ opacity: 0 }}
        >
          <Link to={`/skills` + languageQuery}>{t("main-nav-skills")}</Link>
        </motion.div>
        <motion.div
          className="navButtons left"
          variants={navButton}
          exit={{ opacity: 0 }}
        >
          <Link to={`/projects` + languageQuery}>{t("main-nav-projects")}</Link>
        </motion.div>
        <motion.div
          className="navButtons right"
          variants={navButton}
          exit={{ opacity: 0 }}
        >
          <Link to={`/pricing` + languageQuery}>{t("main-nav-pricing")}</Link>
        </motion.div>
        <motion.div
          className="navButtons left"
          variants={navButton}
          exit={{ opacity: 0 }}
        >
          <Link to={`/contact` + languageQuery}>{t("main-nav-contact")}</Link>
        </motion.div>
        <motion.div
          className="navButtons right"
          id="secret"
          variants={navButton}
          exit={{ opacity: 0 }}
        >
          <Link
            id="secrettext"
            className="navLink"
            to="/secret"
            onClick={handleSecret}
          >
            {t("main-nav-secret")}
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

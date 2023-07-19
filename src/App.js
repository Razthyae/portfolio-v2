import "./App.css";
import { Main } from "./Components/Main/Main";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contact } from "./Components/Contact/Contact";
import { Pricing } from "./Components/Pricing/Pricing";
import { Projects } from "./Components/Projects/Projects";
import { Skills } from "./Components/Skills/Skills";
import { Logo } from "./Components/Logo/Logo";
import { GoBack } from "./Components/GoBack/GoBack";


import { Language } from "./Components/Language/Language";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";


const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "pl", text: "Polish" },
];

const browserLanguage = window.navigator.language.slice(0, 2);
if (window.location.href.includes("?lng=")) {
} else if (browserLanguage === "en" || browserLanguage === "pl") {
  window.location.replace(window.location + "?lng=" + browserLanguage);
} else {
  window.location.replace(window.location + "?lng=en");
}

function App() {
  const location = useLocation();
  const { t } = useTranslation();
  const [lang, setLang] = useState();

  const languageChange = (event) => {
    let loc = location.pathname;
    if (event.target.value === "en" || event.target.value === "pl") {
      setLang(event.target.value);

      window.location.replace(loc + "?lng=" + event.target.value);
    } else {
      window.location.replace(loc + "?lng=en");
    }
  };

  const handleNavigation = () => {
    const backgroundBigger = () => {
      let background = document.getElementById("background");
      background.style.width = "150vw";
      background.style.height = "150vw";
    };

    const backgroundSmaller = () => {
      let background = document.getElementById("background");
      background.style.width = "35vw";
      background.style.height = "35vw";
    };

    location.pathname !== "/" ? backgroundBigger() : backgroundSmaller();
  };

  
 

  const language = 
  <Language 
  lang={lang}
  setLang={setLang}
  languageChange={languageChange}
  />   
  

  const cons = () => console.log("siema");

  useEffect(handleNavigation, [location.pathname]);

  return (
    <div>
      <GoBack />
      <div id="background"></div>

      <AnimatePresence mode="sync">
        <Routes key={location.pathname} location={location}>
         
            <Route path="/aboutme" element={<><AboutMe />{language}</>} />

            <Route path="/contact" element={<><Contact />{language}</>} />

            <Route path="/pricing" element={<><Pricing />{language}</>} />

            <Route path="/projects" element={<><Projects />{language}</>} />

            <Route path="/skills" element={<><Skills />{language}</>} />
          

          <Route
            path="/"
            element={
              <div>
                <Main />
                <Logo />
                {language}
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

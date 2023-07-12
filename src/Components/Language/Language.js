import React from "react";
import "./Language.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import English from "./english.svg";
import Polish from "./polish.svg";

export const Language = (props) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  return (
    <motion.section
    id="language"
    key="language"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.85 }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
      {searchParams.get("lng") === "en" && (
        <div id="languagebutton">
          
          <button onClick={props.languageChange} value="pl">
            Polska wersja
          </button>
        </div>
      )}

      {searchParams.get("lng") === "pl" && (
        <div id="languagebutton">
          
          <button onClick={props.languageChange} value="en">English version</button>
        </div>
      )}
    </motion.section>
  );
};

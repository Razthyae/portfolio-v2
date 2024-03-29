import React from "react";
import { motion } from "framer-motion";
import './Language.css'
import Polish from './polish.svg'
import English from './english.svg'
import { useSearchParams } from "react-router-dom";


export const Language = (props) => {
    const [searchParams] = useSearchParams();

    return (
        <motion.div
        id="test"
      key="test"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
 {searchParams.get("lng") === "en" && (
        <div id="languagebutton">
          <img src={Polish} alt="Polish flag"/>
          <button onClick={props.languageChange} value="pl">
            Polska wersja
          </button>
        </div>
      )}

      {searchParams.get("lng") === "pl" && (
        <div id="languagebutton">
                    <img src={English} alt="English flag"/>

          <button onClick={props.languageChange} value="en">English version</button>
        </div>
      )}

        </motion.div>
    )
}
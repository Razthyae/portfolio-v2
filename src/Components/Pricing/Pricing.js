import React, { useState } from "react";
import "./Pricing.css";
import { Questions } from "./Questions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser'

emailjs.init("NNnmNVIB_iyNBYFBZ")


export function Pricing() {
  let [question, setQuestion] = useState(1);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [question2, setQuestion2] = useState("")
  let [question3, setQuestion3] = useState("")
  let [question41, setQuestion41] = useState("")
  let [question42, setQuestion42] = useState("")
  let [question5, setQuestion5] = useState("")
  


  const { t } = useTranslation();

  const handleSubmit = () => {
    if (username === "" || email === "" || question2 === "" || question3 === "") {
     
      Swal.fire({
        title: t('pricing-error-title'),
        text: t("pricing-required"),
        icon: "error",
        confirmButtonText: t('pricing-close'),
      })
     
      ;
    } else {
      document.querySelector('#pricingsubmit').disabled = true

      var templateParams = {
        username: username,
        email: email,
        phone: phone,
        question2: question2,
        question3: question3,
        question41: question41,
        question42: question42,
        question5: question5
    }

    emailjs.send('default_service', "pricing", templateParams).then(() => {
      Swal.fire({
        title: t('pricing-success-title'),
        text: t("pricing-success"),
        icon: "success",
        confirmButtonText: t('pricing-close'),
      });
      console.log("Mail sent!")
      document.querySelector('#pricingsubmit').disabled = false
    }, () => {
      alert("Error, try again!")
      console.log("Error")
      document.querySelector('#pricingsubmit').disabled = false
    })




      
    }
  };

  return (
    <motion.section
      id="pricing"
      key="pricing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1 id="pricingHeader">
        {t("pricing-header-1")} <br></br>
        {t("pricing-header-2")}
      </h1>

      <Questions
        question={question}
        setQuestion={setQuestion}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        handleSubmit={handleSubmit}
        question2={question2}
        question3={question3}
        question41={question41}
        question42={question42}
        question5={question5}
        setQuestion2={setQuestion2}
        setQuestion3={setQuestion3}
        setQuestion41={setQuestion41}
        setQuestion42={setQuestion42}
        setQuestion5={setQuestion5}
      />
    </motion.section>
  );
}

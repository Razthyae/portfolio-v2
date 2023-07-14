import React from "react";
import "./Questions.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";



export function Questions(props) {
  const { t } = useTranslation();

  let currQuestion;
  switch (props.question) {
    case 1:
      const handleUsernameChange = (e) => {
        props.setUsername(e.target.value);
      };

      const handleEmailChange = (e) => {
        props.setEmail(e.target.value);
      };

      const handlePhoneChange = (e) => {
        props.setPhone(e.target.value);
      };

      currQuestion = (
        <motion.div
          className="question"
          key="question1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("pricing-contact")}
          </motion.h2>
          <input
            class="question-1-input"
            type="text"
            value={props.username}
            onChange={handleUsernameChange}
            placeholder={t("pricing-name")}
            id="user-name"
          ></input>
          <input
            class="question-1-input"
            type="email"
            value={props.email}
            onChange={handleEmailChange}
            placeholder={t("pricing-email")}
            id="user-email"
          ></input>
          <input
            class="question-1-input"
            type="tel"
            value={props.phone}
            onChange={handlePhoneChange}
            placeholder={t("pricing-phone")}
            id="user-phone"
          ></input>
        </motion.div>
      );
      break;

    case 2:
      const handleQuestion2Change = (e) => {
        props.setQuestion2(e.target.value);
      };

      currQuestion = (
        <motion.div
          className="question"
          key="question2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("pricing-2-1")}
            <br></br> {t("pricing-2-2")}
          </motion.h2>
          <textarea
            id="textarea1"
            value={props.question2}
            onChange={handleQuestion2Change}
          ></textarea>
        </motion.div>
      );
      break;

    case 3:
      const handleQuestion3Change = (e) => {
        props.setQuestion3(e.target.value);
      };

      currQuestion = (
        <motion.div
          className="question"
          key="question3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("pricing-3")}
          </motion.h2>
          <textarea
            id="textarea2"
            value={props.question3}
            onChange={handleQuestion3Change}
          ></textarea>
        </motion.div>
      );
      break;

    case 4:
      const handleQuestion41Change = (e) => {
        props.setQuestion41(e.target.value);
      };

      const handleQuestion42Change = (e) => {
        props.setQuestion42(e.target.value);
      };

      currQuestion = (
        <motion.div
          className="question"
          key="question4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("pricing-4-1")}
          </motion.h2>

          <textarea
            placeholder={t("pricing-4-2")}
            id="textarea3"
            value={props.question41}
            onChange={handleQuestion41Change}
          ></textarea>

          <textarea
            placeholder={t("pricing-4-3")}
            id="textarea4"
            value={props.question42}
            onChange={handleQuestion42Change}
          ></textarea>
        </motion.div>
      );
      break;

    case 5:
      const handleQuestion5Change = (e) => {
        props.setQuestion5(e.target.value);
      };

      currQuestion = (
        <motion.div
          className="question"
          key="question5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h2
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            {t("pricing-5")}
          </motion.h2>
          <textarea
            id="textarea5"
            value={props.question5}
            onChange={handleQuestion5Change}
          ></textarea>
        </motion.div>
      );
      break;
    case 6:
      currQuestion = (
        <div>
          <motion.div
            className="question"
            id="question6"
            key="question6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.h2
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              {t("pricing-6-1")} <br></br>
              {t("pricing-6-2")} <br></br>
              {t("pricing-6-3")}
            </motion.h2>
          </motion.div>
          
        </div>
      );
      break;
    default:
      currQuestion = <div className="question">Jak jak jak?</div>;
      break;
  }

  let buttons;
  if (props.question === 1) {
    buttons = (
      <button onClick={() => props.setQuestion(props.question + 1)}>
        {t("pricing-next")}
      </button>
    );
  } else if (props.question === 6) {
    buttons = (<div>
      <button onClick={() => props.setQuestion(props.question - 1)}>
        {t("pricing-previous")}
      </button>
      <button onClick={props.handleSubmit} id='pricingsubmit'>{t("pricing-6-4")}</button>
      </div>
    );
  } else {
    buttons = (
      <div>
        <button onClick={() => props.setQuestion(props.question - 1)}>
          {t("pricing-previous")}
        </button>
        <button onClick={() => props.setQuestion(props.question + 1)}>
          {t("pricing-next")}
        </button>
      </div>
    );
  }

  return (
    <div id="questionsContainer">
      <div id="questionNumber">
        {t("pricing-question-number")}
        {props.question}
      </div>

      {currQuestion}
      {buttons}
    </div>
  );
}

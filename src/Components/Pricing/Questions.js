import React from "react";
import './Questions.css'
import { motion } from "framer-motion";


export function Questions(props) {
    let currQuestion
    console.log(props.question)
    switch (props.question) {

        case 1:
            const handleUsernameChange = (e) => {
                props.setUsername(e.target.value)
            }

            const handleEmailChange = (e) => {
                props.setEmail(e.target.value)
            }

            const handlePhoneChange = (e) => {
                props.setPhone(e.target.value)
            }


            currQuestion = (
                <motion.div className="question"
                key="question1"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    >Contact info:</motion.h2>
                    <label>Name (required) </label>
                    <input type='text' value={props.username} onChange={handleUsernameChange}></input>
                    <label>E-mail (required) </label>
                    <input type='email' value={props.email} onChange={handleEmailChange}></input>
                    <label>Phone: </label>
                    <input type='tel' value={props.phone} onChange={handlePhoneChange}></input>
                </motion.div>
            )
            break;

        case 2:
            currQuestion = (
                <motion.div className="question"
                key="question2"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    >What is the purpose of your site? (business, personal, blog, portfolio etc.)<br></br> Please describe in details what would you like to achieve and how my project can help you (required)</motion.h2>
                    <textarea style={{ width: '100%', height: "200px" }}></textarea>
                </motion.div>
            )
            break;

        case 3:
            currQuestion = (
                <motion.div className="question"
                key="question3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}>What functionalities will you need? How many subpages will there be? (menu, contact, shop, slideshow gallery etc.) (required)</motion.h2>
                    <textarea style={{ width: '100%', height: "200px" }}></textarea>
                </motion.div>

            )
            break;

        case 4:
            currQuestion = (
                <motion.div className="question"
                key="question4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}>Inspirations - are there any websites similar to what you would like to achieve? (optional)</motion.h2>
                    <label>Website(s) with functionalities that you like: </label>
                    <textarea style={{ width: '100%', height: "90px" }}></textarea>
                    <label>Website(s) with graphic design that you like: </label>
                    <textarea style={{ width: '100%', height: "90px" }}></textarea>
                </motion.div>
            )
            break;

        case 5:
            currQuestion = (
                <motion.div className="question"
                key="question5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}>Anything else you would like to share with me to better understand your vision? (optional)</motion.h2>
                    <textarea style={{ width: '100%', height: "200px" }}></textarea>

                </motion.div>
            )
            break;
        case 6:
            currQuestion = (
                <div>
                <motion.div className="question"
                key="question6"
                initial={{ opacity: 0}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, transition: {duration: 0.5} }}>
                    <motion.h2
                    initial={{x: 10}}
                    animate={{x: 0}}
                    transition={{duration: 1}}>That's all! <br></br>Hit the submit button and I'll get back to you ASAP :)</motion.h2>
                </motion.div>
                <button onClick={props.handleSubmit}>Submit!</button>

                </div>
            )
            break;
        default:
            currQuestion = (
                <div className="question">Jak jak jak?</div>
            )
            break;

    }


    let buttons
    if (props.question === 1) {
        buttons = (
            <button onClick={() => props.setQuestion(props.question + 1)}>Next</button>
        )
    } else if (props.question === 6) {
        buttons = (
            <button onClick={() => props.setQuestion(props.question - 1)}>Previous</button>
        )
    } else {
        buttons = (<div>
            <button onClick={() => props.setQuestion(props.question - 1)}>Previous</button>
            <button onClick={() => props.setQuestion(props.question + 1)}>Next</button>
        </div>
        )
    }

    return (
        <div id="questionsContainer">
            <div id='questionButtons'>


            </div>
            <div id='question'>Question #{props.question}</div>

            {currQuestion}
            {buttons}

        </div>
    )
}
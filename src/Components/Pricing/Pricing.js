import React, { useState } from "react";
import './Pricing.css'
import { Questions } from "./Questions";
import { motion } from "framer-motion";

export function Pricing() {
    let [question, setQuestion] = useState(1)
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')

    const handleSubmit = () => {
        if (username === '' || email === '' || phone === '') {
            alert("Brak wymaganych danych!")
        } else {
            alert(`Dziękuję za wypełnienie formularza!`)
        }
    }

    return (
        <motion.section id="pricing"
        key="pricing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        exit={{ opacity: 0, transition: {duration: 0.5} }}
        >
            <h1 id='pricingHeader'>For pricing please answer few questions about your project. <br></br>The more info you provide me, the easier it will be to work together! :)</h1>

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
            />
           
        </motion.section>
    )
}

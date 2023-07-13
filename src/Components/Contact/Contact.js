import React from "react";
import './Contact.css'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Contact = () => {
const {t} = useTranslation()

    return (
        <motion.section id="contact"
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            exit={{ opacity: 0, transition: {duration: 0.5} }}
        >
            


            <div className='contactWrapper'>
                <div className="phone cta ">{t('contact-call')}</div>
                <div className="phone number">+48 796 453 528</div>
            </div>

            <a href='https://m.me/ZealDJ'>
                <div className='contactWrapper'>
                    <div className="phone cta ">Messenger</div>
                    <div className="phone number"> {t('contact-messenger')}</div>
                </div>
            </a>

            <a href='mailto:a_kumar@poczta.fm'>
                <div className='contactWrapper'>
                    <div className="phone cta ">{t('contact-email')}</div>
                    <div className="phone number">a_kumar@poczta.fm</div>
                </div>
            </a>

            <a href='https://razthyae.github.io/'>
                <div className='contactWrapper'>
                    <div className="phone cta ">GitHub</div>
                    <div className="phone number">https://razthyae.github.io/</div>
                </div>
            </a>


        </motion.section>
    )
}
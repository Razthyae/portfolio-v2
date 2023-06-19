import React from "react";
import { motion } from "framer-motion";
import './Logo.css'

export const Logo = () => {
    return (
        <motion.div id='logo'>
            <div>
            Akash Kumar
            <hr />
            Front End Developer
            </div>
        </motion.div>
    )
}
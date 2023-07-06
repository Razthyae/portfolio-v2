import React from "react"
import { useNavigate, useLocation} from "react-router-dom"
import arrow from './arrow-rotate-left.svg'
import './GoBack.css'
import { motion } from "framer-motion"

export function GoBack() {
    const navigate = useNavigate()
    
    const location = useLocation()
    if(location.pathname === '/') {
        return null
      }

      const backgroundTransform = () => {
        let background = document.getElementById("background")
        background.style.width = "35vw"  
        background.style.height = "35vw"  
        }  

       const handleClick = () => {
        backgroundTransform()
        navigate('/')
       } 
  
    return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
       
      <button onClick={handleClick} id='backButton'>
        
        <img src={arrow} style={{color: 'red'}}></img>
      </button>
      
  
      </motion.div>
    )
  
  }
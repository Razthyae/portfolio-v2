import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import arrow from './arrow-rotate-left.svg'
import './GoBack.css'

export function GoBack() {
    const history = useHistory()
    const location = useLocation()
    if(location.pathname === '/') {
        return null
      }

      const backgroundTransform = () => {
        let background = document.getElementById("background")
        background.style.width = "40vw"  
        background.style.height = "40vw"  
        }  

       const handleClick = () => {
        backgroundTransform()
        history.goBack()
       } 
  
    return (
      <div>
       
      <button onClick={handleClick} id='backButton'>
        
        <img src={arrow} style={{color: 'red'}}></img>
      </button>
      
  
      </div>
    )
  
  }
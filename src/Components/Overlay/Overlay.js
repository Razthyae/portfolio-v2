import React from 'react'
import './Overlay.css'
import Rotate from './rotate.png'

function Overlay() {
    return (
        <div className='overlay'>
                <p>This website is available in landscape orientation only. </p>
                <img src={Rotate} id="rotateimg" />
           <p>Rotate your device!</p>
        </div>
    )
}

export default Overlay

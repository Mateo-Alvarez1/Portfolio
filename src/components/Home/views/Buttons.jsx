import React from 'react'
import './views.css'

export const Buttons = () => {
  return (
    <div className='button_container'>
        <button onClick={() => window.open('https://drive.google.com/file/d/103kbwkKFT6W2976jDNb1Xb5KxzDJ2D09/view' , "_blank")} className='button_outline' >
            Download CV      
        </button>
        <button onClick={ () => <a href='#contact'></a>} className='button_outline'>
            Contact Me
        </button>
    </div>
  )
}

import { AiFillCopyrightCircle, AiFillGithub, AiFillHeart, AiFillLinkedin  } from 'react-icons/ai'
import './Footer.css'


export const Footer = () => {
  return (
   <div className='footer_container'>
    <div className='footer_content_container'>
        <h1>Mateo Alvarez</h1>  
        <div className="footer_icons">
        <a  className="a_moving" href="https://github.com/Mateo-Alvarez1" target="blank">
            <i><AiFillGithub /></i>
          </a>
          <a className="a_moving" href="https://www.linkedin.com/in/mateo-alvarez-55186b232/">
           <i><AiFillLinkedin /></i> 
          </a>
        </div>
        <p>All Rights Reserved <AiFillCopyrightCircle style={{ color:'var(--blue-color-soft)'}}/> <span> 2023 Mateo.js <AiFillHeart style={{ color:'var(--blue-color-soft)'}}/></span> </p>
    </div>
   </div>
  )
}

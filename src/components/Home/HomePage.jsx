import { Buttons } from "./views/Buttons";
import "./homePage.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AboutPage } from "../About/AboutPage";
import home from '../../assets/home.png'

export const HomePage = () => {
  return (
    <div className="home_container">
      <div className="home_container_text_button">
        <div className="home_text">
          <p>Hi , i'm</p>
          <h1>Mateo Alvarez</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="home_button">
          <Buttons />
        </div>
      </div>
      <div>
        <div>
          <img className="shake" src={home} alt=" Imagen sobre mi" />
        </div>

        <div className="home_icons">
          <a  className="a_moving" href="https://github.com/Mateo-Alvarez1" target="blank">
            <i><AiFillGithub /></i>
          </a>
          <a className="a_moving" href="https://www.linkedin.com/in/mateo-alvarez-55186b232/">
           <i><AiFillLinkedin /></i> 
          </a>
          <span>|</span>
        </div>
      </div>

      <AboutPage />
    </div>
  );
};

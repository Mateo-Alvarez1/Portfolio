import { Buttons } from "../Home/views/Buttons";
import "./aboutPage.css";

export const AboutPage = () => {
  return (
    <div className="about_container" id="about">
      <div>
        <img className="about_img shakeY" src="../../../src/assets/about.png" alt="Mateo Alvarez" />
      </div>
      <div className="about_container_texts">
        <div className="about_container_text">
          <div className="about_title">
            <span id="about_span">Get me know</span>
            <h1 id="about_h1">About Me</h1>
          </div>
          <div className="about_p">
            <p>
            I am a FrontEnd developer with experience in ReactJs. I like working with modern technologies to create innovative solutions. I am committed to collaborative project development and I like to look for new ways to optimize processes.
            </p>
          </div>
        </div>
        <div>
          <Buttons />
        </div>
      </div>
    </div>
  );
};

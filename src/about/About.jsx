import me from "../assets/me.png";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <div className="aboutContainer">
        <div>
          <a
            href="https://linkedin.com/in/mateoaalvarez"
            target="blank"
            className="icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Mateo-Alvarez1"
            target="blank"
            className="icon1"
          >
            <FaGithub />
          </a>
          <img src={me} alt="me" />
        </div>
        <div>
          <h1>About</h1>
          <p>
            As a developer, I highlight my solid experience in building
            infrastructures and implementing logics that support the optimal
            functioning of systems. My focus on detail and ability to translate
            ideas into code allow me to create efficient solutions
          </p>
          <a
            href="https://drive.google.com/file/d/1ABFitk4sn4rdqjhq_ZYW5tXrTJw4wp6Z/view"
            target="_blank"
          >
            <button className="buttons position">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

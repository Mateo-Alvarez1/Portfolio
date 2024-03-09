import "./contact.css";
import { MdArrowForwardIos } from "react-icons/md";

export const Contact = () => {
  return (
    <div id="contact">
      <h1 className="subtitles">Contact</h1>
      <div className="contactContainer">
        <div className="contactItems">
          <i>
            <MdArrowForwardIos />
          </i>
          <a
            href="https://api.whatsapp.com/send/?phone=2645109171&text&type=phone_number&app_absent=0"
            target="blank"
          >
            Whatsapp
          </a>
        </div>
        <div className="contactItems">
          <i>
            <MdArrowForwardIos />
          </i>
          <a href="https://github.com/Mateo-Alvarez1" target="blank">
            Github
          </a>
        </div>
        <div className="contactItems">
          <i>
            <MdArrowForwardIos />
          </i>
          <a href="https://www.linkedin.com/in/mateoaalvarez/" target="blank">
            Linkedin
          </a>
        </div>
        <div className="contactItems">
          <i>
            <MdArrowForwardIos />
          </i>
          <a
            href="mailto:mateoalvarez384@gmail.com?su&subject=Solicitud de Entrevista"
            target="blank"
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

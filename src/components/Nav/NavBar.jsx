import "./navBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import soundClick from '../../assets/soundClick.wav'

export const NavBar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <audio src={soundClick} id="click-sound"></audio>

      <a
        href="#"
        onClick={() => {
          setActive("#");
          const sound = document.getElementById("click-sound");
          sound.play("click-sound");
        }}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
          const sound = document.getElementById("click-sound");
          sound.play("click-sound");
        }}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActive("#skills");
          const sound = document.getElementById("click-sound");
          sound.play("click-sound");
        }}
        className={active === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#proyects"
        onClick={() => {
          setActive("#proyects");
          const sound = document.getElementById("click-sound");
          sound.play("click-sound");
        }}
        className={active === "#proyects" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActive("#contact");
          const sound = document.getElementById("click-sound");
          sound.play("click-sound");
        }}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

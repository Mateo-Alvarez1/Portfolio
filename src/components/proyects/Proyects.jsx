import { AiFillGithub } from "react-icons/ai";
import proyects1 from "../../assets/proyects1.png";
import proyects2 from "../../assets/proyects2.png";
import proyects3 from "../../assets/proyects3.jpg";

import "./proyects.css";

export const Proyects = () => {
  const proyects = [
    {
      id: Math.random() * 2,
      title: "ToDo App",
      url: proyects2,
      github: "https://github.com/Mateo-Alvarez1/ToDoApp",
      demo: "http://to-do-el6ptwyxv-mateo-alvarez1.vercel.app/",
      description: 'Development of a task application to help users organize their daily activities.'
    },
    {
      id: Math.random()*2,
      title: 'Tic Tac Toe',
      url: proyects1,
      github:'https://github.com/Mateo-Alvarez1/Tic-Tac-Toe' ,
      demo: 'https://tict-tac-toe.netlify.app/',
      description: 'Development of a Tic Tac Toe game for two players, where the objective is to align three tiles in a horizontal, vertical or diagonal line.'
    },
    {
      id: Math.random()*2,
      title: 'Heroes App',
      url: proyects3,
      github:'https://github.com/Mateo-Alvarez1/HeroesApp/tree/main' ,
      demo: 'https://heroessapp.netlify.app/',
      description: 'Development of a heroes application with detailed information about their abilities and appearances in different media.'
    },
  ];

  return (
    <div className="proyects_container" id="proyects">
      <div className="about_title skills_title">
        <span id="about_span">See here my</span>
        <h1 id="about_h1">Proyects</h1>
      </div>
      <div className="cards_container">
        {proyects.map((proyect) => (
            <div className="cards" key={proyect.id}>
              <img src={ proyect.url } alt={ proyect.title } />
            <div className="column_container">
              <h2>{ proyect.title }</h2> 
              <p>{proyect.description}</p>
              <div className="button_container">
                <a href={ proyect.github } target="blank"  >
                  <button className="button_outline" ><AiFillGithub/> GitHub</button>
                </a>
                <a href={ proyect.demo } target="blank">
                  <button className="button_outline">View Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
